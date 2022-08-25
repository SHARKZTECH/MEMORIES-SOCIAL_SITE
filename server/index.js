import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"

const app=express();
const PORT=5000;

app.use(express.json({limit:"30mb",extendend:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use("/posts",postRoutes);
app.use("/users",userRoutes);


mongoose.connect("mongodb://127.0.0.1:27017/memories",{
    useNewUrlParser:true
});
const connection=mongoose.connection;
connection.once("open",function(){
    console.log("MongoDB database connection established successfully")
});




app.listen(PORT,function(){
    console.log("Server is running on Port :" + PORT);
});
