FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --chown=nginx:nginx index.html /usr/share/nginx/html/
RUN chown -R nginx:nginx /var/cache/nginx /var/log/nginx /etc/nginx/conf.d /run
USER nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
