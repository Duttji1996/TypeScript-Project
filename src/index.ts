import  express  from "express";

import routes from "./route/route";
import mongoose from "mongoose"

const app:express.Application= express()

app.use(express.json())
// app.use(express.urlencoded({extended:false}))

const port:number=4000
const host:string="localhost"
const dbUri:string="mongodb+srv://Assignment_Vertel:U6kgLdluuxVvIQ4R@cluster0.vchow1a.mongodb.net/Netoyed"

mongoose.connect(dbUri)
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use("/",routes)


app.listen(port, host, ()=>{
    console.log(`server is running on given port ${port}`)
})