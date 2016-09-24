FROM       jackhu/jenkins-deploy-nodejs:4
MAINTAINER Jack Hu <hello@jackhu.top>

RUN npm install

ENV PORT 3000
ENV MONGO_HOST mongotest
ENV REDIS_HOST redistest

EXPOSE  $PORT