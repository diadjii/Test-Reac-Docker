FROM nginx:alpine

ARG VERSION=1.0.0

COPY default.conf /etc/nginx/conf.d/

WORKDIR /usr/share/nginx/html/

COPY build .
