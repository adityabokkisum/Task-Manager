const sgMail=require("@sendgrid/mail");


sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        from:"adityabokkisum@gmail.com",
        to:email,
        subject:"Thanks For Joining in",
        text:`Welcome to the mail,${name}, Hope You are fine,Please Let us Know if you want anything For help`
    })
}

const sendDeleteMail=(email,name)=>{
    sgMail.send({
        from:"adityabokkisum@gmail.com",
        to:email,
        subject:"Happy Journey",
        text:`Hi ${name}, We hope you are well and have a good Journey Can u please Tell us why You have Decided to Leave us So that We can 
        improve our services`
    })
}

module.exports={
    sendWelcomeEmail,
    sendDeleteMail
}