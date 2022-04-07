// ???
import mongoose from "mongoose"
const {Schema, model}=mongoose

const messageSchema=new Schema({
    from:{type:String,required:true},
    to:{type:String,required:true},
    at:Date,
    sub:String,
    content:String
})

const Messages=model("message",messageSchema)

export default Messages