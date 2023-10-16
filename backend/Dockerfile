FROM node:16-alpine3.17 AS builder

RUN apk add --no-cache libc6-compat openssl1.1-compat

# Create app directory
COPY . /app
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied

# Install app dependencies
RUN npm install

RUN npm run build

FROM node:14

EXPOSE 3333
CMD [ "npm", "run", "dev" ]
