import { PORT, mongoDBURL } from "./Config/config.js";
import express from "express";
import mongoose from "mongoose";
import router from "./routes/book.routes.js";
import cors from 'cors';
const app = express();

app.use(express.json());

//Middleware For handelling CORS pollicy

//Allow all origin with default of cors(*)
app.use(cors())

//Allow Custom Origin
// app.use(cors({
//     origin: 'httl://localhost:3000',
//     method: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }))
app.use("/books", router)

app.get("/", (req,res)=>{    
    return res.send("Website for Books");
})

mongoose.connect(mongoDBURL)
.then(()=>{
    console.log('APP Conected to Database');
    app.listen(PORT, ()=>{
        console.log(`Server Running on Prot ${PORT}`);
    }) 
    
}).catch((error)=>{
    console.log(error);
    
})