import { NextRequest, NextResponse } from "next/server"
import Connect from "../../../../dbConfig/dbConfig";
import signupModel from "../../../../models/signupModel";
import bcrypt from 'bcryptjs';
import emailSend from "../../../../helpers/mail";
Connect();
export async function POST(NextRequest){
    try {
        const reqBody=await NextRequest.json();

        const {username, email, password}=reqBody;
        const checkUser=await signupModel.find({email});
        if(checkUser.length>=1){
            return NextResponse.json({error: "User already exists"});
        }

        const salt=await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(password, salt)
        const user=await signupModel.create({
            username, email, password: hashPassword
        })
        user.save();
       

       await emailSend({email: email, emailType: "VERIFY", userId:user._id});

        return NextResponse.json({message: "signup successfully ", password: user.password});
    } catch (error) {
        console.log("Error signup ", error);
        return NextResponse.json({
            error: "Error occured while signup", messageError: error
        })
        
    }
}




