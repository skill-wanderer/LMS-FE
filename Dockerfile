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
