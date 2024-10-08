import mongoose from "mongoose";

const signupRules=new mongoose.Schema({
    username:{
        type: String,
        required: [true, "please provide a username"],
    },
    email:{
        type: String,
        required: [true, "please provide an email"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "please provide a password"]
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    isAdmin:{
        type: Boolean,
        default:false
    },
    verifyToken:
    {
        type: String,
    },
    verifyTokenExpiry: Date,
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date
})

const signupModel=mongoose.models.signupModel || mongoose.model('signupModel', signupRules);


export default signupModel;