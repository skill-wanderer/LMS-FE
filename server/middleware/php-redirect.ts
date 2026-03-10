export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  if (url.pathname.endsWith('.php')) {
    const originalPath = url.pathname + url.search
    return sendRedirect(event, `/old-material?from=${encodeURIComponent(originalPath)}`, 302)
  }
})
