const express = require('express');
const multer = require('multer');


const app = express();
let stroage = multer.diskStorage({
    destination:(req,file,callBack)=>{
    callBack(null,'./upload')
    },
   filename:(req,file,callBack)=>{
    callBack(null,file.originalname)
   }
})
let upload= multer({storage:stroage}).single('myfile')

app.post('/',(req,res)=>{
upload(req,res,(error)=>{
    if(error){
      res.send("File Upload Fail")
    }
    else{
    res.send('File upload Sucess')
    }
})
})

app.listen(3000,()=>{
    console.log("server runnig.....")
})