/**
 * Stub for `@react-email/render`.
 *
 * The Resend SDK dynamically imports it to render React email components.
 * We only ever send plain `html`/`text` payloads (see
 * server/services/email/subscription.ts), so that code path is never reached.
 * Aliasing it here keeps React out of the Cloudflare Worker bundle, which the
 * `cloudflare-module` preset would otherwise fail to resolve.
 */
export const render = () => {
  throw new Error('@react-email/render is not bundled: send html/text payloads instead of React components.')
}

export const renderAsync = render
export const plainTextSelectors = []
