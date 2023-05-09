const express = require('express');
const app = express();
// ************* Application level middleware ************* 
const ageFilter = (req, res, next)=>{
    if(!req.query.age){
        res.send("<H1>Please enter user's age</h1>");

    }else if(req.query.age< 18){
        res.send("<H1>You are too young to access</h1>");


    }else{
        next();


    }
    

}

// using middle ware

// app.use(ageFilter); // this line will apply filter on all routes

app.get("/", (req, res)=>{

    res.send("<H1>Hello world</h1>");

})

app.get("/about",ageFilter, (req, res)=>{

    res.send("<H1>you are on about page</h1>");

})

app.listen(5000);