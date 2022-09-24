
FROM node:16 as builder
WORKDIR /app/src/
COPY ./package.json .
RUN npm install
COPY . .
CMD ["npm", "run", "start"]
