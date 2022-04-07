// ???
import mongoose from "mongoose"
const {Schema, model}=mongoose

const userSchema=new Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    age:Number,
    email:{type:String,required:true}
})

const User=model("user",userSchema)

export default User