FROM httpd:2.4-alpine
RUN rm -rf /usr/local/apache2/htdocs/*
RUN adduser -D raja
COPY --chown=raja:raja index.html /usr/local/apache2/htdocs/
EXPOSE 80
CMD ["httpd-foreground"]
