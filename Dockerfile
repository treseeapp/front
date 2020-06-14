FROM httpd:2.4
WORKDIR /usr/local/apache2/htdocs/
RUN pwd
RUN ls -la
COPY spa/ ./
RUN pwd
RUN ls -la
EXPOSE 80

