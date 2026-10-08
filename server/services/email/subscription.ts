/**
 * Welcome email sent once a subscriber has been added to Resend.
 *
 * There is no double opt-in: the contact is already stored by the time this
 * email goes out, so the copy confirms the subscription rather than asking
 * the reader to confirm it.
 *
 * The layout follows the lesson newsletters in Newsletter/ (same masthead,
 * card, colours and footer), so keep the two in step when either changes.
 */

const DOJO_URL = 'https://dojo.skill-wanderer.com'
const COURSES_URL = `${DOJO_URL}/courses`
const HELP_THE_MISSION_URL = 'https://skill-wanderer.com/help-the-mission'

const SANS = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif"
const PREVIEW_TEXT = 'Thank you for subscribing. Here is what to expect from us, and where to start.'

const welcomeHtml = `<!DOCTYPE html>
<html lang="en" dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>Welcome to Skill-Wanderer Dojo</title>
<!--[if mso]>
<noscript><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
<style>
  body, table, td, p, a, h1, h2, span, strong { font-family: 'Segoe UI', Arial, sans-serif !important; }
</style>
<![endif]-->
<style>
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; }
  @media only screen and (max-width: 620px) {
    .outer { padding: 0 !important; }
    .container { width: 100% !important; }
    .card { border-radius: 0 !important; }
    .px { padding-left: 24px !important; padding-right: 24px !important; }
    .h1 { font-size: 30px !important; line-height: 36px !important; }
  }
</style>
</head>
<body id="body" style="margin:0;padding:0;background-color:#f3f1ee;">
<div role="article" aria-roledescription="email" aria-label="Welcome to Skill-Wanderer Dojo" lang="en" dir="ltr" style="background-color:#f3f1ee;">

<!-- Preview text shown next to the subject line in the inbox -->
<div style="display:none;max-height:0;max-width:0;overflow:hidden;opacity:0;font-size:1px;line-height:1px;color:#f3f1ee;mso-hide:all;">${PREVIEW_TEXT}</div>
<div style="display:none;max-height:0;max-width:0;overflow:hidden;opacity:0;font-size:1px;line-height:1px;mso-hide:all;">${'&#847;&zwnj;&nbsp;'.repeat(66)}</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f3f1ee;">
<tr>
<td class="outer" align="center" style="padding:32px 16px;">
<!--[if mso]><table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td><![endif]-->
<table role="presentation" class="container card" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background-color:#ffffff;border-radius:14px;overflow:hidden;">

<!-- Masthead -->
<tr>
<td class="px" style="background-color:#0f0f0f;padding:18px 40px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td style="font-family:${SANS};font-size:13px;line-height:18px;font-weight:800;letter-spacing:2px;text-transform:uppercase;"><a href="${DOJO_URL}" target="_blank" style="color:#FF6B35;text-decoration:none;">Skill-Wanderer Dojo</a></td>
<td align="right" style="font-family:${SANS};font-size:12px;line-height:18px;letter-spacing:1px;text-transform:uppercase;color:#a8a29e;">Welcome</td>
</tr>
</table>
</td>
</tr>

<!-- Intro -->
<tr>
<td class="px" style="padding:40px 40px 0;font-family:${SANS};">
<p style="margin:0 0 12px;font-size:12px;line-height:16px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#c2410c;">You are subscribed</p>
<h1 class="h1" style="margin:0 0 16px;font-size:36px;line-height:42px;font-weight:800;color:#1c1917;">Welcome to <span style="color:#c2410c;">the Dojo</span></h1>
<p style="margin:0;font-size:17px;line-height:27px;color:#57534e;">Thank you for subscribing. We will let you know when new courses and lessons drop, plus the occasional note on what we are building.</p>
</td>
</tr>

<!-- Call to action -->
<tr>
<td class="px" style="padding:28px 40px 0;font-family:${SANS};">
<a href="${COURSES_URL}" target="_blank" style="display:inline-block;background-color:#FF6B35;color:#0f0f0f;font-family:${SANS};font-size:16px;line-height:20px;font-weight:700;text-decoration:none;padding:14px 28px;border-radius:999px;mso-padding-alt:0;"><!--[if mso]><i style="mso-font-width:150%;mso-text-raise:28pt" hidden>&emsp;</i><span style="mso-text-raise:14pt;"><![endif]-->Explore the courses<!--[if mso]></span><i style="mso-font-width:150%;" hidden>&emsp;&#8203;</i><![endif]--></a>
</td>
</tr>

<!-- Divider -->
<tr>
<td class="px" style="padding:40px 40px 0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-top:1px solid #e7e5e4;font-size:0;line-height:0;">&nbsp;</td></tr></table>
</td>
</tr>

<!-- Help the mission: optional, so it stays one quiet line, worded like the skill-wanderer.com welcome email -->
<tr>
<td class="px" style="padding:28px 40px 40px;font-family:${SANS};">
<p style="margin:0 0 12px;font-size:16px;line-height:26px;color:#78716c;">And if you ever feel like lending a hand to keep education free, there are a few ways to do it. No pressure at all.</p>
<a href="${HELP_THE_MISSION_URL}" target="_blank" style="font-size:16px;line-height:24px;font-weight:700;color:#c2410c;text-decoration:none;">See how you can help &rarr;</a>
</td>
</tr>

</table>
<!--[if mso]></td></tr></table><![endif]-->

<!-- Footer -->
<!--[if mso]><table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td><![endif]-->
<table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;">
<tr>
<td class="px" align="center" style="padding:24px 40px 8px;font-family:${SANS};font-size:12px;line-height:19px;color:#57534e;">
<p style="margin:0 0 8px;"><strong style="color:#1c1917;">Skill-Wanderer Dojo</strong> &middot; Free forever. No paywall, no barriers.</p>
<p style="margin:0;">You are receiving this because you subscribed at <a href="${DOJO_URL}" target="_blank" style="color:#57534e;text-decoration:underline;white-space:nowrap;">dojo.skill-wanderer.com</a>. If you did not subscribe, or you change your mind later, reply to this email and we will remove you from the list.</p>
</td>
</tr>
</table>
<!--[if mso]></td></tr></table><![endif]-->

</td>
</tr>
</table>
</div>
</body>
</html>`

const welcomeText = [
  'Welcome to Skill-Wanderer Dojo',
  '',
  'Thank you for subscribing. We will let you know when new courses and lessons drop, plus the occasional note on what we are building.',
  '',
  `Explore the courses: ${COURSES_URL}`,
  '',
  'And if you ever feel like lending a hand to keep education free, there are a few ways to do it. No pressure at all.',
  `See how you can help: ${HELP_THE_MISSION_URL}`,
  '',
  '--',
  'Skill-Wanderer Dojo. Free forever. No paywall, no barriers.',
  `You are receiving this because you subscribed at ${DOJO_URL}. If you did not subscribe, or you change your mind later, reply to this email and we will remove you from the list.`,
].join('\n')

export const createSubscriptionWelcomeEmail = (email: string, fromEmail: string, replyTo?: string) => ({
  from: `Skill-Wanderer Dojo <${fromEmail}>`,
  to: [email],
  // The footer asks readers to reply to unsubscribe, which a no-reply sender
  // cannot receive, so replies are routed to a monitored inbox when set.
  ...(replyTo ? { replyTo } : {}),
  subject: 'Welcome to Skill-Wanderer Dojo',
  html: welcomeHtml,
  text: welcomeText,
})
