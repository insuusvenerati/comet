FROM node:16.3.0 as deps
ENV NODE_ENV=production NODE_TLS_REJECT_UNAUTHORIZED=0
WORKDIR /app
COPY . .
RUN rm -rf .git \
  && yarn install

FROM node:16.3.0-buster-slim as runner
WORKDIR /app

ENV MIGRATE_INITIAL=false

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/server ./server
COPY --from=deps /app/package.json /app/yarn.lock ./

RUN chown -R node:node /app/server
USER node

CMD ["yarn", "run", "start:server"]
