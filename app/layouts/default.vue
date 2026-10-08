<template>
  <div class="min-h-screen flex flex-col overflow-x-clip">
    <TheNavigation />
    <main class="flex-1 overflow-x-clip">
      <slot />
    </main>
    <TheSubscribe />
    <TheFooter />
    <ClientOnly>
      <PathfinderChat />
      <CookieBanner />
    </ClientOnly>
  </div>
</template>


