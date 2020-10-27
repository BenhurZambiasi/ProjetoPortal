
import Discipline from '../models/discipline';
import User from '../models/user';

class RegistrationController {
  //criando
  async store(req, res) {
    const { id } = req.params;
    const { disciplines } = req.body;

    const user = await User.findById({ _id: id })
    const discipline = await Discipline.findById({ _id: disciplines })

    user.disciplines.push(discipline)
    await user.save();
    return res.send({ user });
  }



}
export default new RegistrationController();


