const { MongoClient }   = require('mongodb');
const url = "mongodb://0.0.0.0:27017";
const mongodb = new MongoClient(url);

async function dbconnect(){

    await mongodb.connect();
    const db   =   mongodb.db('youtube');
    const collection    =   db.collection('Mobile');
    return collection;
    //  var data            =   await collection.find().toArray();
    //  console.log(data);   
}

module.exports = dbconnect;
//dbconnect();