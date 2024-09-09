FROM node:20.10

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]