<script setup lang="ts">
import type { QuizQuestion } from '~/types/course'

const props = defineProps<{
  questions: QuizQuestion[]
  title?: string
}>()

const selectedAnswers = ref<Record<number, string>>({})
const isChecked = ref(false)
const score = ref(0)

function checkQuiz() {
  let correct = 0
  props.questions.forEach((q, i) => {
    if (selectedAnswers.value[i] === q.answer) {
      correct++
    }
  })
  score.value = correct
  isChecked.value = true
}

function resetQuiz() {
  selectedAnswers.value = {}
  isChecked.value = false
  score.value = 0
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

    <!-- Score Banner -->
    <div v-if="isChecked" class="quiz-score-banner" :class="scorePercentage >= 70 ? 'quiz-score-banner--pass' : 'quiz-score-banner--fail'">
      <div class="quiz-score-info">
        <span class="quiz-score-icon">{{ scorePercentage >= 70 ? '🎉' : '📖' }}</span>
        <div>
          <strong class="quiz-score-text">
            {{ scorePercentage >= 70 ? 'Great job!' : 'Keep studying!' }}
          </strong>
          <p class="quiz-score-detail">
            You scored <strong>{{ score }}/{{ questions.length }}</strong> ({{ scorePercentage }}%)
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

    <!-- Actions -->
    <div class="quiz-actions">
      <button
        class="btn btn-primary quiz-btn"
        :disabled="!allAnswered || isChecked"
        @click="checkQuiz"
      >
        <Icon name="mdi:check-bold" />
        Check Quiz
      </button>

      <div v-if="isChecked" class="quiz-submit-group">
        <button
          class="btn btn-outline quiz-btn"
          disabled
          title="Feature in development — requires API integration"
        >
          <Icon name="mdi:cloud-upload-outline" />
          Submit Score ({{ score }}/{{ questions.length }})
        </button>
        <span class="dev-note">🚧 Feature in development</span>
      </div>
    </div>
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
}

.quiz-actions .btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.dev-note {
  font-size: 0.8rem;
  color: rgba(224, 224, 224, 0.4);
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
}
</style>
