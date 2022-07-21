import express, { Router } from "express";
import mongoose from "mongoose";
const {userCreate,getUser,deleteUser,updateUser} =  require("../controller/userController")


const routes:express.Router=express.Router()


//logic

routes.get('/findUser', (request:express.Request,response:express.Response)=>{
    response.status(200).send({msg: "Welcome to Netoyed, A Vertel"})
})

routes.post('/createUser', userCreate )

routes.get("/findDetails",getUser)


routes.put("/updateDetails",updateUser)


routes.delete("/deleteDetails",deleteUser)



export default routes; 