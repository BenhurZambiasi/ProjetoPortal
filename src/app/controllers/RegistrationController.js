
import Discipline from '../models/discipline';
import User from '../models/user';

class RegistrationController {
  //criando o registro
  async store(req, res) {
    try {
      const { cpf } = req.params;
      const { disciplines } = req.body;
      const user = await User.findOneAndUpdate({ cpf: cpf }, { $push: { disciplines } })
      return res.send({ user });
    } catch (error) {
      return res.status(400).send({ error: "CPF incorreto ou não existente" })
    }
  }
}
export default new RegistrationController();


