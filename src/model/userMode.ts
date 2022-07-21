import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    name:{type:String, trim:true},
    email:{type: String,unique:true,trim:true},
    phone:{type: Number,trim:true},
    designation:{type: String,default:"Backend Developer",trim:true}

},{timestamps:true})

export default mongoose.model("user",userSchema)