FROM node:18-slim

USER node

RUN mkdir -p /home/node/app/frontend

RUN npm i

COPY . /app

WORKDIR /home/node/app/frontend

CMD [ ".docker/start.sh"]