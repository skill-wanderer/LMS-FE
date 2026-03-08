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
  return base.includes('?') ? `${base}&tab=quiz` : `${base}?tab=quiz`
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
  <div class="quiz-section">
    <div class="quiz-header">
      <div class="quiz-header-icon">📝</div>
      <div>
        <h2 class="quiz-title">{{ title || 'Module Quiz' }}</h2>
        <p class="quiz-subtitle">Optional — Test your understanding of the module concepts</p>
      </div>
    </div>

    <!-- Previous Score Banner (fetched from API) -->
    <div v-if="!isChecked && savedScore" class="quiz-score-banner" :class="savedScore.scorePercentage >= passThreshold ? 'quiz-score-banner--pass' : 'quiz-score-banner--fail'">
      <div class="quiz-score-info">
        <span class="quiz-score-icon">{{ savedScore.scorePercentage >= passThreshold ? '🎉' : '📖' }}</span>
        <div>
          <strong class="quiz-score-text">
            {{ savedScore.scorePercentage >= passThreshold ? 'Previously passed!' : 'Previous attempt' }}
          </strong>
          <p class="quiz-score-detail">
            Your last score: <strong>{{ savedScore.score }}/{{ savedScore.totalQuestions }}</strong> ({{ savedScore.scorePercentage }}%)
          </p>
        </div>
      </div>
    </div>

    <!-- Score Banner -->
    <div v-if="isChecked" class="quiz-score-banner" :class="scorePercentage >= passThreshold ? 'quiz-score-banner--pass' : 'quiz-score-banner--fail'">
      <div class="quiz-score-info">
        <span class="quiz-score-icon">{{ scorePercentage >= passThreshold ? '🎉' : '📖' }}</span>
        <div>
          <strong class="quiz-score-text">
            {{ scorePercentage >= passThreshold ? 'Great job!' : 'Keep studying!' }}
          </strong>
          <p class="quiz-score-detail">
            You scored <strong>{{ score }}/{{ questions.length }}</strong> ({{ scorePercentage }}%)
            <span v-if="isSubmitted" class="quiz-auto-saved">— Score saved ✓</span>
          </p>
        </div>
      </div>
      <button class="btn-reset" @click="resetQuiz">
        <Icon name="mdi:refresh" />
        Try Again
      </button>
    </div>

    <!-- Questions -->
    <ol class="quiz-questions">
      <li
        v-for="(question, qi) in questions"
        :key="qi"
        class="quiz-question"
        :class="{ 'quiz-question--checked': isChecked }"
      >
        <p class="quiz-question-text">
          <span class="quiz-question-num">{{ qi + 1 }}.</span>
          {{ question.question }}
        </p>
        <div class="quiz-options">
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
              class="quiz-radio"
            />
            <span class="quiz-option-key">{{ key }}</span>
            <span class="quiz-option-text">{{ option }}</span>
            <span v-if="getOptionStatus(qi, key) === 'correct'" class="quiz-option-icon">
              <Icon name="mdi:check-circle" />
            </span>
            <span v-if="getOptionStatus(qi, key) === 'incorrect'" class="quiz-option-icon quiz-option-icon--wrong">
              <Icon name="mdi:close-circle" />
            </span>
            <span v-if="getOptionStatus(qi, key) === 'missed'" class="quiz-option-icon">
              <Icon name="mdi:check-circle-outline" />
            </span>
          </label>
        </div>
      </li>
    </ol>

    <!-- Quiz Result Summary -->
    <div v-if="isChecked" class="quiz-result-summary" :class="scorePercentage >= passThreshold ? 'quiz-result-summary--pass' : 'quiz-result-summary--fail'">
      <div class="quiz-result-header">
        <span class="quiz-result-emoji">{{ scorePercentage >= passThreshold ? '🏆' : '💪' }}</span>
        <span class="quiz-result-label">{{ scorePercentage >= passThreshold ? 'You Passed!' : 'Not Quite There' }}</span>
      </div>
      <div class="quiz-result-stats">
        <div class="quiz-result-stat">
          <span class="quiz-result-stat-value">{{ score }}/{{ questions.length }}</span>
          <span class="quiz-result-stat-label">Correct</span>
        </div>
        <div class="quiz-result-stat-divider" />
        <div class="quiz-result-stat">
          <span class="quiz-result-stat-value">{{ scorePercentage }}%</span>
          <span class="quiz-result-stat-label">Score</span>
        </div>
        <div class="quiz-result-stat-divider" />
        <div class="quiz-result-stat">
          <span class="quiz-result-stat-value">{{ passThreshold }}%</span>
          <span class="quiz-result-stat-label">Passing</span>
        </div>
      </div>
      <div class="quiz-result-bar-track">
        <div
          class="quiz-result-bar-fill"
          :class="scorePercentage >= passThreshold ? 'quiz-result-bar-fill--pass' : 'quiz-result-bar-fill--fail'"
          :style="{ width: scorePercentage + '%' }"
        />
        <div class="quiz-result-bar-threshold" :style="{ left: passThreshold + '%' }" />
      </div>
    </div>

    <!-- Actions -->
    <div class="quiz-actions">
      <div v-if="!isChecked" class="quiz-btn-wrapper">
        <button
          class="btn btn-primary quiz-btn"
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
        class="btn btn-outline quiz-btn"
        @click="resetQuiz"
      >
        <Icon name="mdi:refresh" />
        Retake Quiz
      </button>

      <div v-if="isChecked && !isAuthenticated" class="quiz-submit-group">
        <button
          class="btn btn-outline quiz-btn"
          @click="submitScore"
        >
          <Icon name="mdi:login" />
          Log in to save score
        </button>
      </div>

      <div v-if="isChecked && isAuthenticated" class="quiz-submit-group">
        <span v-if="isSubmitting" class="quiz-submitted-badge">
          <Icon name="mdi:loading" class="animate-spin" />
          Saving score...
        </span>
        <span v-else-if="isSubmitted" class="quiz-submitted-badge">
          <Icon name="mdi:check-circle" />
          Score Submitted!
        </span>
        <button
          v-else-if="submitError"
          class="btn btn-outline quiz-btn"
          :disabled="isSubmitting"
          @click="submitScore"
        >
          <Icon name="mdi:cloud-upload-outline" />
          Retry Submit
        </button>
        <p v-if="submitError" class="quiz-submit-error">{{ submitError }}</p>
      </div>
    </div>

    <LoginRequiredModal :visible="showLoginModal" :return-to="returnToWithTab" @close="showLoginModal = false" />
  </div>
