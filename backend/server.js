import express from "express"
import dotenv from "dotenv"
import requestlogger from "./middleware/requestlogger.js"
import userRouter from "./routes/userRouter.js"
import messageRouter from "./routes/messageRouter.js"
import * as database from "./database.js"
import cors from "cors"

// Initialize application
const app = express()
app.use(cors())
app.use(express.json())
app.use(requestlogger)
dotenv.config()
database.connect()

// Add endpoints
app.use("/users", userRouter)
app.use("/messages", messageRouter)
app.use((req, res) => res.status(404).send({ error: "Resource not found" }))

// Start listening
const { PORT } = process.env
app.listen(PORT, () => console.log(`Up: http://localhost:${PORT}`))
