const expressClass      =   require('express')
const basApp            =   expressClass()   

basApp.get("", (req,res)=>{
    res.send("This is home page");
   
})

basApp.get("/contact-us", (req,res)=>{
    
    res.send("This is contact page");
})

basApp.get("/help", (req,res)=>{
  
    res.send("This is help page");
})

basApp.get("/about-us", (req,res)=>{
    
    res.send("This is about us page");
})

basApp.get("*", (req,res)=>{
  
    res.send("This is not a valid page");
})

basApp.listen(5000);