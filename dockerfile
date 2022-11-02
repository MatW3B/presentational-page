FROM node:16.18-alpine3.15
EXPOSE 9000
COPY . /app
COPY entry-point.sh /usr/local/bin/entry-point.sh
RUN chmod 755 /usr/local/bin/entry-point.sh
WORKDIR /app
RUN npm install
ENTRYPOINT ["entry-point.sh"]