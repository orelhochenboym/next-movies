FROM docker.io/node:lts-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npx --yes nx build client

FROM docker.io/nginx:latest

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/apps/client/dist /var/www

COPY apps/client/nginx/nginx.conf /etc/nginx/nginx.conf 
COPY apps/client/nginx/cors.conf /etc/nginx/cors.conf

RUN touch /var/run/nginx.pid \
    && chmod 777 /var/run/nginx.pid \
    && chmod 777 /var/cache/nginx \
    && chmod -R 777 /var/www

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]
