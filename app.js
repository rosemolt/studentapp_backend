const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const student=require("./models/student")

const app=express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello")
})

app.post("/contact",(req,res)=>{
    res.send("Welcome to my contact page")
})

app.listen(8083,()=>{
    console.log("server started")
})