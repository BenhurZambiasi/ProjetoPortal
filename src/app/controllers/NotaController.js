import Discipline from '../models/discipline';

class NotaController {
  //criando
  async store(req, res) {
    const { idDisciplina } = req.params;
    const { notas } = req.body
    const disciplines = await Discipline.findByIdAndUpdate({ _id: idDisciplina }, { $push: { notas } }, { new: true });
    return res.send({ disciplines })
  }

}
export default new NotaController();


