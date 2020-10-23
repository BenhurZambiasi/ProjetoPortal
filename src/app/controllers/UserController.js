import User from '../models/user';

class UserController {
  //criando
  async store(req, res) {
    try {
      const user = await User.create(req.body);
      return res.send({ user });
    } catch (err) {
      return res.status(400).send({ error: 'Email ou CPF já cadastrado!' });
    }
  }
  //listando
  async index(req, res) {
    try {
      const id = req.params.id;
      if (id == null) {
        const user = await User.find();
        return res.send({ user })
      }
      const { _id, firstname, lastname, email, password } = await User.findById({ _id: id })
      return res.send({ _id, firstname, lastname, email, password })
    } catch (error) {
      return res.send(error)
    }

  }
  //editando
  async update(req, res) {
    const id = req.params.id;
    const user = req.body;
    const options = { new: true };
    const updates = await User.findByIdAndUpdate(id, user, options);
    const { _id, firstname, lastname, email, cpf } = updates
    res.send({ _id, firstname, lastname, email, cpf })
  }

  //deletando
  async delete(req, res) {
    const id = req.params.id;
    await User.findOneAndRemove({ _id: id })
    return res.status(200).send({ message: 'Usuário deletado com sucesso!!' });
  }


}
export default new UserController();


