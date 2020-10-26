import Content from '../models/content';
import Discipline from '../models/discipline';

class DisciplineController {
  //criando
  async store(req, res) {
    try {
      const { name, idTeacher, numberStudents } = req.body;
      const discipline = await Discipline.create({ name, idTeacher, numberStudents });
      discipline.save();

      return res.send({ discipline });
    } catch (err) {
      console.log(err)
      return res.status(400).send({ error: 'Erro de cadastro!' });
    }
  }

  //listando
  async index(req, res) {
    const id = req.params.id;
    if (id == null) {
      const discipline = await Discipline.find().populate(['contents']);
      return res.send({ discipline })
    }
    const discipline = await Discipline.findById({ _id: id }).populate(['contents'])
    return res.send({ discipline })
  }









}
export default new DisciplineController();


