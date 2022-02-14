FROM node:latest
MAINTAINER Alexandre Kenjy de Siqueira Kumagai
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT npm start
EXPOSE 8081