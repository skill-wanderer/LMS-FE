<script setup lang="ts">
const lastUpdated = 'June 18, 2026'

useSeo({
  title: 'Cookie Policy — Skill-Wanderer Dojo',
  description: 'A plain-language explanation of the essential cookies and browser storage used by dojo.skill-wanderer.com.',
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Cookie Policy' },
  ],
})
</script>

<template>
  <LegalPageLayout
    title="Cookie Policy"
    subtitle="Skill-Wanderer Dojo Legal"
    description="This page explains the limited cookies and browser storage that Skill-Wanderer Dojo uses to keep authentication, progress, and core interface behavior working."
    :highlights="[
      'The Dojo uses essential cookies and browser storage for product functionality, not advertising.',
      'We do not use the Dojo cookie banner to request consent for ad-tech or profiling cookies because those are not part of the intended setup.',
      'Authentication and session continuity may rely on secure cookies from platform identity flows.',
      'Some preferences, such as dismissing the cookie notice, may be stored locally in your browser.',
    ]"
    :last-updated="lastUpdated"
  >
    <h2>1. What this policy covers</h2>
    <p>
      This Cookie Policy applies to Skill-Wanderer Dojo at <strong>dojo.skill-wanderer.com</strong>. It explains the
      small amount of cookie and browser storage usage required for the platform to function properly.
    </p>

    <h2>2. Essential cookies only</h2>
    <p>
      The Dojo is designed around essential cookies and closely related browser storage only. These technologies help
      the platform keep you signed in, remember session state, protect access, and preserve a few interface-level
      preferences needed for a smoother experience.
    </p>

    <h2>3. Types of storage we may use</h2>
    <ul>
      <li>Authentication cookies used to maintain signed-in sessions and related security state.</li>
      <li>Short-lived cookies or tokens used for protected navigation and access continuity.</li>
      <li>Local browser storage used for product preferences, such as dismissing the cookie notice.</li>
      <li>Temporary technical storage needed to support learner progress or platform interactions.</li>
    </ul>

    <h2>4. What we do not use these for</h2>
    <p>The Dojo does not intentionally use its cookie layer for:</p>
    <ul>
      <li>Behavioral advertising.</li>
      <li>Cross-site marketing profiles.</li>
      <li>Third-party ad targeting.</li>
      <li>Tracking learners across unrelated websites for commercial profiling.</li>
    </ul>

    <h2>5. Managing cookies and storage</h2>
    <p>
      Most browsers let you clear cookies and local storage, or block future storage. If you do this, some Dojo
      features may stop working correctly, especially sign-in, protected routes, saved preferences, or progress-linked
      experiences.
    </p>

    <h2>6. Relationship to the Privacy Policy</h2>
    <p>
      For a broader explanation of how platform information is handled, please review the
      <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>.
    </p>

    <h2>7. Changes to this policy</h2>
    <p>
      We may update this Cookie Policy when the platform changes. The date shown on this page reflects the latest Dojo
      policy version currently published.
    </p>

    <h2>8. Contact</h2>
    <p>
      Questions about cookie usage on the Dojo can be sent to
      <a href="mailto:admin@skill-wanderer.com">admin@skill-wanderer.com</a>.
    </p>
  </LegalPageLayout>
</template>
