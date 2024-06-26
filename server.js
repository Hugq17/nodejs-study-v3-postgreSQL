const express = require('express')
const studentRoutes = require('./src/student/routes')
const app = express()
const dotenv = require("dotenv");
dotenv.config()

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.use(express.json())

app.use('/api/v1/students', studentRoutes)

app.listen(process.env.PORT, () => console.log(`app listen on port ${process.env.PORT}`))
