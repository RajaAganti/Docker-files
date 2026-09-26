FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS prod-deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

FROM node:20-alpine AS runtime
ENV NODE_ENV=production \
    PORT=3000
WORKDIR /app
RUN rm -rf /usr/local/lib/node_modules/npm \
           /usr/local/lib/node_modules/corepack \
           /usr/local/bin/npm \
           /usr/local/bin/npx \
           /usr/local/bin/corepack
RUN addgroup -S app && adduser -S app -G app
COPY --from=prod-deps --chown=app:app /app/node_modules ./node_modules
COPY --from=builder   --chown=app:app /app/dist         ./dist
COPY --chown=app:app package.json ./
USER app
EXPOSE 3000
CMD ["node", "dist/server.js"]
