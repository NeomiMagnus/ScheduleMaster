require("dotenv").config()


const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")


// const corsOptions = require("./config/corsOptions");
const conectDataBase = require("./config/dbConn")


conectDataBase()
const PORT = process.env.PORT || 7000
const app = express()


// app.use(cors(corsOptions))
app.use(express.json())
// app.use("/api/auth",require("./src/routes/authRoutes"))
app.use("/api/tasks",require(`./src/routers/taskRoutes`))

mongoose.connection.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on ${PORT} port.`)
    })
})
mongoose.connection.on("error", err => {
    console.log(`error on ${err}`)
})
