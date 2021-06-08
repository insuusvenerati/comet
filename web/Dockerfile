FROM node:16.3.0 as deps
WORKDIR /app

COPY . .
RUN rm -rf .git \
  && yarn install

FROM node:16.3.0 as builder
WORKDIR /app

# Make this available as a build arg and env var
ARG VITE_API_DOMAIN
ENV VITE_API_DOMAIN=${VITE_API_DOMAIN}
ENV NODE_ENV=production

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/web ./web
COPY --from=deps /app/package.json /app/yarn.lock ./

RUN yarn build:web

FROM node:16.3.0-buster-slim
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/web ./web
COPY --from=builder /app/package.json /app/yarn.lock ./

USER node

CMD [ "yarn", "start:web" ]
