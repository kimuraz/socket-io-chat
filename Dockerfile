FROM node:8.15-alpine

COPY . .

RUN yarn install

EXPOSE 3000:3000

CMD ["yarn", "start"]
