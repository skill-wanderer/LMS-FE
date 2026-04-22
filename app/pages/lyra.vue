<script setup lang="ts">
useSeo({
  title: 'Meet Lyra the Archivist — Skill-Wanderer Dojo',
  description: 'Lyra is the Dojo\'s AI-powered chatbot. Ask her about courses, lessons, learning paths, and more — she knows every scroll in the archives.',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <TheHero
      title="Meet Lyra"
      subtitle="The Archivist"
      description="Your AI-powered guide to the Dojo's knowledge. Ask Lyra about courses, lessons, learning paths, and more."
      :cta-primary="{ label: 'Browse Courses', to: '/courses' }"
      :cta-secondary="{ label: 'Explore Learning Paths', to: '/paths' }"
    />

    <!-- What is Lyra -->
    <section class="section section-narrow">
      <h2 class="text-3xl md:text-4xl font-bold gradient-text mb-6 text-center">What is Lyra?</h2>

      <div class="glass-card p-8 md:p-12 space-y-6">
        <div class="flex gap-4 items-start">
          <Icon name="mdi:book-open-page-variant-outline" class="text-brand-orange text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold mb-2">An AI Archivist for the Dojo</h3>
            <p class="text-gray-400 leading-relaxed">
              Lyra is a conversational AI assistant built into the Dojo. She has access to the full catalog of
              courses, lessons, and learning paths — think of her as the librarian of a vast digital archive,
              ready to help you find exactly what you need.
            </p>
          </div>
        </div>

        <div class="flex gap-4 items-start">
          <Icon name="mdi:brain" class="text-brand-orange text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold mb-2">Powered by RAG</h3>
            <p class="text-gray-400 leading-relaxed">
              Lyra uses Retrieval-Augmented Generation (RAG) to ground her answers in real Dojo content.
              When you ask a question, she searches the archives for relevant material and crafts a response
              based on what she finds — so her answers stay accurate and up to date.
            </p>
          </div>
        </div>

        <div class="flex gap-4 items-start">
          <Icon name="mdi:link-variant" class="text-brand-orange text-3xl mt-1 shrink-0" />
          <div>
            <h3 class="text-xl font-bold mb-2">Source-Backed Answers</h3>
            <p class="text-gray-400 leading-relaxed">
              Every answer Lyra gives comes with source links so you can dive deeper. She cites the exact
              lessons and pages her response is drawn from, so you never have to take her word for it.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- What Can You Ask -->
    <section class="section section-narrow">
      <h2 class="text-3xl md:text-4xl font-bold gradient-text mb-6 text-center">What Can You Ask?</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="glass-card p-6">
          <Icon name="mdi:school-outline" class="text-brand-orange text-2xl mb-3" />
          <h3 class="text-lg font-bold mb-2">Courses & Lessons</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            "What courses are available?" · "Tell me about the software testing course" · "What does module 2 cover?"
          </p>
        </div>

        <div class="glass-card p-6">
          <Icon name="mdi:map-marker-path" class="text-brand-orange text-2xl mb-3" />
          <h3 class="text-lg font-bold mb-2">Learning Paths</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            "What learning paths are there?" · "Which path should I start with?" · "Tell me about the QA path"
          </p>
        </div>

        <div class="glass-card p-6">
          <Icon name="mdi:progress-check" class="text-brand-orange text-2xl mb-3" />
          <h3 class="text-lg font-bold mb-2">Progress & Features</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            "How do I track my progress?" · "How do quizzes work?" · "Do I need an account?"
          </p>
        </div>

        <div class="glass-card p-6">
          <Icon name="mdi:compass-outline" class="text-brand-orange text-2xl mb-3" />
          <h3 class="text-lg font-bold mb-2">General Guidance</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            "Where should I start?" · "What's the best way to learn testing?" · "How is the Dojo different from other platforms?"
          </p>
        </div>
      </div>
    </section>

    <!-- How to Use -->
    <section class="section section-narrow">
      <h2 class="text-3xl md:text-4xl font-bold gradient-text mb-6 text-center">How to Chat with Lyra</h2>

      <div class="glass-card p-8 md:p-12">
        <ol class="space-y-6">
          <li class="flex gap-4 items-start">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-brand-orange/20 text-brand-orange font-bold shrink-0">1</span>
            <div>
              <h3 class="text-lg font-bold mb-1">Open the Chat</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Click the book icon in the bottom-right corner of any page. Lyra's chat panel will slide open.
              </p>
            </div>
          </li>
          <li class="flex gap-4 items-start">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-brand-orange/20 text-brand-orange font-bold shrink-0">2</span>
            <div>
              <h3 class="text-lg font-bold mb-1">Ask a Question</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Type your question or pick one of the suggested prompts. Lyra will search the archives and respond with a detailed, source-backed answer.
              </p>
            </div>
          </li>
          <li class="flex gap-4 items-start">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-brand-orange/20 text-brand-orange font-bold shrink-0">3</span>
            <div>
              <h3 class="text-lg font-bold mb-1">Follow the Sources</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Each response includes links to the relevant lessons and pages. Click through to start learning right away.
              </p>
            </div>
          </li>
          <li class="flex gap-4 items-start">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-brand-orange/20 text-brand-orange font-bold shrink-0">4</span>
            <div>
              <h3 class="text-lg font-bold mb-1">Continue or Reset</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Lyra remembers your conversation within the session. Ask follow-up questions, or hit the reset button to start fresh.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section-narrow text-center">
      <div class="glass-card p-10">
        <Icon name="mdi:book-open-page-variant-outline" class="text-brand-orange text-4xl mb-4" />
        <h2 class="text-2xl font-bold gradient-text mb-4">Ready to Explore?</h2>
        <p class="text-gray-400 mb-6 leading-relaxed">
          Open Lyra from any page using the book icon in the bottom-right corner — or jump straight into the courses.
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <NuxtLink to="/courses" class="btn btn-primary">
            Browse Courses <Icon name="mdi:arrow-right" />
          </NuxtLink>
          <NuxtLink to="/paths" class="btn btn-outline">
            Learning Paths <Icon name="mdi:arrow-right" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
