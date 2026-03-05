<script setup lang="ts">
const email = ref('')
const subscribed = ref(false)

function handleSubscribe() {
  // TODO: connect to API
  if (email.value) {
    subscribed.value = true
    email.value = ''
  }
}
</script>

<template>
  <section class="subscribe-section section-glow">
    <div class="subscribe-inner">
      <Icon name="mdi:bell-ring-outline" class="subscribe-icon" />
      <h2 class="gradient-text subscribe-title">Stay Curious</h2>
      <p class="subscribe-desc">
        Get notified when new courses drop. Free forever — no spam, just knowledge.
      </p>

      <Transition name="fade" mode="out-in">
        <form v-if="!subscribed" class="subscribe-form" @submit.prevent="handleSubscribe">
          <input
            v-model="email"
            type="email"
            placeholder="your@email.com"
            required
            class="subscribe-input"
            aria-label="Email address"
          />
          <button type="submit" class="btn btn-primary btn-sm">
            <Icon name="mdi:send" /> Subscribe
          </button>
        </form>
        <div v-else class="subscribe-success">
          <Icon name="mdi:check-circle" class="text-semantic-success text-2xl" />
          <span>You're in! We'll keep you posted.</span>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.subscribe-section {
  padding: 80px 20px;
  text-align: center;
  background: var(--darker-bg);
}

.subscribe-inner {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.subscribe-icon {
  font-size: 2.5rem;
  color: var(--primary-orange);
  margin-bottom: 16px;
}

.subscribe-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 12px;
}

.subscribe-desc {
  color: rgba(224, 224, 224, 0.7);
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 28px;
}

.subscribe-form {
  display: flex;
  gap: 12px;
  max-width: 460px;
  margin: 0 auto;
}

.subscribe-input {
  flex: 1;
  padding: 14px 20px;
  border-radius: 50px;
  border: 1px solid rgba(255, 107, 53, 0.25);
  background: var(--card-bg);
  color: var(--light-text);
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;
}

.subscribe-input:focus {
  border-color: var(--primary-orange);
}

.subscribe-input::placeholder {
  color: rgba(224, 224, 224, 0.35);
}

.subscribe-success {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 1.1rem;
  color: var(--success-green);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 600px) {
  .subscribe-form {
    flex-direction: column;
  }

  .subscribe-section {
    padding: 60px 16px;
  }

  .subscribe-desc {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .subscribe-section {
    padding: 48px 12px;
  }
}
</style>
