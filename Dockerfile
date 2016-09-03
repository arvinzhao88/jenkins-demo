FROM       daocloud.io/library/node:5.12.0
MAINTAINER Jack Hu <hello@jackhu.top>

RUN mkdir /var/www

ADD . /var/www/

RUN cd /var/www ; npm install 

EXPOSE	3000

CMD ["/usr/bin/node", "/var/www/bin/www"]
