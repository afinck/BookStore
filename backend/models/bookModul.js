const mongoose = require('mongoose')
const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    author: {
      type: String,
      trim: true
    },
    pages: Number,
    language: {
      type: String,
      trim: true
    },
    genre: {
      type: String,
      trim: true
    },
    publisher: {
      type: String,
      trim: true
    },
    ISBN: {
      type: String,
      unique: true,
      trim: true,
      allowNull: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Books', bookSchema)
