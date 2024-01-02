import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoutings from "./Book/index.js"
import userRoutings from "./User/index.js"
import verifyToken from "./jwt/token.js"


const app = express()
dotenv.config()

mongoose.connect(process.env.DB_URL)
    .then( console.log('db connected'))
    .catch(err =>{
            console.log('error',err)
    })

app.use(express.json());
app.use('/Book',bookRoutings);
app.use( '/user',userRoutings)
app.use(verifyToken)

app.listen(6000,()=>{
    console.log(`port on ${process.env.port}`)
});



