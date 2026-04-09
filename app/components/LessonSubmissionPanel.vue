<script setup lang="ts">
interface SubmissionFileItem {
  id: string
  fileName: string
  fileMimetype: string
  driveFileId: string | null
  driveUrl: string | null
  createdAt: string
}

interface SubmissionResponse {
  submissionId: string
  lessonId: string
  userId: string
  status: string
  version: number
  contentText: string | null
  createdAt: string
  updatedAt: string
  files: SubmissionFileItem[]
}

type SubmissionStateStatus = 'ACTIVE' | 'WAITING' | 'GRADING' | 'PASS' | 'FAIL'

interface SubmissionStateResponse {
  status: SubmissionStateStatus
  canSubmit: boolean
  latestSubmission: SubmissionResponse | null
}

const props = withDefaults(defineProps<{
  submissionPath: string
  apiBaseUrl: string
  isAuthEnabled: boolean
  isAuthenticated: boolean
  accessToken: string
  maxFiles: number
  maxFileSizeMb: number
}>(), {
  maxFiles: 10,
  maxFileSizeMb: 10,
})

const emit = defineEmits<{
  openLogin: []
}>()

const contentText = ref('')
const selectedFiles = ref<File[]>([])
const isSubmitting = ref(false)
const errorMessage = ref('')
const successMessage = ref('')
const latestSubmission = ref<SubmissionResponse | null>(null)
const currentState = ref<SubmissionStateResponse | null>(null)

const maxFileSizeBytes = computed(() => props.maxFileSizeMb * 1024 * 1024)
const hasApiBase = computed(() => Boolean(props.apiBaseUrl))
const hasSubmissionContent = computed(() => Boolean(contentText.value.trim()) || selectedFiles.value.length > 0)
const canSubmit = computed(() => hasSubmissionContent.value && (currentState.value?.canSubmit ?? true))
const statusLabel = computed(() => {
  switch (currentState.value?.status) {
    case 'WAITING':
      return 'Waiting for grading'
    case 'GRADING':
      return 'Grading in progress'
    case 'PASS':
      return 'Passed'
    case 'FAIL':
      return 'Failed'
    default:
      return 'Active'
  }
})
const statusToneClass = computed(() => {
  switch (currentState.value?.status) {
    case 'WAITING':
      return 'border-amber-400/30 bg-amber-400/10 text-amber-200'
    case 'GRADING':
      return 'border-sky-400/30 bg-sky-400/10 text-sky-200'
    case 'PASS':
      return 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200'
    case 'FAIL':
      return 'border-red-400/30 bg-red-400/10 text-red-200'
    default:
      return 'border-brand-orange/30 bg-brand-orange/10 text-brand-orange'
  }
})

function clearMessages() {
  errorMessage.value = ''
  successMessage.value = ''
}

function onSelectFiles(event: Event) {
  clearMessages()
  const target = event.target as HTMLInputElement
  const files = Array.from(target.files || [])

  if (files.length > props.maxFiles) {
    errorMessage.value = `You can upload up to ${props.maxFiles} files.`
    selectedFiles.value = files.slice(0, props.maxFiles)
    return
  }

  const oversized = files.find(file => file.size > maxFileSizeBytes.value)
  if (oversized) {
    errorMessage.value = `File ${oversized.name} exceeds ${props.maxFileSizeMb}MB.`
    selectedFiles.value = []
    target.value = ''
    return
  }

  selectedFiles.value = files
}

function removeFile(index: number) {
  clearMessages()
  selectedFiles.value = selectedFiles.value.filter((_, fileIndex) => fileIndex !== index)
}

function buildHeaders(): HeadersInit {
  if (!props.accessToken) {
    return {}
  }

  return {
    Authorization: `Bearer ${props.accessToken}`,
  }
}

function normalizeApiBase(apiBase: string): string {
  return apiBase.replace(/\/+$/, '')
}

async function loadSubmissionState() {
  if (!hasApiBase.value || !props.submissionPath) {
    return
  }

  if (props.isAuthEnabled && !props.isAuthenticated) {
    currentState.value = {
      status: 'ACTIVE',
      canSubmit: true,
      latestSubmission: null,
    }
    latestSubmission.value = null
    return
  }

  try {
    const response = await $fetch<SubmissionStateResponse>(
      `${normalizeApiBase(props.apiBaseUrl)}/api/${props.submissionPath.replace(/^\/+/, '')}/state`,
      {
        headers: buildHeaders(),
      },
    )

    currentState.value = response
    latestSubmission.value = response.latestSubmission
  }
  catch (error: unknown) {
    const fetchError = error as {
      data?: { message?: string | string[] }
      status?: number
    }
    const message = fetchError?.data?.message
    const parsedMessage = Array.isArray(message) ? message.join(', ') : message

    currentState.value = {
      status: 'ACTIVE',
      canSubmit: true,
      latestSubmission: null,
    }
  }
}

onMounted(() => {
  void loadSubmissionState()
})

