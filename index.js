const app=require("./app")
require("dotenv").config()




app.listen(8000,()=>{
    console.log("server is running at port 8000")
})