import userMode from "../model/userMode";
import express from "express";
import { ExecOptions } from "child_process";
import validate from "../model/validation/valiDator"
import { request } from "http";

const userCreate = async (request:express.Request,response:express.Response)=>{
    try{
        let dataForm= request.body

    // console.log("body  ",dataForm)

    let result = await validate.validateAsync(dataForm)

    // console.log("result  ",result)

    let checkEmail = await userMode.findOne({email:result.email})
    if(checkEmail){
        return response.status(400).send({Status: false, msg:`this email: ${result.email} is already registered`})
    }

    let createData= await userMode.create(result)

    // console.log("createData  ",createData)

    // console.log("createData  ",createData)

    return response.status(201).send({msg:"Success",Data: createData})

    }catch(err){
        
        return response.status(500).send({Status: false, msg:err})
    }

}

const getUser= async (request:express.Request,response:express.Response)=>{

    try{
        let findDetail = await userMode.find()

    return response.status(200).send({msg:"Success", data: findDetail})
    }catch(err){
        
        return response.status(500).send({Status: false, msg:err})
    }

}

const updateUser=async (req:express.Request,res:express.Response) => {
    try{

        let data= req.body
        let {name,email,phone,designation}=data
        let result= await validate.validateAsync(data)

        console.log(result)

        let checkEmail = await userMode.findOne({email:result.email})
        if(checkEmail){
            return res.status(400).send({status:false, msg:"This email is already in use"})
        }
        
        let finalData= await userMode.findOneAndUpdate({_id:req.query.userId},{email:result.email},{new:true})
        
        return res.status(200).send({Status:true, msg:finalData})
        

    }catch(err){
        console.log("err"+ err)
        return res.status(500).send({status:false, message:""+err})
    }

    
}


const deleteUser =async (req:express.Request,res:express.Response) => {

    try{

        let data= req.body

        let checkDetail= await validate.validateAsync(data)

        console.log("checkDelete:   ",checkDetail)

        let deleteData= await userMode.findOneAndDelete({name:checkDetail.name})

        return res.status(200).send({Status:"Deleted",msg:deleteData})


    }catch(err){
        return res.status(204).send({Status:"Server is not responding", message:err})
    }
    
}


module.exports={userCreate,getUser,deleteUser,updateUser}