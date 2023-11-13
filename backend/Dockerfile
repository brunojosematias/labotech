# Use a imagem específica do node
FROM node:18-slim

# Crie o diretório da aplicação
WORKDIR /usr/src/app

# Copie o arquivo package.json e package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Inicie o aplicativo
CMD [ "npm", "dev" ]