</template>

<style scoped>
.quiz-section {
  margin-top: 2rem;
  background: var(--card-bg);
  border: 1px solid rgba(255, 107, 53, 0.15);
  border-radius: 16px;
  padding: 2rem;
}

.quiz-header {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 1.5rem;
}

.quiz-header-icon {
  font-size: 2rem;
  flex-shrink: 0;
  line-height: 1;
}

.quiz-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--light-text);
  margin: 0 0 4px;
  background: linear-gradient(135deg, var(--primary-orange), var(--accent-yellow));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.quiz-subtitle {
  font-size: 0.9rem;
  color: rgba(224, 224, 224, 0.5);
  margin: 0;
}

/* Score Banner */
.quiz-score-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 20px;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.quiz-score-banner--pass {
  background: rgba(76, 175, 80, 0.1);
  border: 1px solid rgba(76, 175, 80, 0.3);
}

.quiz-score-banner--fail {
  background: rgba(255, 193, 7, 0.08);
  border: 1px solid rgba(255, 193, 7, 0.25);
}

.quiz-score-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.quiz-score-icon {
  font-size: 1.8rem;
  flex-shrink: 0;
}

.quiz-score-text {
  display: block;
  font-size: 1.05rem;
  color: var(--light-text);
}

.quiz-score-detail {
  margin: 2px 0 0;
  font-size: 0.9rem;
  color: rgba(224, 224, 224, 0.6);
}

.quiz-score-detail strong {
  color: var(--light-text);
}

.btn-reset {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(255, 107, 53, 0.3);
  background: transparent;
  color: var(--primary-orange);
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-reset:hover {
  background: rgba(255, 107, 53, 0.1);
  border-color: var(--primary-orange);
}

/* Questions */
.quiz-questions {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.quiz-question {
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  transition: border-color 0.3s ease;
}

.quiz-question:hover:not(.quiz-question--checked) {
  border-color: rgba(255, 107, 53, 0.15);
}

.quiz-question-text {
  font-size: 1rem;
  font-weight: 600;
  color: var(--light-text);
  margin: 0 0 1rem;
  line-height: 1.6;
}

.quiz-question-num {
  color: var(--primary-orange);
  margin-right: 6px;
}

/* Options */
.quiz-options {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.quiz-option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.02);
  cursor: pointer;
  transition: all 0.2s ease;
  color: rgba(224, 224, 224, 0.75);
  font-size: 0.92rem;
}

.quiz-option:hover:not(.quiz-option--disabled) {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 107, 53, 0.2);
}

.quiz-option--selected:not(.quiz-option--correct):not(.quiz-option--incorrect) {
  background: rgba(255, 107, 53, 0.08);
  border-color: rgba(255, 107, 53, 0.3);
  color: var(--light-text);
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
  cursor: default;
}

.quiz-radio {
  display: none;
}

