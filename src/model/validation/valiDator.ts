import joi from "@hapi/joi"
import mongoose from "mongoose";

const userSchema = joi.object({
    name:joi.string().min(3).max(20).uppercase(),
    email: joi.string().email().min(3).max(200).lowercase(),
    phone:joi.number(),
    designation:joi.string().min(3).max(20).uppercase()
}) 

export default userSchema;