const express = require('express');
const app = express();
const login = express.Router();

const is_login = (req, res, next)=>{
    if(!req.query.login){
            res.send("Please login for access");
    }else if(req.query.login != 1){
        res.send("Please enter valid credentials for access");
    }else{
        next();
    }
}

login.use(is_login);


//app.use(is_login); // this will apply middleware on all files
//app.use();

app.get("/",(req, res)=>{
    res.send("I am in home page");
})

app.get("/contact",(req, res)=>{
    res.send("I am in contact 1 page");
})


app.get("/about",(req, res)=>{
    res.send("I am in about page");
})


login.get("/profile",(req, res)=>{
    res.send("I am in profile page");
})
app.use('/', login);


app.listen(3200);

