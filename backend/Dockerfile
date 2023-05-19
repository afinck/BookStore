# syntax=docker/dockerfile:1
FROM node:latest as book-api

WORKDIR /backend

COPY package*.json .

RUN npm install

COPY . .

CMD npm start
