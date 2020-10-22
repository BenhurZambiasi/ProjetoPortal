import Adm from '../models/adm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import authConfig from '../../config/auth'
import crypto from 'crypto';
import mailer from '../modules/mailer'




class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const adm = await Adm.findOne({ email }).select('+password');

    if (!adm)
      return res.status(400).send({ error: 'Usuário não encontrado' })

    if (!await bcrypt.compare(password, adm.password))
      return res.status(400).send({ error: 'Senha inválida' })
    adm.password = undefined;
    const token = jwt.sign({ id: adm.id }, authConfig.secret, {
      expiresIn: '7d'
    })
    res.send({ adm, token })
  }
  //--------------------------------------------------//------------
  async forgotPassword(req, res) {
    try {
      const { email } = req.body
      const adm = await Adm.findOne({ email });
      if (!adm)
        return res.status(400).send({ error: 'Usuário não encontrado' })

      const token = crypto.randomBytes(20).toString('hex');

      const now = new Date();
      now.setHours(now.getHours() + 1)

      await Adm.findByIdAndUpdate(adm.id, {
        $set: {
          passwordResetToken: token,
          passwordResetExpires: now,
        }
      });
      mailer.sendMail({
        to: email,
        from: 'benhur_zambiasi@hotmail.com',
        template: '../../resource/mails/resetPassword',
        context: { token },
      }, (err) => {
        if (err)
          return res.status(400).send({ error: 'Não foi possível enviar e-mail' })
        return res.send();
      })
    } catch (error) {
      console.log(error)
      return res.status(400).send({ error })
    }
  }

  async resetPassword(req, res) {
    const { email, token, password } = req.body;

    const adm = await Adm.findOne({ email }).select('+passwordResetToken passwordResetExpires');

    if (!adm)
      return res.status(400).send({ error: 'usuário não exisite' });

    if (token !== adm.passwordResetToken)
      return res.status(400).send({ error: 'Token invalid' });

    const now = Date();
    if (now > adm.passwordResetExpires)
      return res.status(400).send({ error: 'Token expired' });


    adm.password = password;
    await adm.save();
    res.send();
  }
}

export default new SessionController();