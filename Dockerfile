FROM node:latest AS build

WORKDIR /app
COPY . /app

RUN npm install npm@latest —g
RUN npm install

RUN npm run build



FROM ubuntu
RUN apt—get update
RUN apt—get install nginx —y
COPY -—from=build /app/dist /var/www/html/
EXPOSE 80
CMD [ "nginx",  "-g", "daemon off;" ]

