import Content from '../models/content';
import Discipline from '../models/discipline';

class ContentController {
  //criando
  async store(req, res) {
    try {
      const { id } = req.params
      const { title, description } = req.body
      const discipline = await Discipline.findById({ _id: id })

      const disciplineContent = new Content({ title, description, disciplineId: discipline._id })
      
      discipline.contents.push(disciplineContent)
      await discipline.save();
      await disciplineContent.save();
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
      const content = await Content.find()
      return res.send({ content })
    }
    const content = await Content.findById({ _id: id })
    return res.send({ content })

  }


}
export default new ContentController();


