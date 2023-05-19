const mongoose = require('mongoose')
const mongo = require('./db.config')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongo.url)

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
