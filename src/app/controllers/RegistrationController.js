
import Discipline from '../models/discipline';
import User from '../models/user';

class RegistrationController {
  //criando o registro
  async store(req, res) {
    try {
      const { id } = req.params;
      const { disciplines } = req.body;
      const user = await User.findByIdAndUpdate({ _id: id }, { $push: { disciplines } })
      return res.send({ user });
    } catch (error) {
      return res.status(400).send({ error: "ID inválido" })
    }
  }
}
export default new RegistrationController();


