<script setup lang="ts">
const lastUpdated = 'June 18, 2026'

useSeo({
  title: 'Terms of Service — Skill-Wanderer Dojo',
  description: 'The terms governing access to courses, learner accounts, submissions, and acceptable use on dojo.skill-wanderer.com.',
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Terms of Service' },
  ],
})
</script>

<template>
  <LegalPageLayout
    title="Terms of Service"
    subtitle="Skill-Wanderer Dojo Legal"
    description="These terms describe the rules for using Skill-Wanderer Dojo, including acceptable use, account responsibilities, content usage, and platform availability."
    :highlights="[
      'The Dojo is a free learning platform, but use of the service still requires compliance with these terms.',
      'You are responsible for activity performed through your account or authenticated session.',
      'Platform content remains protected by applicable intellectual property rights unless stated otherwise.',
      'We may suspend misuse that harms learners, infrastructure, or the broader Skill-Wanderer ecosystem.',
    ]"
    :last-updated="lastUpdated"
  >
    <h2>1. Acceptance of terms</h2>
    <p>
      By accessing or using Skill-Wanderer Dojo at <strong>dojo.skill-wanderer.com</strong>, you agree to these Terms
      of Service. If you do not agree, do not use the platform.
    </p>

    <h2>2. What the Dojo provides</h2>
    <p>
      The Dojo provides online learning experiences, including course discovery, lesson access, progress tracking,
      quizzes, submissions, and related features. Some features may change, be improved, or be removed over time.
    </p>

    <h2>3. Eligibility and accounts</h2>
    <p>
      You may browse public materials without an account where permitted. Some features require authentication. You are
      responsible for keeping your sign-in method secure and for activity associated with your account.
    </p>

    <h2>4. Acceptable use</h2>
    <p>You agree not to:</p>
    <ul>
      <li>Use the Dojo in a way that breaks laws or infringes the rights of others.</li>
      <li>Attempt unauthorized access to accounts, infrastructure, source systems, or unpublished materials.</li>
      <li>Interfere with platform availability, performance, or security.</li>
      <li>Upload or submit malicious code, spam, fraudulent content, or abusive material.</li>
      <li>Misrepresent your identity or impersonate another person or organization.</li>
    </ul>

    <h2>5. Learner content and submissions</h2>
    <p>
      If you submit assignments, feedback, or other content through the Dojo, you retain ownership of what you create.
      You grant us a limited right to host, display, process, and review that content as needed to operate the
      learning experience, provide feedback, and maintain the service.
    </p>

    <h2>6. Platform content and intellectual property</h2>
    <p>
      Course materials, branding, site copy, interface design, code, and platform assets are owned by Skill-Wanderer
      or its licensors unless another license is explicitly stated. Open-source repositories and separately licensed
      materials remain governed by their own license terms.
    </p>

    <h2>7. Availability and changes</h2>
    <p>
      We work to keep the Dojo available and useful, but we do not promise uninterrupted access. We may modify
      features, restructure courses, or perform maintenance at any time.
    </p>

    <h2>8. Suspension or termination</h2>
    <p>
      We may suspend or terminate access if we believe use of the Dojo violates these terms, creates security risk,
      harms other learners, or threatens platform operations.
    </p>

    <h2>9. Disclaimers</h2>
    <p>
      The Dojo is provided on an “as is” and “as available” basis. Educational content is offered for general learning
      purposes and should not be treated as legal, financial, medical, or other professional advice.
    </p>

    <h2>10. Limitation of liability</h2>
    <p>
      To the maximum extent permitted by law, Skill-Wanderer and its contributors will not be liable for indirect,
      incidental, special, consequential, or punitive damages arising from use of or inability to use the Dojo.
    </p>

    <h2>11. Privacy</h2>
    <p>
      Use of the Dojo is also governed by the <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink> and
      <NuxtLink to="/cookie-policy">Cookie Policy</NuxtLink>.
    </p>

    <h2>12. Changes to these terms</h2>
    <p>
      We may revise these Terms of Service from time to time. Continued use of the Dojo after updates become effective
      means you accept the revised terms.
    </p>

    <h2>13. Contact</h2>
    <p>
      Questions about these terms can be sent to
      <a href="mailto:admin@skill-wanderer.com">admin@skill-wanderer.com</a>.
    </p>
  </LegalPageLayout>
</template>
