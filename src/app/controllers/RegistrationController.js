
import Discipline from '../models/discipline';
import User from '../models/user';

class RegistrationController {
  //criando
  async store(req, res) {
    const { id } = req.params;
    const { disciplines } = req.body;

    const user = await User.findByIdAndUpdate({ _id: id }, { $push: { disciplines } })
    return res.send({ user });
  }



}
export default new RegistrationController();


