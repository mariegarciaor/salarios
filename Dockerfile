FROM node:16

EXPOSE 80

ENV PORT=80

WORKDIR /src

COPY package.json package-lock*.json ./

RUN npm install

COPY . .

CMD ["node", "app/index.js"]