import Adm from '../models/adm';

class AdmController {
  //criando
  async store(req, res) {
    try {
      const adm = await Adm.create(req.body);
      return res.send({ adm });
    } catch (err) {
      return res.status(400).send({ error: 'Email ou CPF já cadastrado!' });
    }
  }
  //listando
  async index(req, res) {
    const id = req.params.id;
    if (id == null) {
      const adm = await Adm.find();
      return res.send({ adm })
    }
    const { _id, firstname, lastname, email } = await Adm.findById({ _id: id })
    return res.send({ _id, firstname, lastname, email })
  }
  //editando
  async update(req, res) {
    const id = req.params.id;
    const adm = req.body;
    const options = { new: true };
    const updates = await Adm.findByIdAndUpdate(id, adm, options);
    const { _id, firstname, lastname, email, cpf } = updates
    res.send({ _id, firstname, lastname, email, cpf })
  }

  //deletando
  async delete(req, res) {
    const id = req.params.id;
    await Adm.findOneAndRemove({ _id: id })
    return res.status(200).send({ message: 'Usuário deletado com sucesso!!' });
  }


}
export default new AdmController();


