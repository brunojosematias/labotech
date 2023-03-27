const users = [];

// aqui será inplementado todos os metódos para fazer a manipulaçao do data source. Seu papel é somente acessear a fonte de dado
class UserRepository {
  findAll() {
    return users;
  }
}

export default new UserRepository();
