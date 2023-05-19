# syntax=docker/dockerfile:1
FROM node:latest AS build

WORKDIR /app
COPY package*.json .

RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine as book-ui

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist . 
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE $VITE_DOCKER_PORT

CMD nginx -g 'daemon off;'
