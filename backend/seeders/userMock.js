import Chance from "chance"
import User from "../models/user.js"
import {connect} from "../database.js"
import dotenv from "dotenv"

dotenv.config()
connect()

const chance=new Chance
const arrayOfUser=[]
const allUsers = await User.find({})

if(allUsers && allUsers.length == 0) {
    for (let i=0;i<81;i++){
        let fname=chance.first()
        let lname=chance.last({nationality:"de"})
        arrayOfUser.push({
            firstname:fname,
            lastname:lname,
            age:chance.age(),
            email:`${fname}.${lname}@provider.de`
        })
    }
}

const listOfUsers=await User.create(arrayOfUser);
console.log(listOfUsers);

