FROM docker.io/nginx:latest

COPY apps/client/dist /var/www
COPY apps/client/nginx/nginx.conf /etc/nginx/nginx.conf 
COPY apps/client/nginx/cors.conf /etc/nginx/cors.conf

WORKDIR /usr/share/nginx/html

RUN touch /var/run/nginx.pid
RUN chmod 777 /var/run/nginx.pid
RUN chmod 777 /var/cache/nginx

EXPOSE 4200

RUN chmod 777 /usr/share/nginx/html
RUN chmod 777 /var/www/*

USER nginx

CMD ["nginx","-g","daemon off;"]