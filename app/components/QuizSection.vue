<script setup lang="ts">
import type { QuizQuestion } from '~/types/course'

const props = defineProps<{
  questions: QuizQuestion[]
  title?: string
  returnTo?: string
  courseSlug: string
  lessonSlug: string
  passPercentage?: number
}>()

const passThreshold = computed(() => props.passPercentage ?? 70)

const { isAuthenticated, accessToken } = useKeycloak()
const config = useRuntimeConfig()
const apiBaseUrl = (config.public.apiBaseUrl as string).replace(/\/+$/, '')
const showLoginModal = ref(false)

const selectedAnswers = ref<Record<number, string>>({})
const isChecked = ref(false)
const score = ref(0)
const isSubmitting = ref(false)
const isSubmitted = ref(false)
const submitError = ref('')
const isFetchingScore = ref(false)
const savedScore = ref<{ score: number; totalQuestions: number; scorePercentage: number; passed: boolean; submittedAt: string; answers?: Record<number, string> } | null>(null)

const storageKey = `quiz_state_${props.courseSlug}_${props.lessonSlug}`

function buildScoreUrl() {
  return `${apiBaseUrl}/api/courses/${props.courseSlug}/lessons/${props.lessonSlug}/quiz/score`
}

function buildAuthHeaders(): Record<string, string> {
  return accessToken.value ? { Authorization: `Bearer ${accessToken.value}` } : {}
}

/** Fetch existing quiz score from backend */
async function fetchExistingScore() {
  if (!isAuthenticated.value || !apiBaseUrl) return
  isFetchingScore.value = true
  try {
    const data = await $fetch<{ score: number | null; totalQuestions: number | null; scorePercentage: number | null; passed: boolean | null; submittedAt: string | null; answers?: Record<string, string> }>(buildScoreUrl(), {
      headers: buildAuthHeaders(),
    })
    if (data.score !== null && data.totalQuestions !== null && data.scorePercentage !== null && data.submittedAt !== null) {
      const parsedAnswers: Record<number, string> = {}
      if (data.answers) {
        for (const [key, val] of Object.entries(data.answers)) {
          parsedAnswers[Number(key)] = val
        }
      }
      savedScore.value = {
        score: data.score,
        totalQuestions: data.totalQuestions,
        scorePercentage: data.scorePercentage,
        passed: data.passed ?? false,
        submittedAt: data.submittedAt,
        answers: Object.keys(parsedAnswers).length > 0 ? parsedAnswers : undefined,
      }
      // Restore previously submitted answers and show checked state
      if (Object.keys(parsedAnswers).length > 0) {
        selectedAnswers.value = parsedAnswers
        isChecked.value = true
      }
      score.value = data.score
      isSubmitted.value = true
    }
  }
  catch { /* silently ignore — user may not have submitted yet */ }
  finally {
    isFetchingScore.value = false
  }
}

/** Persist current quiz state to sessionStorage so it survives a login redirect */
function saveQuizState() {
  if (!import.meta.client) return
  sessionStorage.setItem(storageKey, JSON.stringify({
    selectedAnswers: selectedAnswers.value,
    isChecked: isChecked.value,
    score: score.value,
  }))
}

/** Restore quiz state from sessionStorage (e.g. after returning from login) */
function restoreQuizState() {
  if (!import.meta.client) return
  const raw = sessionStorage.getItem(storageKey)
  if (!raw) return
  try {
    const saved = JSON.parse(raw)
    if (saved.selectedAnswers) selectedAnswers.value = saved.selectedAnswers
    if (saved.isChecked) isChecked.value = saved.isChecked
    if (typeof saved.score === 'number') score.value = saved.score
    sessionStorage.removeItem(storageKey)
  } catch { /* ignore corrupt data */ }
}

onMounted(() => {
  restoreQuizState()
  fetchExistingScore()
})

