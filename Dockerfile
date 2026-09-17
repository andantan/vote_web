FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci && npm install http-proxy-middleware@^2.0.6

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
