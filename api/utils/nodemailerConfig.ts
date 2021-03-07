require('dotenv').config();
import * as nodemailer from 'nodemailer';
import * as SMTPTransport from 'nodemailer-smtp-transport';

async function sendEmail(receiver: string, subject: string, text: string) {
  const nodemailerOptions: SMTPTransport.SmtpOptions = {
    service: 'Gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  };

  let transporter = nodemailer.createTransport(nodemailerOptions);

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
