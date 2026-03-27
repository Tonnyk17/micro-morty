FROM node:22-alpine AS build

WORKDIR /app/mf-shell

COPY shared-types /app/shared-types
COPY mf-shell/package.json mf-shell/package-lock.json ./

RUN npm ci

COPY mf-shell/ ./

ARG FEDERATION_MF_CHARACTERS=http://localhost:3001/assets/remoteEntry.js
ARG FEDERATION_MF_CHARACTERDETAIL=http://localhost:3002/assets/remoteEntry.js
ENV FEDERATION_MF_CHARACTERS=$FEDERATION_MF_CHARACTERS
ENV FEDERATION_MF_CHARACTERDETAIL=$FEDERATION_MF_CHARACTERDETAIL

RUN npm run build

FROM nginx:alpine

COPY docker/nginx-spa.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/mf-shell/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
