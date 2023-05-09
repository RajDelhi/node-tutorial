const express_class = require("express");
const app = express_class();

app.get("", (req, res)=>{
   var file_path  =  __dirname+"/public/index.html"
  
    res.sendFile(file_path);
 
})

app.get("/about", (req, res)=>{
    var file_path  =  __dirname+"/public/about.html"
     res.sendFile(file_path);
  
 })


 app.get("/contact-us", (req, res)=>{
    var file_path  =  __dirname+"/public/contactus.html"
     res.sendFile(file_path);
  
 })


 app.get("", (req, res)=>{
    var file_path  =  __dirname+"/public/about.html"
     res.sendFile(file_path);
  
 })

app.listen(5000);