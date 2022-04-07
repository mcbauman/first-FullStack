import express from "express"
import User from "../models/user.js"

const router = express.Router()

router
  .get("/", async (req, res) => {
    const allusr=await User.find({})
    res.send(allusr)
  })
  .post("/", (req, res) => {
    const usr=new User(req.body)
    usr.save()
    res.send(usr)
  })
  .delete("/", (req, res) => {
    User.deleteMany({})
      .then(()=>console.log("All Users deletet"))
    res.send("cleared Users")
  })
  .delete("/:id", (req, res) => {
    const idTd=(req.params.id)
    User.deleteOne({_id:idTd})
      .then(()=>console.log("User deletet"))
    res.send(idTd)
  })
  

export default router
