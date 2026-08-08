FROM node:24-slim AS base
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.28.0 --activate

FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS build
ARG VITE_WBOT_TOKEN
ARG VITE_WHATS_APP

ENV VITE_WBOT_TOKEN=$VITE_WBOT_TOKEN
ENV VITE_WHATS_APP=$VITE_WHATS_APP

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build

FROM gcr.io/distroless/nodejs24-debian12:nonroot
WORKDIR /app
ENV NODE_ENV=production

COPY --from=build --chown=nonroot:nonroot /app/.output ./.output

EXPOSE 3000
CMD ["./.output/server/index.mjs"]
