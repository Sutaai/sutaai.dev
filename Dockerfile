FROM node:latest AS builder

WORKDIR /app

RUN corepack enable

COPY package.json /app
RUN yarn install

COPY . /app
RUN yarn build

FROM caddy:alpine AS runner

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=builder /app/dist /srv/sutaai.dev

EXPOSE 80
