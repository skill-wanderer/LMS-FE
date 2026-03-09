<script setup lang="ts">
import { marked } from 'marked'

// Configure marked for safe, compact output
marked.setOptions({
  breaks: true,
  gfm: true,
})

function renderMd(text: string): string {
  return marked.parse(text, { async: false }) as string
}

const { history, loading, error, sources, sendMessage, resetChat } = usePathfinder()

const isOpen = ref(false)
const input = ref('')
const messagesEl = ref<HTMLElement | null>(null)

// Typewriter state — only the latest assistant reply gets the effect
const revealedText = ref('')
const isRevealing = ref(false)
let revealTimer: ReturnType<typeof setTimeout> | null = null

const suggestions = [
  'What courses are available?',
  'How do I track my progress?',
  'Tell me about learning paths',
]

function toggle() {
  isOpen.value = !isOpen.value
}

function startReveal(fullText: string) {
  revealedText.value = ''
  isRevealing.value = true
  let i = 0
  const speed = 12 // ms per character

  function tick() {
    if (i < fullText.length) {
      // Reveal in small chunks for speed — 2-3 chars at a time
      const chunk = Math.min(3, fullText.length - i)
      revealedText.value = fullText.slice(0, i + chunk)
      i += chunk
      scrollToBottom()
      revealTimer = setTimeout(tick, speed)
    } else {
      isRevealing.value = false
      revealTimer = null
    }
  }
  tick()
}

function stopReveal() {
  if (revealTimer) {
    clearTimeout(revealTimer)
    revealTimer = null
  }
  isRevealing.value = false
}

async function handleSend() {
  const question = input.value.trim()
  if (!question || loading.value) return

  input.value = ''
  stopReveal()
  const result = await sendMessage(question)
  if (result) {
    startReveal(result.answer)
  }
  scrollToBottom()
}

async function handleSuggestion(text: string) {
  input.value = ''
  stopReveal()
  const result = await sendMessage(text)
  if (result) {
    startReveal(result.answer)
  }
  scrollToBottom()
}

function handleReset() {
  stopReveal()
  resetChat()
}

function scrollToBottom() {
  nextTick(() => {
    if (messagesEl.value) {
      messagesEl.value.scrollTop = messagesEl.value.scrollHeight
    }
  })
}

watch(
  () => history.value.length,
  () => scrollToBottom(),
)

onBeforeUnmount(() => stopReveal())
</script>

