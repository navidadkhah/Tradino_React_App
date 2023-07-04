FROM node:12

WORKDIR /app_docker

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=140

EXPOSE 8080

CMD ["node", "server"]