async function submit() {
  clearMessages()

  const hasText = Boolean(contentText.value.trim())
  if (!hasText && selectedFiles.value.length === 0) {
    errorMessage.value = 'Please add text or at least one file before submitting.'
    return
  }

  if (currentState.value && !currentState.value.canSubmit) {
    errorMessage.value = `This assignment is currently ${statusLabel.value.toLowerCase()}. Resubmission is unavailable.`
    return
  }

  if (props.isAuthEnabled && !props.isAuthenticated) {
    emit('openLogin')
    return
  }

  if (!hasApiBase.value) {
    errorMessage.value = 'API base URL is missing. Set NUXT_PUBLIC_API_BASE_URL.'
    return
  }

  if (!props.submissionPath) {
    errorMessage.value = 'Submission path is missing for this lesson.'
    return
  }

  isSubmitting.value = true

  try {
    const formData = new FormData()
    if (hasText) {
      formData.append('contentText', contentText.value.trim())
    }

    formData.append('fileCount', String(selectedFiles.value.length))
    for (const file of selectedFiles.value) {
      formData.append('files', file)
    }

    const response = await $fetch<SubmissionResponse>(
      `${normalizeApiBase(props.apiBaseUrl)}/api/${props.submissionPath.replace(/^\/+/, '')}`,
      {
        method: 'POST',
        body: formData,
        headers: buildHeaders(),
      },
    )

    currentState.value = {
      status: 'WAITING',
      canSubmit: true,
      latestSubmission: response,
    }
    latestSubmission.value = response
    successMessage.value = `Submitted successfully. Version ${response.version} is now waiting for grading.`
    contentText.value = ''
    selectedFiles.value = []
  }
  catch (error: unknown) {
    const fetchError = error as {
      data?: { message?: string | string[] }
      status?: number
    }

    const message = fetchError?.data?.message
    const parsedMessage = Array.isArray(message) ? message.join(', ') : message

    if (fetchError?.status === 429) {
      errorMessage.value = parsedMessage || 'Submission is temporarily rate-limited. Please wait and try again.'
    }
    else if (fetchError?.status === 403) {
      errorMessage.value = parsedMessage || 'Resubmission is not allowed after passing this assignment.'
    }
    else {
      errorMessage.value = parsedMessage || 'Submission failed. Please try again.'
    }
  }
  finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="glass-card rounded-2xl border border-brand-orange/20 p-4 sm:p-6 md:p-8 mb-8">
    <header class="mb-5">
      <p class="text-brand-orange text-xs uppercase tracking-[0.18em] font-semibold">Assignment Submission</p>
      <h3 class="text-xl font-bold mt-2">Submit your work</h3>
      <p class="text-sm text-[rgba(224,224,224,0.65)] mt-1">
        Attach files and optional notes. Max {{ maxFiles }} files, {{ maxFileSizeMb }}MB each.
      </p>
    </header>

    <div class="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]" :class="statusToneClass">
      <span>Status</span>
      <span>{{ statusLabel }}</span>
    </div>

    <div class="space-y-5">
      <label class="block">
        <span class="block text-sm font-semibold mb-2">Notes (optional)</span>
        <textarea
          v-model="contentText"
          rows="5"
          class="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-sm text-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-brand-orange/50"
          placeholder="Add context for your submission..."
        />
      </label>

      <label class="block">
        <span class="block text-sm font-semibold mb-2">Files</span>
        <input
          type="file"
          multiple
          class="block w-full text-sm file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border file:border-brand-orange/40 file:bg-brand-orange/10 file:text-brand-orange"
          @change="onSelectFiles"
        >
      </label>

      <ul v-if="selectedFiles.length > 0" class="space-y-2">
        <li
          v-for="(file, index) in selectedFiles"
          :key="`${file.name}-${file.lastModified}-${index}`"
          class="flex items-center justify-between gap-3 text-sm bg-white/5 border border-white/10 rounded-lg px-3 py-2"
        >
          <div class="min-w-0">
            <p class="truncate">{{ file.name }}</p>
            <p class="text-xs text-[rgba(224,224,224,0.5)]">{{ (file.size / 1024 / 1024).toFixed(2) }} MB</p>
          </div>
          <button class="text-xs text-red-300 hover:text-red-200" @click="removeFile(index)">Remove</button>
        </li>
      </ul>

      <p v-if="errorMessage" class="text-sm text-red-300">{{ errorMessage }}</p>
      <p v-if="successMessage" class="text-sm text-emerald-300">{{ successMessage }}</p>

      <button
        class="btn btn-primary"
        :disabled="isSubmitting || !canSubmit"
        @click="submit"
      >
        <Icon :name="isSubmitting ? 'mdi:loading' : 'mdi:cloud-upload-outline'" :class="{ 'animate-spin': isSubmitting }" />
        {{ isSubmitting ? 'Submitting...' : 'Submit Assignment' }}
      </button>

      <div v-if="latestSubmission" class="mt-4 text-xs text-[rgba(224,224,224,0.55)] border-t border-white/10 pt-3">
        Latest submission: version {{ latestSubmission.version }} · {{ latestSubmission.status }} · {{ latestSubmission.files.length }} file(s)
      </div>
    </div>
  </section>
</template>
