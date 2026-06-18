<script setup lang="ts">
const lastUpdated = 'June 18, 2026'

useSeo({
  title: 'Privacy Policy — Skill-Wanderer Dojo',
  description: 'How Skill-Wanderer Dojo collects, uses, stores, and protects learner information on dojo.skill-wanderer.com.',
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy' },
  ],
})
</script>

<template>
  <LegalPageLayout
    title="Privacy Policy"
    subtitle="Skill-Wanderer Dojo Legal"
    description="This policy explains what learner information Dojo handles, why we handle it, and the choices available to people using dojo.skill-wanderer.com."
    :highlights="[
      'We collect only the information needed to operate the Dojo and support your learning experience.',
      'We do not sell personal information or run advertising profiles on the Dojo.',
      'Course progress, account access, and support communication may require limited personal data.',
      `Policy version currently published for Dojo: ${lastUpdated}.`,
    ]"
    :last-updated="lastUpdated"
  >
    <h2>1. Scope</h2>
    <p>
      This Privacy Policy applies to Skill-Wanderer Dojo at <strong>dojo.skill-wanderer.com</strong>. It covers the
      Dojo web application, learner accounts, progress tracking, support communication, and related platform features.
    </p>

    <h2>2. Information we collect</h2>
    <p>Depending on how you use the Dojo, we may collect:</p>
    <ul>
      <li>Basic account information such as name, username, email address, or identity-provider profile details.</li>
      <li>Learning activity such as enrolled courses, lesson completion, quiz responses, and progress status.</li>
      <li>Technical information such as browser type, device type, approximate diagnostics, and request metadata.</li>
      <li>Support or feedback messages you choose to send to us.</li>
    </ul>

    <h2>3. How we use information</h2>
    <p>We use information to operate and improve the Dojo, including to:</p>
    <ul>
      <li>Authenticate learners and maintain secure access to accounts.</li>
      <li>Remember progress, submissions, and other learning-related state.</li>
      <li>Troubleshoot bugs, protect the platform, and investigate abuse or misuse.</li>
      <li>Respond to support requests, questions, or policy inquiries.</li>
      <li>Analyze platform health in a limited, product-focused way.</li>
    </ul>

    <h2>4. Legal bases and platform principles</h2>
    <p>
      Where applicable, we process data because it is necessary to provide the service you requested, maintain a secure
      learning environment, comply with legal obligations, or pursue legitimate platform operations. The Dojo is built
      around low-friction access and minimal data collection rather than aggressive tracking.
    </p>

    <h2>5. Cookies and local storage</h2>
    <p>
      The Dojo uses a limited set of cookies or browser storage items needed for authentication, session continuity,
      remembering dismissible interface elements, and similar essential product behavior. For details, see the
      <NuxtLink to="/cookie-policy">Cookie Policy</NuxtLink>.
    </p>

    <h2>6. Sharing of information</h2>
    <p>We do not sell personal information. We may share limited data only when necessary with:</p>
    <ul>
      <li>Infrastructure or hosting providers that help run the Dojo.</li>
      <li>Authentication providers used for secure sign-in.</li>
      <li>Service providers supporting delivery, debugging, or security of the platform.</li>
      <li>Authorities or counterparties when disclosure is required by law or necessary to protect rights and safety.</li>
    </ul>

    <h2>7. Data retention</h2>
    <p>
      We keep information only as long as it is reasonably needed for platform operations, learning records, security,
      legal compliance, or dispute handling. Retention periods may vary depending on the type of data and whether an
      account remains active.
    </p>

    <h2>8. Security</h2>
    <p>
      We use reasonable technical and organizational measures to protect platform data. No internet system is perfectly
      secure, so we cannot guarantee absolute security, but we aim to minimize collection and reduce exposure wherever
      practical.
    </p>

    <h2>9. Your choices</h2>
    <p>You may have the ability to request access, correction, or deletion of certain personal information, subject to legal and operational limits.</p>
    <p>
      You can also stop using the Dojo at any time, clear local browser storage on your device, and contact us about
      account-related privacy requests.
    </p>

    <h2>10. Children’s privacy</h2>
    <p>
      The Dojo is intended for general learners and professional development audiences. It is not designed as a service
      directed specifically to young children.
    </p>

    <h2>11. Changes to this policy</h2>
    <p>
      We may update this Privacy Policy as the Dojo evolves. When we make material changes, we may revise the date at
      the top of this page and update the published policy in the platform.
    </p>

    <h2>12. Contact</h2>
    <p>
      For privacy questions about Skill-Wanderer Dojo, contact
      <a href="mailto:admin@skill-wanderer.com">admin@skill-wanderer.com</a>.
    </p>
  </LegalPageLayout>
</template>
