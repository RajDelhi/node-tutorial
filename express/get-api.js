const express = require("express");
const dbconnect = require("./dbconnection")
const app = express();


app.get("/", async (req, res) => {
    const db = await dbconnect();
    const data = await db.find().toArray();
    console.log(data);
    res.send(data);
})


app.listen(5000)


