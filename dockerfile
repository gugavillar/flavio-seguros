FROM node:20-alpine AS build

ARG VITE_WBOT_TOKEN
ENV VITE_WBOT_TOKEN=$VITE_WBOT_TOKEN

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM gcr.io/distroless/nodejs20-debian12
WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/.output ./.output
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json .

EXPOSE 3000
CMD ["./.output/server/index.mjs"]
