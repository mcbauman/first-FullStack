import mongoose from "mongoose"

export function connect(){
    mongoose
    .connect(process.env.CONNECTION_STRING)
    .then(()=>{console.log("[DB] connected");})
    .catch(err=>console.log("conneting Error",err))
}