function checkQuiz() {
  let correct = 0
  props.questions.forEach((q, i) => {
    if (selectedAnswers.value[i] === q.answer) {
      correct++
    }
  })
  score.value = correct
  isChecked.value = true
  isSubmitted.value = false
  submitError.value = ''

  // Auto-submit score to backend if authenticated
  if (isAuthenticated.value) {
    submitScore()
  }
}

function resetQuiz() {
  selectedAnswers.value = {}
  isChecked.value = false
  score.value = 0
  isSubmitted.value = false
  submitError.value = ''
}

const returnToWithTab = computed(() => {
  const base = props.returnTo || ''
  if (!base) return ''
  try {
    const url = new URL(base, 'https://skill-wanderer.com')
    url.searchParams.set('tab', 'quiz')
    return `${url.pathname}${url.search}${url.hash}`
  }
  catch {
    return base.includes('?') ? `${base}&tab=quiz` : `${base}?tab=quiz`
  }
})

async function submitScore() {
  if (!isAuthenticated.value) {
    saveQuizState()
    showLoginModal.value = true
    return
  }

  isSubmitting.value = true
  submitError.value = ''

  try {
    await $fetch(buildScoreUrl(), {
      method: 'POST',
      headers: buildAuthHeaders(),
      body: {
        score: score.value,
        totalQuestions: props.questions.length,
        scorePercentage: scorePercentage.value,
        passPercentage: passThreshold.value,
        answers: selectedAnswers.value,
      },
    })
    isSubmitted.value = true
    savedScore.value = {
      score: score.value,
      totalQuestions: props.questions.length,
      scorePercentage: scorePercentage.value,
      passed: scorePercentage.value >= passThreshold.value,
      submittedAt: new Date().toISOString(),
    }
  }
  catch {
    submitError.value = 'Failed to submit score. Please try again.'
  }
  finally {
    isSubmitting.value = false
  }
}

function getOptionStatus(questionIndex: number, optionKey: string): 'correct' | 'incorrect' | 'missed' | null {
  if (!isChecked.value) return null
  const question = props.questions[questionIndex]
  if (!question) return null
  const selected = selectedAnswers.value[questionIndex]

  if (optionKey === question.answer && selected === optionKey) return 'correct'
  if (optionKey === question.answer && selected !== optionKey) return 'missed'
  if (optionKey === selected && selected !== question.answer) return 'incorrect'
  return null
}

function getQuestionFeedback(questionIndex: number): { kind: 'correct' | 'incorrect'; text: string } | null {
  if (!isChecked.value) return null
  const question = props.questions[questionIndex]
  if (!question) return null

  const selected = selectedAnswers.value[questionIndex]
  if (selected === undefined) return null

  if (selected === question.answer) {
    if (!question.correctExplanation) return null
    return {
      kind: 'correct',
      text: question.correctExplanation,
    }
  }

  return {
    kind: 'incorrect',
    text: question.incorrectExplanation ?? 'Review the lesson summary and compare the correct answer with the role AI should actually play in that situation.',
  }
}

const allAnswered = computed(() => {
  return props.questions.every((_, i) => selectedAnswers.value[i] !== undefined)
})

const unansweredCount = computed(() => {
  return props.questions.filter((_, i) => selectedAnswers.value[i] === undefined).length
})

const scorePercentage = computed(() => {
  return Math.round((score.value / props.questions.length) * 100)
})
</script>

