const express_class = require('express');
const app = express_class();

app.get("",(req, res)=>{ // the is home page route
    console.log(req.query);
  
    res.send("Hi, You are on homep page now.");
})

app.get("/contact-us",(req, res)=>{ // the is home page route
    res.send("Hi, You are on contact page now.");
})

app.get("/about-us",(req, res)=>{ // the is home page route
    res.send("Hi, You are on about us page now.");
})

app.listen(5000);