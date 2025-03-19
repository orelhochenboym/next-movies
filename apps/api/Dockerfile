FROM docker.io/node:lts-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . . 
RUN npx --yes nx build api

FROM docker.io/node:lts-alpine

WORKDIR /app

RUN addgroup --system api && adduser --system -G api api

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/apps/api/dist ./api/

RUN chown -R api:api . 

USER api

EXPOSE 3000

CMD ["node", "api"]
