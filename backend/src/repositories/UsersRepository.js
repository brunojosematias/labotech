import { v4 } from 'uuid';

const users = [];

// aqui será inplementado todos os metódos para fazer a manipulaçao do data source. Seu papel é somente acessear a fonte de dado
class UserRepository {
  findAll() {
    return users;
  }

  findById(id) {
    return users.find((user) => user.id === id);
  }

  findByEmail(email) {
    return users.find((user) => user.email === email);
  }

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
}

export default new UserRepository();
