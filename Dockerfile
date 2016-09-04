FROM       daocloud.io/library/node:5.12.0
MAINTAINER Jack Hu <hello@jackhu.top>

RUN mkdir /var/www

ADD . /var/www/

WORKDIR /var/www

RUN npm install 

EXPOSE	3000

CMD ["npm", "start"]