.quiz-option-key {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  font-size: 0.78rem;
  font-weight: 700;
  flex-shrink: 0;
  border: 2px solid rgba(255, 255, 255, 0.12);
  background: transparent;
  transition: all 0.2s ease;
}

.quiz-option--selected:not(.quiz-option--correct):not(.quiz-option--incorrect) .quiz-option-key {
  border-color: var(--primary-orange);
  background: var(--primary-orange);
  color: #fff;
}

.quiz-option--correct .quiz-option-key {
  border-color: #4caf50;
  background: #4caf50;
  color: #fff;
}

.quiz-option--incorrect .quiz-option-key {
  border-color: #f44336;
  background: #f44336;
  color: #fff;
}

.quiz-option--missed .quiz-option-key {
  border-color: rgba(76, 175, 80, 0.5);
  color: rgba(76, 175, 80, 0.7);
}

.quiz-option-text {
  flex: 1;
}

.quiz-option-icon {
  font-size: 1.2rem;
  color: #4caf50;
  flex-shrink: 0;
  display: flex;
}

.quiz-option-icon--wrong {
  color: #f44336;
}

/* Quiz Result Summary */
.quiz-result-summary {
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 14px;
  text-align: center;
}

.quiz-result-summary--pass {
  background: rgba(76, 175, 80, 0.08);
  border: 1px solid rgba(76, 175, 80, 0.25);
}

.quiz-result-summary--fail {
  background: rgba(255, 193, 7, 0.06);
  border: 1px solid rgba(255, 193, 7, 0.2);
}

.quiz-result-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 1.25rem;
}

.quiz-result-emoji {
  font-size: 1.6rem;
}

.quiz-result-label {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--light-text);
}

.quiz-result-summary--pass .quiz-result-label {
  color: #4caf50;
}

.quiz-result-summary--fail .quiz-result-label {
  color: #ffc107;
}

.quiz-result-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.25rem;
}

.quiz-result-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.quiz-result-stat-value {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--light-text);
}

.quiz-result-stat-label {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: rgba(224, 224, 224, 0.45);
  font-weight: 600;
}

.quiz-result-stat-divider {
  width: 1px;
  height: 36px;
  background: rgba(255, 255, 255, 0.08);
}

.quiz-result-bar-track {
  position: relative;
  height: 8px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.06);
  overflow: visible;
}

.quiz-result-bar-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.6s ease;
}

.quiz-result-bar-fill--pass {
  background: linear-gradient(90deg, #4caf50, #66bb6a);
}

.quiz-result-bar-fill--fail {
  background: linear-gradient(90deg, #ffc107, #ffca28);
}

.quiz-result-bar-threshold {
  position: absolute;
  top: -4px;
  width: 2px;
  height: 16px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 1px;
  transform: translateX(-50%);
}

/* Actions */
.quiz-actions {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.quiz-btn {
  padding: 12px 28px;
  font-size: 1rem;
}

.quiz-submit-group {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.quiz-submitted-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--color-success, #4ade80);
  font-weight: 600;
  font-size: 0.95rem;
}

.quiz-submit-error {
  color: var(--color-error, #f87171);
  font-size: 0.85rem;
  margin: 0;
}

.quiz-auto-saved {
  color: var(--color-success, #4ade80);
  font-size: 0.85rem;
  font-weight: 500;
}

.quiz-btn-wrapper {
  position: relative;
}

.quiz-actions .btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  pointer-events: none;
}

.quiz-btn-wrapper:has(.btn:disabled) {
  cursor: not-allowed;
}

.quiz-btn-tooltip {
  display: none;
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(30, 30, 30, 0.95);
  color: var(--accent-yellow, #ffc107);
  font-size: 0.82rem;
  padding: 8px 14px;
  border-radius: 8px;
  white-space: nowrap;
  border: 1px solid rgba(255, 193, 7, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 10;
  pointer-events: none;
}

.quiz-btn-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: rgba(255, 193, 7, 0.3);
}

.quiz-btn-wrapper:hover .quiz-btn-tooltip {
  display: block;
}

@media (max-width: 768px) {
  .quiz-section {
    padding: 1.25rem;
  }

  .quiz-question {
    padding: 1rem;
  }

  .quiz-option {
    padding: 8px 12px;
    font-size: 0.87rem;
  }

  .quiz-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .quiz-btn {
    justify-content: center;
  }

  .quiz-submit-group {
    flex-direction: column;
    align-items: center;
  }

  .quiz-score-banner {
    flex-direction: column;
    align-items: flex-start;
  }

  .quiz-result-stats {
    gap: 1rem;
  }

  .quiz-result-stat-value {
    font-size: 1.25rem;
  }
}
</style>
