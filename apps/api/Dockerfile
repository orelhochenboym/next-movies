# Run the container with `docker run -p 3000:3000 -t api`.
FROM docker.io/node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=3000

WORKDIR /app

RUN addgroup --system api && \
    adduser --system -G api api

COPY apps/api/dist api/
RUN chown -R api:api .

RUN npm --prefix api --omit=dev -f install

EXPOSE 3000

CMD [ "node", "api" ]
