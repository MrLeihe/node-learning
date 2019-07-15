FROM centos:latest

MAINTAINER stone<1861719508@163.com>

WORKDIR /app/dist

ADD hello.js /app/dist/hello.js

RUN  mkdir logs
