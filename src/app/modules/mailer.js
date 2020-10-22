import nodemailer from 'nodemailer';
import path from 'path';
import hbs from 'nodemailer-express-handlebars';

import { host, port, user, pass } from '../../config/mail.json';


const transport = nodemailer.createTransport({
  host,
  port,
  auth: { user, pass },
});

transport.use('compile', hbs({
  viewEngine: {
    partialsDir: path.resolve('./src/resource/mails/'),
    defaultLayout: undefined,
  },
  viewPath: path.resolve('./src/resource/mails/'),
  extName: '.html',
}))


export default transport;