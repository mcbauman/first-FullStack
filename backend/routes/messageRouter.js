import express from "express"
import Messages from "../models/message.js"

const router = express.Router()

router
  .get("/", async (req, res) => {
    const allmsg=await Messages.find()
    res.send(allmsg)
  })
  .post("/", (req, res) => {
    const msg=new Messages(req.body)
    msg.save()
    res.send(msg)
  })
  .delete("/",(req,res)=>{
    Messages.deleteMany({})
      .then(()=>console.log("All Messages Deletet"))
    res.send("cleared Message")
  })
  .delete("/:id", (req, res) => {
    const idTd=(req.params.id)
    Messages.deleteOne({_id:idTd})
      .then(()=>console.log("seccessfully deletet"))
    res.send(idTd)
  })
  

export default router
