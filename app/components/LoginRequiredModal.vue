<script setup lang="ts">
const props = defineProps<{
  visible: boolean
  returnTo?: string
}>()

const emit = defineEmits<{
  close: []
}>()

const { loginUrl, registerUrl } = useKeycloak()

function onOverlayClick(e: MouseEvent) {
  if (e.target === e.currentTarget) {
    emit('close')
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="visible" class="modal-overlay" @click="onOverlayClick">
        <div class="modal-content glass-card" role="dialog" aria-modal="true" aria-labelledby="login-modal-title">
          <button class="modal-close" aria-label="Close" @click="emit('close')">
            <Icon name="mdi:close" />
          </button>

          <div class="modal-icon">
            <Icon name="mdi:lock-outline" />
          </div>

          <h2 id="login-modal-title" class="modal-title">Login Required</h2>

          <p class="modal-text">
            You need to be logged in to track your lesson progress. Sign in or create a free account to start marking lessons as complete.
          </p>

          <div class="modal-actions">
            <a :href="loginUrl(returnTo)" class="btn btn-primary btn-sm">
              <Icon name="mdi:login" />
              Login
            </a>
            <a :href="registerUrl(returnTo)" class="btn btn-secondary btn-sm">
              <Icon name="mdi:account-plus-outline" />
              Register
            </a>
          </div>

          <button class="modal-skip" @click="emit('close')">
            Maybe later
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  padding: 20px;
}

.modal-content {
  position: relative;
  max-width: 420px;
  width: 100%;
  padding: 40px 32px 32px;
  text-align: center;
}

.modal-content:hover {
  transform: none;
}

.modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  color: rgba(224, 224, 224, 0.5);
  font-size: 1.3rem;
  cursor: pointer;
  padding: 4px;
  display: flex;
  transition: color 0.2s ease;
}

.modal-close:hover {
  color: var(--light-text);
}

.modal-icon {
  font-size: 3rem;
  color: var(--primary-orange);
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
}

.modal-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--light-text);
}

.modal-text {
  font-size: 0.95rem;
  color: rgba(224, 224, 224, 0.6);
  line-height: 1.6;
  margin-bottom: 24px;
}

.modal-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 16px;
}

.modal-skip {
  background: none;
  border: none;
  color: rgba(224, 224, 224, 0.4);
  font-size: 0.85rem;
  cursor: pointer;
  transition: color 0.2s ease;
}

.modal-skip:hover {
  color: rgba(224, 224, 224, 0.7);
}

/* Transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-content {
  transform: scale(0.95) translateY(10px);
}

.modal-leave-to .modal-content {
  transform: scale(0.95) translateY(10px);
}
</style>
