import Content from '../models/content';
import Discipline from '../models/discipline';

class ContentController {
  //criando
  async store(req, res) {
    try {
      const { id } = req.params
      const { title, description } = req.body
      const discipline = await Discipline.findByIdAndUpdate({ _id: id }, { $push: { title, description } })

      return res.send({ discipline });

    } catch (err) {
      return res.status(400).send({ error: 'Erro de cadastro!' });
    }
  }

  //listagem de disciplina com conteudos
  async index(req, res) {
    try {
      const { id } = req.params
      if (id == null) {
        const discipline = await Discipline.find().populate(['contents']);
        return res.send({ discipline })
      }
      const discipline = await Discipline.findById({ _id: id }).populate(['contents'])
      return res.send({ discipline })

    } catch (error) {
      return res.status(400).send({ error: 'Id inválido!' });
    }
  }


}
export default new ContentController();


