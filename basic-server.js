const http  = require("http");

const value = (req,res)=>{
    
    res.write("This is first http server and testing code.");
    res.end();
}

http.createServer(value).listen(4000);




