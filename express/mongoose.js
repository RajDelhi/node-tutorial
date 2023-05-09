const express   =   require("express");
const app = express();
const mongoose = require('mongoose');


const main = async ()=>{
    const dbconnect     =   await mongoose.connect("mongodb://0.0.0.0:27017/youtube");
    const productSchema =   new mongoose.Schema({
        
    })
    console.log(dbconnect) 


}   

main();