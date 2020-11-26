const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    // service: 'Godaddy',
    service: 'Godaddy',
    host: "smtpout.asia.secureserver.net",  
    // secureConnection: true,
    secureConnection: false, // TLS requires secureConnection to be false
    tls: {
        ciphers:'SSLv3'
    },
    requireTLS:true,
    port: 465,
    debug: true,
    auth:{
        user: 'info@xponential.in',
        pass:'Gdu@32134'
    }
    // auth:{
    //     user: 'anurag.humonicsglobal@gmail.com',
    //     pass: '@1Test#$%'
    // } 

});

async function sendMail(mailOption) {
    try{
    console.log("Sending mail")
    console.log(mailOption);
    let mail = {};
    mail.from = 'info@xponential.in';
    if(mailOption.type == 'forgot_password') {
        mail.subject ='We recieved a password reset request';
        mail.to = mailOption.to;
        mail.html = `<p>Please click on <a href=${process.env.DOMAIN}/api/resetpassword?token=${mailOption.token}>link. 
         You will be redirected to change password link</a></p>`
    } else if(mailOption.type == 'confirm_email') {
        mail.subject = 'Please Confirm your email';
        mail.to = mailOption.to;
        mail.html = 
        `<p>
        Hey, 
        Welcome at Xponential,
        This is a confirmation email and this email will be used for all the communication regarding our products 
        and also to solve your queries, if any. 
        Please click on the <a href=${process.env.DOMAIN}/api/confirm/email?token=${mailOption.token}>Confirm your 
        email address link</a>
        </p>`
    }
    await transporter.sendMail(mail)
    console.log('Sent message successfully');
    }
    catch(error){
        console.log(error);
    }  
}

module.exports = sendMail;