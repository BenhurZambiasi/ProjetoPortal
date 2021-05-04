import Discipline from '../models/discipline';
import User from '../models/user';

class DisciplineController {
  //criando as disciplinas
  async store(req, res) {
    try {
      const { name, idTeacher, numberStudents } = req.body;
      const discipline = await Discipline.create({ name, idTeacher, numberStudents });
      discipline.save();
      return res.send({ discipline });
    } catch (err) {
      return res.status(400).send({ error: 'Erro de cadastro!, informe os dados corretamente' });
    }
  }

  //listagem de disciplina por professor e por aluno
  async index(req, res) {
    try {
      const { idUser, usertype } = req.params;
      if (idUser && usertype == 2) {
        const discipline = await Discipline.find({ user: idUser }).select("name")
        return res.send({ discipline })
      }
      else if (idUser && usertype == 3) {
        const userDiscipline = await User.find({ _id: idUser }).populate("disciplines").select("firstname");
        return res.send({ userDiscipline })
      }
      return res.status(400).send({ error: "Informe o usertype corretamente, 2 para professor e 3 para aluno" })
    } catch (error) {
      return res.status(400).send({ error: 'Falha na requisição, preencha os dados corretamente' });
    }
  }

  //listagem dos alunos que contem a mesma disciplina
  async listaAlunos(req, res) {

    const { discipline } = req.params;
    console.log(discipline)
    const disciplinas = await User.find({ disciplines: discipline })
    return res.send({ disciplinas })
  }

}
export default new DisciplineController();



