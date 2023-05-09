const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://0.0.0.0:27017/';
const client = new MongoClient(url);

// Database Name
const dbName = 'youtube';

async function getdata() {
  // Use connect method to connect to the server
  await client.connect();
 
  const db = client.db(dbName);
  const collection = db.collection('Mobile');

  var respose = await collection.find({}).toArray();

  console.log('Connected successfully to server');
  console.log(respose);
}
getdata();

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());