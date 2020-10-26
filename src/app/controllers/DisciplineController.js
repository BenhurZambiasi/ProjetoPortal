import Discipline from '../models/discipline';
import User from '../models/user';

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
    const { id, usertype } = req.params;

    if (id == null && !usertype) {
      const discipline = await Discipline.find();
      return res.send({ discipline })
    }
    if (usertype == 2) {
      const discipline = await Discipline.find({ idTeacher: id }).select("name")
      return res.send({ discipline })
    }
    else if (usertype == 3) {
      const userDiscipline = await User.find({ _id: id }).populate("disciplines").select("firstname");
      return res.send({ userDiscipline })
    }
    const discipline = await Discipline.findById({ _id: id }).populate(['contents'])
    return res.send({ discipline })


  }







}
export default new DisciplineController();


