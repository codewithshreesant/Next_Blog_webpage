import mongoose from "mongoose";

const Connect=async ()=>{
    try {
        await mongoose.connect('mongodb+srv://adhikarishreesant45:F2jxrey6901FfCno@cluster0.wxqs5.mongodb.net/').then(()=>{console.log("Connection successfull")}).catch((error)=>{console.log("Error occured while connecting with database ", error)})
    } catch (error) {
        console.log("Connection Error ", error);
    }
}


export default Connect;