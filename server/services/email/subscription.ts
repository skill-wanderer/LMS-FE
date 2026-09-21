/**
 * Welcome email sent once a subscriber has been added to Resend.
 *
 * There is no double opt-in: the contact is already stored by the time this
 * email goes out, so the copy confirms the subscription rather than asking
 * the reader to confirm it.
 */

const welcomeHtml = [
  '<p>Welcome to Skill-Wanderer Dojo.</p>',
  '<p>You are now subscribed. We will let you know when new courses drop, plus the occasional note on what we are building.</p>',
  '<p>Free forever — no paywall, no barriers. If you did not subscribe, or you change your mind later, reply to this email and we will remove you from the list.</p>',
].join('')

const welcomeText = [
  'Welcome to Skill-Wanderer Dojo.',
  '',
  'You are now subscribed. We will let you know when new courses drop, plus the occasional note on what we are building.',
  '',
  'Free forever — no paywall, no barriers. If you did not subscribe, or you change your mind later, reply to this email and we will remove you from the list.',
].join('\n')

export const createSubscriptionWelcomeEmail = (email: string, fromEmail: string) => ({
  from: `Skill-Wanderer Dojo <${fromEmail}>`,
  to: [email],
  subject: 'Welcome to Skill-Wanderer Dojo',
  html: welcomeHtml,
  text: welcomeText,
})
