require('dotenv').config();
import nodemailer from 'nodemailer';

async function sendEmail(receiver: string, subject: string, text: string) {
  let transporter = nodemailer.createTransport({
    //@ts-ignore - todo later
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });

  let mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: receiver,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, function (err: Error, data: {}) {
    if (err) {
      console.error('Error: ' + err);
    } else {
      console.log('Email sent successfully to: ' + receiver);
    }
  });
}

export default sendEmail;