<template>
  <div class="mt-8 bg-surface-card border border-brand-orange/15 rounded-2xl p-8 max-md:p-5">
    <div class="flex items-start gap-3.5 mb-6">
      <div class="text-[2rem] shrink-0 leading-none">📝</div>
      <div>
        <h2 class="text-[1.4rem] font-bold mb-1 gradient-text">{{ title || 'Module Quiz' }}</h2>
        <p class="text-sm text-[rgba(224,224,224,0.5)] m-0">Optional — Test your understanding of the module concepts</p>
      </div>
    </div>

    <!-- Previous Score Banner (fetched from API) -->
    <div v-if="!isChecked && savedScore" class="quiz-score-banner" :class="savedScore.scorePercentage >= passThreshold ? 'quiz-score-banner--pass' : 'quiz-score-banner--fail'">
      <div class="flex items-center gap-3">
        <span class="text-[1.8rem] shrink-0">{{ savedScore.scorePercentage >= passThreshold ? '🎉' : '📖' }}</span>
        <div>
          <strong class="block text-[1.05rem] text-[#e0e0e0]">
            {{ savedScore.scorePercentage >= passThreshold ? 'Previously passed!' : 'Previous attempt' }}
          </strong>
          <p class="mt-0.5 text-sm text-[rgba(224,224,224,0.6)] m-0">
            Your last score: <strong class="text-[#e0e0e0]">{{ savedScore.score }}/{{ savedScore.totalQuestions }}</strong> ({{ savedScore.scorePercentage }}%)
          </p>
        </div>
      </div>
    </div>

    <!-- Score Banner -->
    <div v-if="isChecked" class="quiz-score-banner" :class="scorePercentage >= passThreshold ? 'quiz-score-banner--pass' : 'quiz-score-banner--fail'">
      <div class="flex items-center gap-3">
        <span class="text-[1.8rem] shrink-0">{{ scorePercentage >= passThreshold ? '🎉' : '📖' }}</span>
        <div>
          <strong class="block text-[1.05rem] text-[#e0e0e0]">
            {{ scorePercentage >= passThreshold ? 'Great job!' : 'Keep studying!' }}
          </strong>
          <p class="mt-0.5 text-sm text-[rgba(224,224,224,0.6)] m-0">
            You scored <strong class="text-[#e0e0e0]">{{ score }}/{{ questions.length }}</strong> ({{ scorePercentage }}%)
            <span v-if="isSubmitted" class="text-[#4ade80] text-[0.85rem] font-medium">— Score saved ✓</span>
          </p>
        </div>
      </div>
      <button class="inline-flex items-center gap-1.5 px-[18px] py-2 rounded-full text-[0.85rem] font-semibold border border-brand-orange/30 bg-transparent text-brand-orange cursor-pointer transition-all duration-300 hover:bg-brand-orange/10 hover:border-brand-orange" @click="resetQuiz">
        <Icon name="mdi:refresh" />
        Try Again
      </button>
    </div>

    <!-- Questions -->
    <ol class="list-none p-0 m-0 flex flex-col gap-6">
      <li
        v-for="(question, qi) in questions"
        :key="qi"
        class="quiz-question"
        :class="{ 'quiz-question--checked': isChecked }"
      >
        <p class="text-base font-semibold text-[#e0e0e0] mb-4 leading-relaxed m-0">
          <span class="text-brand-orange mr-1.5">{{ qi + 1 }}.</span>
          {{ question.question }}
        </p>
        <div class="flex flex-col gap-2">
          <label
            v-for="(option, key) in question.options"
            :key="key"
            class="quiz-option"
            :class="{
              'quiz-option--selected': selectedAnswers[qi] === key,
              'quiz-option--correct': getOptionStatus(qi, key) === 'correct',
              'quiz-option--incorrect': getOptionStatus(qi, key) === 'incorrect',
              'quiz-option--missed': getOptionStatus(qi, key) === 'missed',
              'quiz-option--disabled': isChecked,
            }"
          >
            <input
              type="radio"
              :name="`quiz-q-${qi}`"
              :value="key"
              :disabled="isChecked"
              v-model="selectedAnswers[qi]"
              class="hidden"
            />
            <span class="quiz-option-key">{{ key }}</span>
            <span class="flex-1">{{ option }}</span>
            <span v-if="getOptionStatus(qi, key) === 'correct'" class="text-[1.2rem] text-[#4caf50] shrink-0 flex">
              <Icon name="mdi:check-circle" />
            </span>
            <span v-if="getOptionStatus(qi, key) === 'incorrect'" class="text-[1.2rem] text-[#f44336] shrink-0 flex">
              <Icon name="mdi:close-circle" />
            </span>
            <span v-if="getOptionStatus(qi, key) === 'missed'" class="text-[1.2rem] text-[#4caf50] shrink-0 flex">
              <Icon name="mdi:check-circle-outline" />
            </span>
          </label>
        </div>
        <div
          v-if="getQuestionFeedback(qi)"
          class="quiz-feedback"
          :class="getQuestionFeedback(qi)?.kind === 'correct' ? 'quiz-feedback--correct' : 'quiz-feedback--incorrect'"
        >
          <p class="quiz-feedback-title">
            {{ getQuestionFeedback(qi)?.kind === 'correct' ? 'Why this is right' : 'Why this is wrong' }}
          </p>
          <p class="quiz-feedback-text">{{ getQuestionFeedback(qi)?.text }}</p>
          <p v-if="getQuestionFeedback(qi)?.kind === 'incorrect'" class="quiz-feedback-answer">
            Correct answer: <strong>{{ question.answer }}. {{ question.options[question.answer] }}</strong>
          </p>
        </div>
      </li>
    </ol>

    <!-- Quiz Result Summary -->
    <div v-if="isChecked" class="quiz-result-summary" :class="scorePercentage >= passThreshold ? 'quiz-result-summary--pass' : 'quiz-result-summary--fail'">
      <div class="flex items-center justify-center gap-2.5 mb-5">
        <span class="text-[1.6rem]">{{ scorePercentage >= passThreshold ? '🏆' : '💪' }}</span>
        <span class="quiz-result-label text-[1.2rem] font-bold">{{ scorePercentage >= passThreshold ? 'You Passed!' : 'Not Quite There' }}</span>
      </div>
      <div class="flex items-center justify-center gap-6 mb-5 max-md:gap-4">
        <div class="flex flex-col items-center gap-1">
          <span class="text-2xl font-extrabold text-[#e0e0e0] max-md:text-xl">{{ score }}/{{ questions.length }}</span>
          <span class="text-[0.78rem] uppercase tracking-wide text-[rgba(224,224,224,0.45)] font-semibold">Correct</span>
        </div>
        <div class="w-px h-9 bg-white/[0.08]" />
        <div class="flex flex-col items-center gap-1">
          <span class="text-2xl font-extrabold text-[#e0e0e0] max-md:text-xl">{{ scorePercentage }}%</span>
          <span class="text-[0.78rem] uppercase tracking-wide text-[rgba(224,224,224,0.45)] font-semibold">Score</span>
        </div>
        <div class="w-px h-9 bg-white/[0.08]" />
        <div class="flex flex-col items-center gap-1">
          <span class="text-2xl font-extrabold text-[#e0e0e0] max-md:text-xl">{{ passThreshold }}%</span>
          <span class="text-[0.78rem] uppercase tracking-wide text-[rgba(224,224,224,0.45)] font-semibold">Passing</span>
        </div>
      </div>
      <div class="relative h-2 rounded bg-white/[0.06]">
        <div
          class="h-full rounded transition-[width] duration-[600ms]"
          :class="scorePercentage >= passThreshold ? 'bg-gradient-to-r from-[#4caf50] to-[#66bb6a]' : 'bg-gradient-to-r from-[#ffc107] to-[#ffca28]'"
          :style="{ width: scorePercentage + '%' }"
        />
        <div class="absolute -top-1 w-0.5 h-4 bg-white/30 rounded-sm -translate-x-1/2" :style="{ left: passThreshold + '%' }" />
      </div>
    </div>

    <!-- Actions -->
    <div class="mt-8 flex items-center gap-4 flex-wrap max-md:flex-col max-md:items-stretch">
      <div v-if="!isChecked" class="quiz-btn-wrapper relative">
        <button
          class="btn btn-primary py-3 px-7 text-base max-md:justify-center"
          :disabled="!allAnswered"
          @click="checkQuiz"
        >
          <Icon name="mdi:check-bold" />
          Check Quiz
        </button>
        <span v-if="!allAnswered" class="quiz-btn-tooltip">
          Please answer all {{ questions.length }} questions before checking ({{ unansweredCount }} remaining)
        </span>
      </div>
      <button
        v-else
        class="btn btn-outline py-3 px-7 text-base max-md:justify-center"
        @click="resetQuiz"
      >
        <Icon name="mdi:refresh" />
        Retake Quiz
      </button>

      <div v-if="isChecked && !isAuthenticated" class="flex items-center gap-2.5 flex-wrap max-md:flex-col max-md:items-center">
        <button
          class="btn btn-outline py-3 px-7 text-base max-md:justify-center"
          @click="submitScore"
        >
          <Icon name="mdi:login" />
          Log in to save score
        </button>
      </div>

      <div v-if="isChecked && isAuthenticated" class="flex items-center gap-2.5 flex-wrap max-md:flex-col max-md:items-center">
        <span v-if="isSubmitting" class="inline-flex items-center gap-1.5 text-[#4ade80] font-semibold text-[0.95rem]">
          <Icon name="mdi:loading" class="animate-spin" />
          Saving score...
        </span>
        <span v-else-if="isSubmitted" class="inline-flex items-center gap-1.5 text-[#4ade80] font-semibold text-[0.95rem]">
          <Icon name="mdi:check-circle" />
          Score Submitted!
        </span>
        <button
          v-else-if="submitError"
          class="btn btn-outline py-3 px-7 text-base max-md:justify-center"
          :disabled="isSubmitting"
          @click="submitScore"
        >
          <Icon name="mdi:cloud-upload-outline" />
          Retry Submit
        </button>
        <p v-if="submitError" class="text-[#f87171] text-[0.85rem] m-0">{{ submitError }}</p>
      </div>
    </div>

    <LoginRequiredModal :visible="showLoginModal" :return-to="returnToWithTab" @close="showLoginModal = false" />
  </div>
