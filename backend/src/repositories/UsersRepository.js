const { v4 } = require('uuid');

let users = [];

// aqui será inplementado todos os metódos para fazer a manipulaçao do data source. Seu papel é somente acessear a fonte de dado
class UserRepository {
  // retorna todos os registros de usuários
  findAll() {
    return users;
  }

  // verifica se um usuário existe
  findById(id) {
    return users.find((user) => user.id === id);
  }

  // verificar se um usuário da já foi cadastrado
  findByEmail(email) {
    return users.find((user) => user.email === email);
  }

  // Registra os dados do usuário no banco de dados
  create({ name, email, password }) {
    const newUser = {
      id: v4(),
      name,
      email,
      password,
    };

    users.push(newUser);

    return newUser;
  }

  // atualiza os usuários no banco de dados
  update(id, { name, email, password }) {
    const updateUser = {
      id,
      name,
      email,
      password,
    };

    users = users.map((user) => (user.id === id ? updateUser : user));

    return updateUser;
  }

  // deleta um usuário no danco de dados
  delete(id) {
    users = users.filter((user) => user.id !== id);
  }
}

module.exports = new UserRepository();
