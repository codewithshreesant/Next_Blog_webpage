import { NextResponse, NextRequest } from "next/server";
import Connect from "../../../../dbConfig/dbConfig";
import signupModel from "../../../../models/signupModel";
import bcrypt from 'bcryptjs';
import Cookies from 'js-cookie'
import { cookies } from 'next/headers';
Connect();
export async function POST(req, res) {
    const reqBody = await req.json();

    const { email, password } = reqBody;
    const checkUser = await signupModel.find({ email });
    if (checkUser.length <= 0) {
        return NextResponse.json({
            error: "No valid user found"
        })
    }


    const authPass = await bcrypt.compare(password, checkUser[0].password);

    if (authPass) {
    
        const userToken=checkUser[0].verifyToken;
        const userAdmin=checkUser[0].isAdmin;
        cookies().set('userToken', userToken); // Set cookie for userToken
        cookies().set('isAdmin', userAdmin);
        return NextResponse.json({
            message: "Login Successfull"
        })
    }else{

        return NextResponse.json({
            error: "Incorrect Password"
        })
    }
}