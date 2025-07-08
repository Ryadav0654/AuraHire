FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install -g pnpm 

RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 8080

CMD ["pnpm", "run", "start"]

