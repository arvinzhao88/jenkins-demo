FROM       jackhu/jenkins-deploy-nodejs:6
MAINTAINER Jack Hu <hello@jackhu.top>

EXPOSE  3000

CMD pm2 start --no-daemon processes.json