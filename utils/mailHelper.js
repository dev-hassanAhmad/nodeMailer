const nodemailer = require("nodemailer");



const mailHelper=async(options)=>{
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      console.log(options)
  const message={
    from: 'sender@mail.com', // sender address
    to: options.toEmail, // list of receivers
    subject: options.subject, // Subject line
    text: options.message, // plain text body
    html: options.textHtml, // html body
  }
      await transporter.sendMail(message);
  



}

module.exports=mailHelper;