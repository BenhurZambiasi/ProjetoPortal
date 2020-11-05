import Discipline from '../models/discipline';

class NotaController {
  //criando
  async store(req, res) {
    const { idDisciplina } = req.params;
    const { notas } = req.body
    const disciplines = await Discipline.findByIdAndUpdate({ _id: idDisciplina }, { $push: { notas } }, { new: true });
    return res.send({ disciplines })
  }

  async index(req, res) {
    const disciplines = await Discipline.find();
    var result = [];
    disciplines.forEach(discipline => {
      result.push({ discipline: discipline.name, nota: discipline.notas});
    });

    return res.send({ result })
  }



}
export default new NotaController();


