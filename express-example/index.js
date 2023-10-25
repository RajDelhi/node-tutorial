const express = require('express');
const app   =   express();
const path  =   require('path');

var publicPath = path.join(__dirname,"/public/")

var user_middleware  =  (req, res, next)=>{
    if(!req.query.user_id){
        res.send('This is a basic middleware');
    }else if(req.query.user_id == 10){
        next();
    }else{
        res.send('Not authorised');
    }

}

// app.use(user_middleware); // ***** this is for application lever middleware ***********


app.get('',(req,res)=>{
   //res.send(`Hi, this is first page and query string is ${req.query.name}`)
   res.sendFile(`${publicPath}index.html`)
})

app.get('/about',(req,res)=>{
    res.sendFile(`${publicPath}aboutus.html`)
})

app.get('/contact-us',(req,res)=>{
    res.sendFile(`${publicPath}contact.html`)
})

app.get('/user-data',user_middleware, (req,res)=>{
    res.send({
        name:'Rajender kumar',
        emp: 'EN0026'
    })
})


app.listen('5000')