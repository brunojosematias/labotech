// Responsável por fazer a regra de negócio dos usuários (CRUD)

import UsersRepository from '../repositories/UsersRepository.js';

class UsersControllers {
  index(request, response) {
    // Listar todos os usuários
    const users = UsersRepository.findAll();

    response.json(users);
  }

  show(request, response) {
    // Listar um usário

  }

  store(request, response) {
    // criar um usuário
    const { name, email, password } = request.body;

    const user = UsersRepository.create({ name, email, password });

    response.json(user);
  }

  update(request, response) {
    // editar um usuário
  }

  delete(request, response) {
    // deletar um usuário
  }
}

export default new UsersControllers();
