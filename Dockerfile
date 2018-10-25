FROM node:8-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install --production
EXPOSE 3000
CMD ["sh", "-c", "npm run prod"]