var express = require('express');
var app = express(); 
const dbconnect = require("./dbconnection")
app.use(express.json())

/* This is Get API which use to get data *************/
app.get("/", async (req, res) => {
    const collection = await dbconnect();
    // return false;
    const data = await collection.find().toArray();
     res.send(data);
})

/* This is POST API which use to Save data *************/
// we can use same name route if the method are different like GET or POST

app.post("/",async (req, res)=>{
    const collection = await dbconnect()
    var result = (await collection).insertOne(req.body);
    res.send(result); 

})

app.put("/:name",async (req, res)=>{
    const collection = await dbconnect()
    // console.log(req.params.name);
    // console.log(  req.body.Model);
    // res.send("status"); 
    // return false;
    var status = await collection.updateOne(
            { "Brand": req.params.name},
            {$set: {"Model": req.body.Model}}
            )
    res.send(status); 

})

app.post("/",async (req, res)=>{
    const collection = await dbconnect()
    var result = (await collection).insertOne(req.body);
    res.send(result); 

})

app.listen(5000);


