FROM node:22-alpine AS build

WORKDIR /app/mf-characterdetail

COPY shared-types /app/shared-types
COPY mf-characterDetail/package.json mf-characterDetail/package-lock.json ./

RUN npm ci

COPY mf-characterDetail/ ./

ARG VITE_RICK_AND_MORTY_API_URL=https://rickandmortyapi.com/api
ENV VITE_RICK_AND_MORTY_API_URL=$VITE_RICK_AND_MORTY_API_URL

RUN npm run build

FROM nginx:alpine

COPY docker/nginx-spa.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/mf-characterdetail/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
