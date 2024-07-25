FROM node:latest AS builder

WORKDIR /app
COPY . /app

RUN corepack enable
RUN yarn install
RUN yarn build

FROM nginx:alpine AS runner

COPY --from=builder /app/dist /usr/share/nginx/html
