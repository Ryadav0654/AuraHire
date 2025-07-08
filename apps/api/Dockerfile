FROM node:20-alpine AS base

# Define ARGs here if needed globally
ARG MONGO_URI
ARG PORT
ARG CLOUD_NAME
ARG CLOUDINARY_API_KEY
ARG CLOUDINARY_API_SECRET

# Optionally, pass them as ENV if you need them at runtime
ENV MONGO_URI=$MONGO_URI
ENV PORT=$PORT
ENV CLOUD_NAME=$CLOUD_NAME
ENV CLOUDINARY_API_KEY=$CLOUDINARY_API_KEY
ENV CLOUDINARY_API_SECRET=$CLOUDINARY_API_SECRET

FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat

# Enable pnpm in builder stage
RUN corepack enable && corepack prepare pnpm@8.15.3 --activate

WORKDIR /app
RUN npm add turbo --global
COPY . .
RUN turbo prune @repo/api --docker

FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat

# Enable pnpm in installer stage — THIS IS THE FIX
RUN corepack enable && corepack prepare pnpm@8.15.3 --activate

WORKDIR /app
COPY --from=builder /app/out/json/ .
RUN pnpm install

COPY --from=builder /app/out/full/ .
RUN pnpm turbo build

FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 expressjs
RUN adduser --system --uid 1001 expressjs
USER expressjs
COPY --from=installer /app .

CMD ["pnpm", "run", "dev"]
