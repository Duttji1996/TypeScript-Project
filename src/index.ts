import  express  from "express";
import mongoose, { mongo } from "mongoose"
import router from "./routes/route";


const app:express.Application=express()

app.use(express.json())

const dbUrl:string="mongodb+srv://userDataBase:dHRWzaT0QpktSLA3@cluster0.kblbywo.mongodb.net/Netoyed-02"


mongoose.connect(dbUrl)
.then(()=>console.log("MongoDb is Connected"))
.catch(err=>console.log(err))

app.use("/",router)
const port:number=3000
const host:string="localhost"

app.listen(port,host, ()=>{
    console.log(`server is running on given ${port}`)
})