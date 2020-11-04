import User from '../models/user';

class RegistrationController {
  //criando o registro
  async store(req, res) {
    try {
      const { cpf } = req.params;
      const { disciplines } = req.body;

      const disciplinas = await User.findOne({ cpf: cpf, disciplines: { $in: disciplines } })

      if (disciplinas) {
        console.log(disciplinas)
        return res.status(400).send({ error: "Disciplina já cadastrada" })
      }
      const user = await User.findOneAndUpdate({ cpf: cpf }, { $push: { disciplines } }, { new: true })

      if (!user) {
        return res.status(400).send({ error: "CPF incorreto ou não existente" })
      }


      return res.send({ user });

    } catch (error) {
      return res.status(400).send({ error: "CPF incorreto ou não existente" })
    }
  }
}


export default new RegistrationController();


