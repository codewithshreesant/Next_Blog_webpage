import nodemailer from 'nodemailer';
import bcrypt from 'bcryptjs';
import signupModel from '../models/signupModel';
const emailSend=async ({email, emailType, userId})=>{
   try {
     let salt=await bcrypt.genSalt(10);
     let hashToken=await bcrypt.hash(userId.toString(), salt);

     if(emailType === "VERIFY")
     {
        const data=await signupModel.findByIdAndUpdate(userId, {verifyToken: hashToken},{verifyTokenExpiry: Date.now()});
     }

    const TransportMail=nodemailer.createTransport({
         'service': 'gmail',
 
         auth:{
             user: "shreesantadhikari4590@gmail.com",
             pass: "orgglbydclarzckr"
         }
     })
 
     const mailOptions={
         from: "shreesantadhikari4590@gmail.com",
         to: email,
         subject: emailType === "VERIFY" ? "verify your email" : "reset password",
         html: "<h1> Shreesant Adhikari </h1>"
     }
 
     TransportMail.sendMail(mailOptions, (err, info)=>{
         if(err)
         {
             console.log("Error occured while sending mail ", err);
         }else{
             console.log("Email sent successfully");
         }
     })
   } catch (error) {
    console.log("mail error ", error);
   }
}


export default emailSend;