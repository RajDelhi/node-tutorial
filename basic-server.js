const httpServer = require('http');

//******** Function 
function printName(req, res) {
    res.write("<b>HI, This is Raj Yadav..</b>");
    res.end();
}
//******* Arrow function ********************

const MyName = (req,res)=>{
    res.write("<b>This is arrow function example</b>");
    res.end();
}


httpServer.createServer(MyName).listen(4000); // this is port so call url localhost:4000 for output

httpServer.createServer(printName).listen(4500);


