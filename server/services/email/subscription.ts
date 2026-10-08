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
const LINKEDIN_URL = 'https://linkedin.com/company/skill-wanderer'

const SANS = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif"
const PREVIEW_TEXT = 'Thank you for subscribing. Here is what to expect, where to start, and three ways to help keep the Dojo free.'

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
<p style="margin:0 0 12px;font-size:12px;line-height:16px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#c2410c;">Subscription confirmed</p>
<h1 class="h1" style="margin:0 0 16px;font-size:36px;line-height:42px;font-weight:800;color:#1c1917;">Welcome to the Dojo</h1>
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

<!-- Help the mission: the three ways listed on skill-wanderer.com/help-the-mission -->
<tr>
<td class="px" style="padding:32px 40px 0;font-family:${SANS};">
<h2 style="margin:0 0 6px;font-size:22px;line-height:28px;font-weight:800;color:#1c1917;">Help keep it free</h2>
<p style="margin:0 0 20px;font-size:16px;line-height:26px;color:#57534e;">There is no paywall here, and no donation button either. If you would like to help, there are three ways.</p>
</td>
</tr>
<tr>
<td class="px" style="padding:0 40px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e7e5e4;border-radius:10px;border-collapse:separate;">
<tr>
<td width="6" style="width:6px;background-color:#37424b;border-top-left-radius:9px;font-size:0;line-height:0;">&nbsp;</td>
<td style="padding:16px 20px;border-bottom:1px solid #e7e5e4;font-family:${SANS};">
<p style="margin:0;font-size:13px;line-height:18px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#1c1917;">Share what you know</p>
<p style="margin:6px 0 0;font-size:15px;line-height:23px;color:#57534e;">Experts from any field, not only tech. You bring the knowledge, and our members turn it into free lessons, credited to you by name.</p>
</td>
</tr>
<tr>
<td width="6" style="width:6px;background-color:#4f7fb3;font-size:0;line-height:0;">&nbsp;</td>
<td style="padding:16px 20px;border-bottom:1px solid #e7e5e4;font-family:${SANS};">
<p style="margin:0;font-size:13px;line-height:18px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#1c1917;">Bring us a project</p>
<p style="margin:6px 0 0;font-size:15px;line-height:23px;color:#57534e;">Need a website, an app, an AI tool or some automation on a small budget? Client work is what pays for the Dojo.</p>
</td>
</tr>
<tr>
<td width="6" style="width:6px;background-color:#FF6B35;border-bottom-left-radius:9px;font-size:0;line-height:0;">&nbsp;</td>
<td style="padding:16px 20px;font-family:${SANS};">
<p style="margin:0;font-size:13px;line-height:18px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#1c1917;">Spread the word</p>
<p style="margin:6px 0 0;font-size:15px;line-height:23px;color:#57534e;">Share the Dojo, <a href="${LINKEDIN_URL}" target="_blank" style="color:#c2410c;text-decoration:underline;">follow us on LinkedIn</a>, or introduce us to someone who could help.</p>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td class="px" style="padding:20px 40px 0;font-family:${SANS};font-size:16px;line-height:24px;">
<a href="${HELP_THE_MISSION_URL}" target="_blank" style="color:#c2410c;font-weight:700;text-decoration:none;">See how to help the mission &rarr;</a>
</td>
</tr>

<!-- Sign-off -->
<tr>
<td class="px" style="padding:32px 40px 40px;font-family:${SANS};font-size:16px;line-height:26px;color:#1c1917;">
<p style="margin:0;">Happy learning,<br>Skill-Wanderer Dojo</p>
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
  'HELP KEEP IT FREE',
  '',
  'There is no paywall here, and no donation button either. If you would like to help, there are three ways:',
  '',
  '1. Share what you know. Experts from any field, not only tech. You bring the knowledge, and our members turn it into free lessons, credited to you by name.',
  '2. Bring us a project. Need a website, an app, an AI tool or some automation on a small budget? Client work is what pays for the Dojo.',
  `3. Spread the word. Share the Dojo, follow us on LinkedIn (${LINKEDIN_URL}), or introduce us to someone who could help.`,
  '',
  `See how to help the mission: ${HELP_THE_MISSION_URL}`,
  '',
  'Happy learning,',
  'Skill-Wanderer Dojo',
  '',
  '--',
  'Skill-Wanderer Dojo. Free forever. No paywall, no barriers.',
  `You are receiving this because you subscribed at ${DOJO_URL}. If you did not subscribe, or you change your mind later, reply to this email and we will remove you from the list.`,
].join('\n')

export const createSubscriptionWelcomeEmail = (email: string, fromEmail: string) => ({
  from: `Skill-Wanderer Dojo <${fromEmail}>`,
  to: [email],
  subject: 'Welcome to Skill-Wanderer Dojo',
  html: welcomeHtml,
  text: welcomeText,
})
