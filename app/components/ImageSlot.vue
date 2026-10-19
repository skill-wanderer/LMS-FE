<script setup lang="ts">
import { IMAGE_SLOT_SIZES, fullImagePrompt, type ImageSlotGroup } from '~/data/image-slots'

const props = defineProps<{
  /** Slot name from ~/data/image-slots, e.g. "learning-paths/hub". */
  name: string
  /** Hold this slot back in production until every image in the group exists. */
  group?: ImageSlotGroup
  /** Load eagerly, for images near the top of the page. */
  priority?: boolean
}>()

// Empty slots only render a placeholder in dev; production renders nothing.
// The parent sets rounding and spacing through `class`. (Keep template comments
// out of the v-if chain: in dev they turn the root into a fragment, and the
// parent's class would stop reaching the slot.)
const isDev = import.meta.dev
const { spec, url, groupNames, shown } = useImageSlot(() => props.name, () => props.group)

const copied = ref(false)

async function copyPrompt() {
  if (!spec.value) return
  const text = fullImagePrompt(spec.value)
  try {
    await navigator.clipboard.writeText(text)
    copied.value = true
    setTimeout(() => { copied.value = false }, 1500)
  }
  catch {
    // The clipboard API needs a secure context, e.g. when the dev server is opened over a LAN IP.
    window.prompt('Copy this prompt:', text)
  }
}
</script>

<template>
  <div
    v-if="url && shown"
    class="relative overflow-hidden bg-surface-darker"
    :style="{ aspectRatio: spec?.ratio }"
  >
    <img
      :src="url"
      :alt="spec?.alt ?? ''"
      :loading="priority ? 'eager' : 'lazy'"
      :fetchpriority="priority ? 'high' : undefined"
      decoding="async"
      class="absolute inset-0 w-full h-full object-cover"
    >
  </div>
  <div
    v-else-if="isDev"
    class="image-slot-empty relative overflow-hidden border-2 border-dashed border-brand-orange/45 text-center text-[#e0e0e0]"
    :style="{ aspectRatio: spec?.ratio ?? '16/9' }"
  >
    <div class="absolute inset-0 flex flex-col items-center justify-center gap-2 py-4 px-5">
      <template v-if="spec">
        <span class="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-brand-orange">
          AI image slot · {{ spec.ratio.replace('/', ':') }} · {{ IMAGE_SLOT_SIZES[spec.ratio] }}
        </span>
        <code class="max-w-full rounded-md bg-white/[0.06] py-0.5 px-2 text-[0.78rem] text-brand-yellow [overflow-wrap:anywhere]">app/assets/images/{{ name }}.webp</code>
        <p class="image-slot-prompt m-0 max-w-[62ch] text-[0.85rem] leading-normal opacity-75 line-clamp-4">{{ spec.prompt }}</p>
        <button
          type="button"
          class="rounded-pill border border-brand-orange/50 bg-brand-orange/[0.12] py-1.5 px-3.5 text-[0.8rem] font-semibold text-[#e0e0e0] cursor-pointer hover:bg-brand-orange/25"
          @click.prevent.stop="copyPrompt"
        >
          {{ copied ? 'Copied ✓' : 'Copy full prompt' }}
        </button>
        <span v-if="group" class="image-slot-note text-[0.72rem] opacity-60">
          Goes live once all {{ groupNames.length }} images in "{{ group }}" exist
        </span>
      </template>
      <template v-else>
        <span class="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-brand-orange">Unknown image slot</span>
        <code class="max-w-full rounded-md bg-white/[0.06] py-0.5 px-2 text-[0.78rem] text-brand-yellow [overflow-wrap:anywhere]">{{ name }}</code>
        <p class="m-0 text-[0.85rem] opacity-75">Add it to app/data/image-slots.ts</p>
      </template>
    </div>
  </div>
</template>

<style scoped>
.image-slot-empty {
  container-type: inline-size;
  background:
    repeating-linear-gradient(135deg, rgba(255, 107, 53, 0.06) 0 12px, transparent 12px 24px),
    #0f0f0f;
}

/* Small slots, such as card covers, keep only the essentials. */
@container (max-width: 460px) {
  .image-slot-prompt,
  .image-slot-note {
    display: none;
  }
}
</style>
