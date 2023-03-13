const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")
const blogRoute = require('./routes/blog')

require("dotenv").config()

const app = express()
mongoose.set('strictQuery', false);
//connect cloud database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: false
}).then(() => console.log("Database Connected")).catch((err) => console.log(err))

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//route
app.use('/api',blogRoute)


const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Start server in port ${port}`))