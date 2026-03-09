export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  if (url.pathname.endsWith('.php')) {
    return sendRedirect(event, '/old-material', 302)
  }
})
