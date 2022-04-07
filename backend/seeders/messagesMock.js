import Chance from "chance"
import Messages from "../models/message.js"
import {connect} from "../database.js"
import dotenv from "dotenv"

dotenv.config()
connect()

const chance=new Chance
const arrayOfMessages=[]
const allMessages=await Messages.find({})

if(allMessages && allMessages.length==0){
    for (let i=0;i<101;i++){
        arrayOfMessages.push({
            from:chance.name(),
            to:chance.name(),
            at:chance.date(),
            sub:chance.sentence(),
            content:chance.paragraph()
        })
    }
}

const listOfMessage=await Messages.create(arrayOfMessages);
console.log(listOfMessage);


