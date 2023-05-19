const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const cors = require('cors')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.NODE_DOCKER_PORT || 8000

connectDB()

const app = express()

// setting CORS headers
// const corsOptions = {
//   origin: process.env.CLIENT_ORIGIN || 'http://localhost:5555'
// }
corsOptions = { origin: true }
app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/books', require('./routes/bookRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
