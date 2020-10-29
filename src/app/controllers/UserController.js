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
      const { id } = req.params;
      if (id == null) {
        const user = await User.find()
        return res.send({ user })
      }
      const user = await User.find({ _id: id })
      return res.send({ user })
    } catch (error) {
      return res.status(400).send({ error: "ID inválido, usuário não encontrado" })
    }



  }
  //editando
  async update(req, res) {
    try {
      const { id } = req.params;
      const { firstname, lastname, email, cpf, password } = req.body

      const user = await User.findByIdAndUpdate({ _id: id }, { firstname, lastname, email, cpf, password }, { new: true });
      return res.send({ user })

    } catch (error) {
      return res.status(400).send({ error: "ID inválido, usuário não encontrado" })
    }
  }

  //deletando
  async delete(req, res) {
    const id = req.params.id;
    await User.findOneAndRemove({ _id: id })
    return res.status(200).send({ message: 'Usuário deletado com sucesso!!' });
  }


}
export default new UserController();


