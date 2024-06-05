// require('dotenv').config({path: './env'})

import dotenv from"dotenv"
import connectDB from "./database/index.js";

dotenv.config({
    path: '/.env'
})

connectDB()








/*

method 1

import express from "express" 
const app = express()

; ( async ()=>{
    try {
        await moongose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERR: ",error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`app started on ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("Error",error)
        throw error
    }
})()
*/
