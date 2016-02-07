FROM node:5.5.0

MAINTAINER Cole Mother fucking Lawrence

RUN npm install -g coffee-script async lodash

RUN mkdir -p /nodejs-app

WORKDIR /nodejs-app

ADD . /nodejs-app

RUN npm install

CMD ["npm", "start"]

EXPOSE ${PORT}