<template>
  <!-- FAB -->
  <Transition name="lyra-fab-transition">
    <button
      v-if="!isOpen"
      class="lyra-fab"
      aria-label="Open Lyra the Archivist"
      @click="toggle"
    >
      <span class="lyra-fab-ring" />
      <!-- Book icon -->
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M8 7h8" />
        <path d="M8 11h6" />
      </svg>
    </button>
  </Transition>

  <!-- Chat Panel -->
  <Transition name="lyra-slide">
    <div v-if="isOpen" class="lyra-panel">
      <!-- Dust motes (decorative) -->
      <div class="lyra-dust" aria-hidden="true">
        <span v-for="i in 15" :key="i" class="lyra-mote" />
      </div>

      <!-- Header -->
      <div class="lyra-header">
        <div class="flex items-center gap-2">
          <!-- Book icon -->
          <svg class="lyra-book-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF8C42" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          <div>
            <div class="lyra-title-text">Lyra</div>
            <div class="lyra-subtitle">THE ARCHIVIST</div>
          </div>
        </div>
        <div class="flex items-center gap-1">
          <button
            class="lyra-header-btn"
            title="Clear the reading desk"
            @click="handleReset"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="23 4 23 10 17 10" />
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
            </svg>
          </button>
          <button
            class="lyra-header-btn"
            title="Close"
            @click="toggle"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Messages -->
      <div ref="messagesEl" class="lyra-messages">
        <!-- Welcome -->
        <div v-if="history.length === 0" class="lyra-welcome">
          <svg class="lyra-welcome-book" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FF8C42" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            <path d="M6 8h2" />
            <path d="M6 12h2" />
            <path d="M16 8h2" />
            <path d="M16 12h2" />
          </svg>
          <p class="text-sm font-semibold mt-3 mb-1">
            Welcome to the Archives!
          </p>
          <p class="text-xs opacity-60 leading-relaxed mb-3">
            Browse the shelves of the Dojo's knowledge. Ask Lyra anything about courses, lessons, and learning paths.
          </p>
          <div class="lyra-suggestions">
            <button
              v-for="s in suggestions"
              :key="s"
              class="lyra-suggestion"
              @click="handleSuggestion(s)"
            >
              {{ s }}
            </button>
          </div>
        </div>

        <!-- Message list -->
        <template v-for="(msg, i) in history" :key="i">
          <div
            class="lyra-msg"
            :class="msg.role === 'user' ? 'lyra-msg-user' : 'lyra-msg-assistant'"
          >
            <!-- Assistant avatar -->
            <div v-if="msg.role === 'assistant'" class="lyra-avatar">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF8C42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <!-- Last assistant message: show typewriter text while revealing -->
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div
              v-if="msg.role === 'assistant' && i === history.length - 1 && isRevealing"
              class="lyra-bubble lyra-prose"
              v-html="renderMd(revealedText)"
            />
            <!-- All other messages: show full content -->
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div
              v-else
              class="lyra-bubble"
              :class="{ 'lyra-prose': msg.role === 'assistant' }"
              v-html="msg.role === 'assistant' ? renderMd(msg.content) : msg.content"
            />
          </div>
        </template>

        <!-- Typing indicator -->
        <div v-if="loading" class="lyra-msg lyra-msg-assistant">
          <div class="lyra-avatar">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF8C42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
          <div class="lyra-bubble lyra-typing">
            <span /><span /><span />
          </div>
        </div>

        <!-- Sources -->
        <div v-if="sources.length > 0 && !loading" class="lyra-sources">
          <div class="lyra-sources-label">Referenced Volumes</div>
          <a
            v-for="(src, si) in sources"
            :key="si"
            :href="src.url"
            target="_blank"
            rel="noopener noreferrer"
            class="lyra-source-link"
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            {{ src.title }}
          </a>
        </div>

        <!-- Clear chat -->
        <div v-if="history.length > 0 && !loading" class="lyra-clear-chat">
          <button class="lyra-clear-btn" @click="handleReset">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="23 4 23 10 17 10" />
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
            </svg>
            Clear the reading desk
          </button>
        </div>
      </div>

      <!-- Error -->
      <div v-if="error" class="lyra-error">
        {{ error }}
      </div>

      <!-- Input -->
      <form class="lyra-input-bar" @submit.prevent="handleSend">
        <input
          v-model="input"
          class="lyra-input"
          type="text"
          placeholder="What knowledge do you seek…"
          maxlength="2000"
          :disabled="loading"
        >
        <button
          class="lyra-send-btn"
          type="submit"
          :disabled="loading || !input.trim()"
          title="Send"
        >
          <!-- Quill/feather icon -->
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
            <line x1="16" y1="8" x2="2" y2="22" />
            <line x1="17.5" y1="15" x2="9" y2="15" />
          </svg>
        </button>
      </form>
    </div>
  </Transition>
</template>

