const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.get("/send-email", async (req, res) => {

    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "92bcdb9619d4e6",
            pass: "********8e6e"
        },
    });

    var message = {
        from: "noreply@labotech.com",
        to: "dev@labotech.com",
        subject: "Message title",
        text: "Plaintext version of the message",
        html: "<p>HTML version of the message</p>"
      };

      transport.sendMail(message, function (err) {
        if (err) return res.status(400).json({
            erro: true,
            mensagem: "Erro: email não enviado!"
        });

        
      })

    return res.json({
        erro: false,
        mensagem: "Email enviado com sucesso!"
    });

    app.listen(8080, () => {
        console.log("servidor iniciado na porta 8080: http://localhost:8080")
    });


})
