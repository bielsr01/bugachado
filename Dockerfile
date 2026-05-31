# ---------- Build stage ----------
FROM oven/bun:1 AS builder
WORKDIR /app

# Install deps (cached layer)
COPY package.json bun.lockb* bun.lock* ./
RUN bun install --frozen-lockfile || bun install

# Build the app for a standalone Node server
COPY . .
ENV NITRO_PRESET=node-server
RUN bun run build

# ---------- Runtime stage ----------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Nitro node-server preset emits a self-contained server in .output/
COPY --from=builder /app/.output ./.output

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
