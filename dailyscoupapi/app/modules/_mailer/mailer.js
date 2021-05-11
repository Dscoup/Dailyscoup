'use strict'
exports.sendMail = (mailOptions) => {
    return new Promise((resolve, reject) => {
        const nodemailer = require('nodemailer');
        const smtpTransport = require('nodemailer-smtp-transport');
        nodemailer.createTestAccount(() => {
            let transporter;
            if (mailOptions.from == "vecan@co") {
                transporter = nodemailer.createTransport({
                    host: "smtp.office365.com",
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                        user: "vecan@co",
                        pass: "Password1"
                    },
                    tls: {
                        ciphers: 'SSLv3'
                    }
                });
            } else {
                //for pearson
                transporter = nodemailer.createTransport(smtpTransport({
                    host: 'relay.mx.pearson.com',
                    port: 25
                }));
            }

            // send mail with defined transport object
            transporter.sendMail(null, (error, info) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(info);
                }
            });
        })
    })
};