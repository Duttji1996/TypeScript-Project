import joi from "@hapi/joi"
import mongoose from "mongoose";

const mobileRegex:RegExp= /^[6-9]{1}[0-9]{9}$/

const userSchema = joi.object({
    name:joi.string().min(3).max(30).uppercase(),
    email: joi.string().email().min(3).max(200).lowercase(),
    phone:joi.string().pattern(new RegExp('^[[6-9]{1}[0-9]{9}$')),
    designation:joi.string().min(3).max(20).uppercase()
}) 

export default userSchema;

