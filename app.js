const express=require("express")
const app =express()
require("dotenv").config()
const mailHelper=require("./utils/mailHelper")
// all routes here 



// middlewares here
app.use(express.json())


// router middleware
// app.use("/api/v1",(req,res,next)=>{
//     return res.status(200).json({
//         "success":"true",
//         "message":"Server is working"
//     })
// })
const options={
    "toEmail":"reciever@gmail.com",
    "subject":"mail testing",
    "message":"mail is working",
    "textHtml":"<h1>mail #2 recived</h1>"
}
app.use("/api/v1/sendmail",(req,res,next)=>{
    mailHelper(options)
    res.status(200).json({
        success:true,
        message:"mail sent"
    })
})




module.exports=app