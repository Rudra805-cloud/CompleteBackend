// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";
import connectDB from "./db/index.js";
 import dotenv from 'dotenv'

dotenv.config({
     path: './.env'
     })
connectDB();


/*
//IIFE – Immediately Invoked Function Expression
// It’s a function that runs automatically as soon as it is defined, like:

// (function () {
//   console.log("I run instantly!");
// })();
// Arrow function IIFE
// (() => {
//   console.log("Arrow IIFE running");
// })();
// With parameters
// ((name) => {
//   console.log("Welcome", name);
// })("Rudra");

const app=express();
;( async ()=>{
    try {
       mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error)=>{                                  //listner of event
        console.log("err:",error);
        throw error
       })
      app.listen(process.env.PORT, () => {
       console.log(`Example app listening on port ${process.env.PORT}`)
       })
    } catch (error) {
        console.log("Error",error)
        throw err
    }
})()
*/
