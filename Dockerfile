# ---- Build Stage ----
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies first (layer caching)
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Detect lock file and install accordingly
RUN if [ -f pnpm-lock.yaml ]; then \
      corepack enable && pnpm install --frozen-lockfile; \
    elif [ -f yarn.lock ]; then \
      yarn install --frozen-lockfile; \
    elif [ -f package-lock.json ]; then \
      npm ci; \
    else \
      npm install; \
    fi

# Copy the rest of the source
COPY . .

# Build-time environment variables (baked into Nuxt SSR output)
ARG NUXT_PUBLIC_KEYCLOAK_URL
ARG NUXT_PUBLIC_KEYCLOAK_REALM
ARG NUXT_PUBLIC_KEYCLOAK_CLIENT_ID
ARG NUXT_PUBLIC_API_BASE_URL
ARG NUXT_PUBLIC_PATHFINDER_API_URL
ARG NUXT_PUBLIC_PATHFINDER_DOMAINS

ENV NUXT_PUBLIC_KEYCLOAK_URL=${NUXT_PUBLIC_KEYCLOAK_URL}
ENV NUXT_PUBLIC_KEYCLOAK_REALM=${NUXT_PUBLIC_KEYCLOAK_REALM}
ENV NUXT_PUBLIC_KEYCLOAK_CLIENT_ID=${NUXT_PUBLIC_KEYCLOAK_CLIENT_ID}
ENV NUXT_PUBLIC_API_BASE_URL=${NUXT_PUBLIC_API_BASE_URL}
ENV NUXT_PUBLIC_PATHFINDER_API_URL=${NUXT_PUBLIC_PATHFINDER_API_URL}
ENV NUXT_PUBLIC_PATHFINDER_DOMAINS=${NUXT_PUBLIC_PATHFINDER_DOMAINS}

# Build the Nuxt application
RUN if [ -f pnpm-lock.yaml ]; then \
      corepack enable && pnpm build; \
    elif [ -f yarn.lock ]; then \
      yarn build; \
    else \
      npm run build; \
    fi

# ---- Production Stage ----
FROM node:22-alpine AS production

WORKDIR /app

# Copy the Nuxt build output (server bundle)
COPY --from=build /app/.output /app/.output

# Nuxt 3/4 produces a standalone server in .output
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
