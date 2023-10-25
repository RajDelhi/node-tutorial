const http = require("http")
const data = require("./api-data");
// const { json } = require("express/lib/response");

console.log(data);

const value = (req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'})
    res.write(JSON.stringify(data));
    res.end();
}

http.createServer(value).listen("5000")