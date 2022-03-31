FROM node:10-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --production


FROM nginx:1.17.1-alpine

COPY --from=stage-step /app/dist/PruebaTecnicaAngular /usr/share/nginx/html