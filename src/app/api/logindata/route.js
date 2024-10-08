import { NextResponse, NextRequest } from "next/server";
import Connect from "../../../../dbConfig/dbConfig";
import signupModel from "../../../../models/signupModel";
import { headers } from "next/headers";
Connect();



export async function GET()
{
    const authorization = headers().get('authorization')


    const repToken=authorization.split('Bearer ')[1];

    const autToken=repToken.replaceAll('%24','$');

    const authToken=autToken.replace('%2F', '/');

    const auth=await signupModel.find({verifyToken: authToken});

    if(auth.length <= 0)
    {

        return NextResponse.json({"err":"error occured while fetching login data"},{status: 400});
    }

    if(!(auth[0].isAdmin)){

        return NextResponse.json({"error": "You are not an admin "},{status: 400});
    }
    const signnupdata=await signupModel.find();
    return NextResponse.json(signnupdata);
}