<style scoped>
/* ===== FAB ===== */
.lyra-fab {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #FF8C42, #FF6B35 50%, #E85D25);
  border: 2px solid rgba(255, 217, 61, 0.3);
  box-shadow: 0 4px 24px rgba(255, 107, 53, 0.45);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998;
  animation: lyra-pulse 3s ease-in-out infinite;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.lyra-fab:hover {
  transform: scale(1.1);
  animation: none;
  box-shadow: 0 6px 32px rgba(255, 107, 53, 0.6);
}

.lyra-fab-ring {
  position: absolute;
  width: 76px;
  height: 76px;
  border-radius: 50%;
  border: 1.5px dashed rgba(255, 217, 61, 0.25);
  animation: lyra-spin 12s linear infinite;
  pointer-events: none;
}

/* ===== Panel ===== */
.lyra-panel {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 390px;
  height: 540px;
  max-width: calc(100vw - 2rem);
  max-height: calc(100vh - 3rem);
  background: #0d1117;
  border: 1px solid rgba(255, 217, 61, 0.12);
  border-radius: 18px;
  box-shadow: 0 8px 48px rgba(0, 0, 0, 0.6),
    0 0 1px rgba(255, 107, 53, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* ===== Dust motes (decorative) ===== */
.lyra-dust {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.lyra-mote {
  position: absolute;
  width: 2px;
  height: 2px;
  background: #FFD93D;
  border-radius: 50%;
  opacity: 0;
  animation: lyra-float 4s ease-in-out infinite;
}

.lyra-mote:nth-child(1) { top: 12%; left: 20%; animation-delay: 0s; }
.lyra-mote:nth-child(2) { top: 25%; left: 75%; animation-delay: 0.5s; }
.lyra-mote:nth-child(3) { top: 40%; left: 45%; animation-delay: 1s; animation-duration: 5s; }
.lyra-mote:nth-child(4) { top: 55%; left: 10%; animation-delay: 1.5s; }
.lyra-mote:nth-child(5) { top: 65%; left: 85%; animation-delay: 2s; animation-duration: 3s; }
.lyra-mote:nth-child(6) { top: 80%; left: 30%; animation-delay: 0.3s; }
.lyra-mote:nth-child(7) { top: 15%; left: 60%; animation-delay: 2.5s; animation-duration: 5s; }
.lyra-mote:nth-child(8) { top: 35%; left: 90%; animation-delay: 0.8s; }
.lyra-mote:nth-child(9) { top: 70%; left: 50%; animation-delay: 1.2s; animation-duration: 3s; }
.lyra-mote:nth-child(10) { top: 90%; left: 15%; animation-delay: 1.8s; }
.lyra-mote:nth-child(11) { top: 8%; left: 40%; animation-delay: 3s; }
.lyra-mote:nth-child(12) { top: 48%; left: 70%; animation-delay: 0.6s; animation-duration: 5s; }
.lyra-mote:nth-child(13) { top: 30%; left: 25%; animation-delay: 2.2s; }
.lyra-mote:nth-child(14) { top: 75%; left: 65%; animation-delay: 1.6s; animation-duration: 3s; }
.lyra-mote:nth-child(15) { top: 50%; left: 5%; animation-delay: 0.4s; }

/* ===== Header ===== */
.lyra-header {
  padding: 0.75rem 1rem;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.12) 0%, rgba(13, 17, 23, 0.95) 100%);
  border-bottom: 1px solid rgba(255, 217, 61, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
}

.lyra-book-icon {
  animation: lyra-hover-book 6s ease-in-out infinite;
}

.lyra-title-text {
  font-size: 0.875rem;
  font-weight: bold;
  background: linear-gradient(135deg, #FFD93D, #FF6B35);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.lyra-subtitle {
  font-size: 10px;
  opacity: 0.5;
  letter-spacing: 0.12em;
}

.lyra-header-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: rgba(255, 255, 255, 0.45);
  transition: color 0.2s ease, background 0.2s ease;
  border-radius: 4px;
}

.lyra-header-btn:hover {
  color: #FFD93D;
  background: rgba(255, 217, 61, 0.08);
}

/* ===== Messages ===== */
.lyra-messages {
  flex: 1;
  overflow-y: auto;
  padding: 0.75rem;
  position: relative;
  z-index: 1;
}

/* ===== Welcome ===== */
.lyra-welcome {
  text-align: center;
  padding: 1.5rem 1rem 1rem;
  color: #b0b0b0;
}

.lyra-welcome-book {
  animation: lyra-hover-book 5s ease-in-out infinite;
}

.lyra-suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
}

.lyra-suggestion {
  background: rgba(255, 107, 53, 0.08);
  border: 1px solid rgba(255, 107, 53, 0.2);
  color: #FF8C42;
  font-size: 0.6875rem;
  padding: 5px 10px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.lyra-suggestion:hover {
  background: rgba(255, 107, 53, 0.18);
  border-color: rgba(255, 107, 53, 0.4);
}

/* ===== Message rows ===== */
.lyra-msg {
  display: flex;
  gap: 6px;
  margin-bottom: 0.5rem;
}

.lyra-msg-user {
  justify-content: flex-end;
}

.lyra-msg-assistant {
  justify-content: flex-start;
}

.lyra-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(255, 107, 53, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.lyra-bubble {
  max-width: 82%;
  padding: 0.5rem 0.75rem;
  font-size: 0.8125rem;
  line-height: 1.55;
  border-radius: 14px;
  word-break: break-word;
}

.lyra-msg-user .lyra-bubble {
  background: linear-gradient(135deg, #FF6B35, #E85D25);
  color: #fff;
  border-bottom-right-radius: 4px;
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.2);
}

.lyra-msg-assistant .lyra-bubble {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: #d0d0d0;
  border-bottom-left-radius: 4px;
}

.lyra-msg-assistant .lyra-bubble :deep(a) {
  color: #FFD93D;
}

/* ===== Prose typography inside assistant bubbles ===== */
.lyra-prose :deep(p) {
  margin: 0 0 0.5em;
}

.lyra-prose :deep(p:last-child) {
  margin-bottom: 0;
}

.lyra-prose :deep(strong) {
  color: #e8e8e8;
  font-weight: 600;
}

.lyra-prose :deep(em) {
  font-style: italic;
  opacity: 0.9;
}

.lyra-prose :deep(ol),
.lyra-prose :deep(ul) {
  margin: 0.4em 0;
  padding-left: 1.3em;
}

.lyra-prose :deep(li) {
  margin-bottom: 0.25em;
}

.lyra-prose :deep(li:last-child) {
  margin-bottom: 0;
}

.lyra-prose :deep(code) {
  background: rgba(255, 255, 255, 0.08);
  padding: 1px 4px;
  border-radius: 4px;
  font-size: 0.75rem;
}

.lyra-prose :deep(pre) {
  background: rgba(0, 0, 0, 0.3);
  padding: 0.5em 0.6em;
  border-radius: 6px;
  overflow-x: auto;
  margin: 0.4em 0;
}

.lyra-prose :deep(pre code) {
  background: none;
  padding: 0;
}

.lyra-prose :deep(blockquote) {
  border-left: 2px solid rgba(255, 107, 53, 0.4);
  margin: 0.4em 0;
  padding-left: 0.6em;
  opacity: 0.85;
}

.lyra-prose :deep(h1),
.lyra-prose :deep(h2),
.lyra-prose :deep(h3),
.lyra-prose :deep(h4) {
  color: #e8e8e8;
  font-weight: 600;
  margin: 0.6em 0 0.3em;
  font-size: 0.85rem;
}

.lyra-prose :deep(hr) {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin: 0.5em 0;
}

/* ===== Typing ===== */
.lyra-typing {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0.6rem 0.9rem;
}

.lyra-typing span {
  width: 6px;
  height: 6px;
  background: #FF8C42;
  border-radius: 50%;
  animation: lyra-dot 1.4s infinite both;
}

.lyra-typing span:nth-child(2) {
  animation-delay: 0.2s;
}

.lyra-typing span:nth-child(3) {
  animation-delay: 0.4s;
}

/* ===== Sources ===== */
.lyra-sources {
  margin-left: 2rem;
  margin-bottom: 0.5rem;
}

.lyra-sources-label {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.4;
  margin-bottom: 4px;
}

.lyra-source-link {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.6875rem;
  color: #FFD93D;
  opacity: 0.7;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: opacity 0.15s ease;
}

.lyra-source-link:hover {
  opacity: 1;
}

.lyra-source-link svg {
  opacity: 0.6;
  flex-shrink: 0;
}

/* ===== Clear chat ===== */
.lyra-clear-chat {
  display: flex;
  justify-content: center;
  padding-top: 0.5rem;
}

.lyra-clear-btn {
  background: rgba(255, 107, 53, 0.08);
  border: 1px solid rgba(255, 107, 53, 0.2);
  color: #FF8C42;
  font-size: 0.6875rem;
  padding: 5px 12px;
  border-radius: 20px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: all 0.15s ease;
}

.lyra-clear-btn:hover {
  background: rgba(255, 107, 53, 0.18);
  border-color: rgba(255, 107, 53, 0.4);
}

/* ===== Error ===== */
.lyra-error {
  background: rgba(255, 107, 107, 0.06);
  border-top: 1px solid rgba(255, 107, 107, 0.15);
  color: #ff6b6b;
  font-size: 0.75rem;
  padding: 0.5rem 1rem;
  position: relative;
  z-index: 1;
}

/* ===== Input bar ===== */
.lyra-input-bar {
  padding: 0.625rem 0.75rem;
  background: rgba(13, 17, 23, 0.95);
  border-top: 1px solid rgba(255, 217, 61, 0.08);
  display: flex;
  gap: 0.5rem;
  position: relative;
  z-index: 1;
}

.lyra-input {
  flex: 1;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 0.5rem 0.75rem;
  font-size: 0.8125rem;
  color: #e0e0e0;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.lyra-input::placeholder {
  color: #555;
  font-style: italic;
}

.lyra-input:focus {
  border-color: rgba(255, 107, 53, 0.4);
  box-shadow: 0 0 0 2px rgba(255, 107, 53, 0.08);
}

.lyra-send-btn {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: linear-gradient(135deg, #FF6B35, #E85D25);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  flex-shrink: 0;
}

.lyra-send-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.35);
}

.lyra-send-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

/* ===== Animations ===== */
@keyframes lyra-pulse {
  0%, 100% { box-shadow: 0 4px 24px rgba(255, 107, 53, 0.45); }
  50% { box-shadow: 0 4px 32px rgba(255, 107, 53, 0.7), 0 0 8px rgba(255, 217, 61, 0.2); }
}

@keyframes lyra-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes lyra-float {
  0%, 100% { opacity: 0; transform: translateY(0); }
  50% { opacity: 0.4; transform: translateY(-6px); }
}

@keyframes lyra-hover-book {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}

@keyframes lyra-dot {
  0%, 80%, 100% { transform: scale(0.7); opacity: 0.2; }
  40% { transform: scale(1); opacity: 1; }
}

/* ===== Transitions ===== */
.lyra-slide-enter-active,
.lyra-slide-leave-active {
  transition: all 0.3s ease;
}

.lyra-slide-enter-from,
.lyra-slide-leave-to {
  opacity: 0;
  transform: translateY(24px) scale(0.92);
}

.lyra-fab-transition-enter-active,
.lyra-fab-transition-leave-active {
  transition: all 0.2s ease;
}

.lyra-fab-transition-enter-from,
.lyra-fab-transition-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

/* ===== Responsive ===== */
@media (max-width: 480px) {
  .lyra-panel {
    width: 100vw;
    height: 100vh;
    bottom: 0;
    right: 0;
    border-radius: 0;
    max-width: 100vw;
    max-height: 100vh;
  }

  .lyra-fab {
    bottom: 1rem;
    right: 1rem;
  }
}
</style>
