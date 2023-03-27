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
    const { id } = request.params;

    const user = UsersRepository.findById(id);
    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(user);
  }

  store(request, response) {
    // criar um usuário
    const { name, email, password } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }
    if (!email) {
      return response.status(400).json({ error: 'E-mail is required' });
    }
    if (!password) {
      return response.status(400).json({ error: 'Password is required' });
    }

    const userExists = UsersRepository.findByEmail(email);
    if (userExists) {
      return response.status(400).json({ error: 'This e-mail is already in use' });
    }

    const user = UsersRepository.create({ name, email, password });

    response.json(user);
  }

  update(request, response) {
    // editar um usuário
    const { id } = request.params;
    const { name, email, password } = request.body;

    const userExists = UsersRepository.findById(id);
    if (!userExists) {
      return response.status(404).json({ error: 'User not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }
    if (!email) {
      return response.status(400).json({ error: 'E-mail is required' });
    }
    if (!password) {
      return response.status(400).json({ error: 'Password is required' });
    }

    const user = UsersRepository.update(id, { name, email, password });

    response.json(user);
  }

  delete(request, response) {
    // deletar um usuário
    const { id } = request.params;

    const user = UsersRepository.findById(id);
    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    }

    UsersRepository.delete(id);

    response.sendStatus(204);
  }
}

export default new UsersControllers();
