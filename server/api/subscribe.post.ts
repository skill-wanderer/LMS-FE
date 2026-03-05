/**
 * POST /api/subscribe
 * Handles newsletter subscription. Replace with actual email service.
 */
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email } = body as { email: string }

  if (!email || !email.includes('@')) {
    throw createError({
      statusCode: 400,
      statusMessage: 'A valid email address is required.',
    })
  }

  // TODO: Integrate with email service (SendGrid, Resend, etc.)
  console.log(`[Subscribe] New subscriber: ${email}`)

  return {
    success: true,
    message: 'Subscribed successfully!',
  }
})