</template>

<style scoped>
/* Score Banner Variants */
.quiz-score-banner {
  @apply flex items-center justify-between gap-4 px-5 py-4 rounded-xl mb-6 flex-wrap max-md:flex-col max-md:items-start;
}
.quiz-score-banner--pass {
  @apply bg-[rgba(76,175,80,0.1)] border border-[rgba(76,175,80,0.3)];
}
.quiz-score-banner--fail {
  @apply bg-[rgba(255,193,7,0.08)] border border-[rgba(255,193,7,0.25)];
}

/* Question Card */
.quiz-question {
  @apply p-5 bg-white/[0.02] border border-white/[0.06] rounded-xl transition-colors duration-300 max-md:p-4;
}
.quiz-question:hover:not(.quiz-question--checked) {
  @apply border-brand-orange/15;
}

/* Option States */
.quiz-option {
  @apply flex items-center gap-2.5 py-2.5 px-3.5 rounded-lg border border-white/[0.06] bg-white/[0.02] cursor-pointer transition-all duration-200 text-[rgba(224,224,224,0.75)] text-[0.92rem] max-md:py-2 max-md:px-3 max-md:text-[0.87rem];
}
.quiz-option:hover:not(.quiz-option--disabled) {
  @apply bg-white/[0.05] border-brand-orange/20;
}
.quiz-option--selected:not(.quiz-option--correct):not(.quiz-option--incorrect) {
  @apply bg-brand-orange/[0.08] border-brand-orange/30 text-[#e0e0e0];
}
.quiz-option--correct {
  background: rgba(76, 175, 80, 0.1) !important;
  border-color: rgba(76, 175, 80, 0.4) !important;
  color: #4caf50 !important;
}
.quiz-option--incorrect {
  background: rgba(244, 67, 54, 0.08) !important;
  border-color: rgba(244, 67, 54, 0.35) !important;
  color: #f44336 !important;
}
.quiz-option--missed {
  background: rgba(76, 175, 80, 0.05) !important;
  border-color: rgba(76, 175, 80, 0.25) !important;
  color: rgba(76, 175, 80, 0.7) !important;
}
.quiz-option--disabled {
  @apply cursor-default;
}

/* Question Feedback */
.quiz-feedback {
  @apply mt-3 rounded-lg border px-4 py-3;
}
.quiz-feedback--correct {
  @apply border-[rgba(76,175,80,0.28)] bg-[rgba(76,175,80,0.08)];
}
.quiz-feedback--incorrect {
  @apply border-[rgba(255,193,7,0.25)] bg-[rgba(255,193,7,0.08)];
}
.quiz-feedback-title {
  @apply m-0 mb-1 text-[0.82rem] font-semibold uppercase tracking-wide;
}
.quiz-feedback--correct .quiz-feedback-title {
  @apply text-[#4caf50];
}
.quiz-feedback--incorrect .quiz-feedback-title {
  @apply text-[#ffc107];
}
.quiz-feedback-text {
  @apply m-0 text-[0.92rem] leading-relaxed text-[#e0e0e0];
}
.quiz-feedback-answer {
  @apply m-0 mt-2 text-[0.88rem] leading-relaxed text-[rgba(224,224,224,0.72)];
}

/* Option Key Circles */
.quiz-option-key {
  @apply inline-flex items-center justify-center w-[26px] h-[26px] rounded-full text-[0.78rem] font-bold shrink-0 border-2 border-white/[0.12] bg-transparent transition-all duration-200;
}
.quiz-option--selected:not(.quiz-option--correct):not(.quiz-option--incorrect) .quiz-option-key {
  @apply border-brand-orange bg-brand-orange text-white;
}
.quiz-option--correct .quiz-option-key {
  @apply border-[#4caf50] bg-[#4caf50] text-white;
}
.quiz-option--incorrect .quiz-option-key {
  @apply border-[#f44336] bg-[#f44336] text-white;
}
.quiz-option--missed .quiz-option-key {
  @apply border-[rgba(76,175,80,0.5)] text-[rgba(76,175,80,0.7)];
}

/* Result Summary */
.quiz-result-summary {
  @apply mt-8 p-6 rounded-[14px] text-center;
}
.quiz-result-summary--pass {
  @apply bg-[rgba(76,175,80,0.08)] border border-[rgba(76,175,80,0.25)];
}
.quiz-result-summary--pass .quiz-result-label { @apply text-[#4caf50]; }
.quiz-result-summary--fail {
  @apply bg-[rgba(255,193,7,0.06)] border border-[rgba(255,193,7,0.2)];
}
.quiz-result-summary--fail .quiz-result-label { @apply text-[#ffc107]; }

/* Disabled button */
.quiz-btn-wrapper :deep(.btn:disabled) {
  @apply opacity-45 cursor-not-allowed pointer-events-none;
}
.quiz-btn-wrapper:has(.btn:disabled) {
  @apply cursor-not-allowed;
}

/* Tooltip */
.quiz-btn-tooltip {
  @apply hidden absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 bg-[rgba(30,30,30,0.95)] text-[#ffc107] text-[0.82rem] py-2 px-3.5 rounded-lg whitespace-nowrap border border-[rgba(255,193,7,0.3)] shadow-[0_4px_12px_rgba(0,0,0,0.3)] z-10 pointer-events-none;
}
.quiz-btn-tooltip::after {
  content: '';
  @apply absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-[rgba(255,193,7,0.3)];
}
.quiz-btn-wrapper:hover .quiz-btn-tooltip {
  @apply block;
}
</style>
