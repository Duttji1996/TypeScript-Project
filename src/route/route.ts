import express from "express";


const routes:express.Router=express.Router()

//logic

routes.get('/findUser', (request:express.Request,response:express.Response)=>{
    response.status(200).send({msg: "Welcome to Netoyed, A Vertel"})
})



export default routes; 