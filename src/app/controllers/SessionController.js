import User from '../models/user';
import jwt from 'jsonwebtoken'
import authConfig from '../../config/auth'





class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');

    if (!user)
      return res.status(400).send({ error: 'Usuário não encontrado' })

    if (user.password !== password)
      return res.status(400).send({ error: 'Senha inválida' })
    const token = jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: '7d'
    })
    res.send({ user, token })
  }
  async resetPassword(req, res) {
    const { email, cpf, password } = req.body;
    const options = { new: true };
    const updates = await User.findOneAndUpdate({ email, cpf }, { email, cpf, password }, options);
    if (!updates)
      return res.status(400).send({ error: 'Usuário não encontrado' })
    res.send(updates)
  }
}

export default new SessionController();