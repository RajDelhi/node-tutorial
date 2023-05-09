const http = require('http');
const api_data = require("./api-data");
http.createServer((rep,res)=>{
    //res.writeHead(200,{'Content-type':'Application|json '});
    res.write(JSON.stringify(api_data));
  //  res.write(JSON.stringify({name:'Raj Yadav',Age:39,Location:'Delhi'}));
    res.end();

}).listen(4500);
