FROM node:18-slim

WORKDIR /usr/src/app
# A wildcard is used to ensure both package.json AND package-lock.json are copied

RUN mkdir -p /home/node/app/backend
# Create app directory

COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código-fonte para o contêiner
COPY . .

CMD [ ".docker/start.sh"]
# Install app dependencies