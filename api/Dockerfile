FROM node:14.15.0

ENV API_PORT=80

HEALTHCHECK --interval=5m --timeout=3s \
    CMD curl -f http://localhost:${API_PORT}/healthcheck || exit 1

COPY . /app

WORKDIR /app

RUN npm install

ENTRYPOINT ["yarn", "run", "start"]