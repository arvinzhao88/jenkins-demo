FROM       jackhu/jenkins-deploy-nodejs:6
MAINTAINER Jack Hu <hello@jackhu.top>

RUN npm install

ENV PORT 3000
ENV MONGO_HOST mongo
ENV REDIS_HOST redis

EXPOSE  $PORT
