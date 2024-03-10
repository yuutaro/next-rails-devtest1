FROM node:20.11.1
RUN apt-get update -qq && apt-get install -y vim gosu

RUN mkdir /app
WORKDIR /app

COPY . /app

ADD entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT [ "entrypoint.sh" ]