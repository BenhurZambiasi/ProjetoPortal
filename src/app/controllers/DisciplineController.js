import { decodeBase64 } from 'bcryptjs';
import Discipline from '../models/discipline';

class DisciplineController {
  //criando
  async store(req, res) {
    try {
      const discipline = await Discipline.create(req.body);
      return res.send({ discipline });
    } catch (err) {
      return res.status(400).send({ error: 'Email ou CPF já cadastrado!' });
    }
  }

  async index(req, res) {
    const id = req.params.id;
    if (id == null) {
      const discipline = await Discipline.find();
      return res.send({ discipline })
    }
    const discipline = await Discipline.findById({ _id: id })
    return res.send({ discipline })

  }


}
export default new DisciplineController();


