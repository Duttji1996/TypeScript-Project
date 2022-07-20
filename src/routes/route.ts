import express from "express";
import mongoose from "mongoose"

const router:express.Router=express.Router()

//logic

router.get("/testMe", (req:express.Request,res:express.Response)=>{
    return res.status(200).send({msg:"Hi, Welcome to Vertel Netoyed"})
})




export default router;