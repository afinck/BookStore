const asyncHandler = require('express-async-handler')

const Books = require('../models/bookModul')

// @desc    Get Books
// @route   GET /api/books
// @access  Private
const getBooks = asyncHandler(async (req, res) => {
  const books = await Books.find()
  res.status(200).json(books)
})

// @desc    Creating Books
// @route   POST /api/books
// @access  Private
const createBooks = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400)
    throw new Error('Please add a title')
  }
  const books = await Books.create({
    title: req.body.title,
    author: req.body.author,
    pages: req.body.pages,
    genre: req.body.genre,
    language: req.body.language,
    publisher: req.body.publisher,
    ISBN: req.body.isbn
  })

  res.status(200).json({ message: `${req.body.title} created` })
})

// @desc    Update Books
// @route   PUT /api/books/:id
// @access  Private
const updateBooks = asyncHandler(async (req, res) => {
  const books = await Books.findById(req.params.id)

  if (!books) {
    res.status(404)
    throw new Error('ID not found')
  }

  const updatedBook = await Books.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.status(200).json(updatedBook)
})

// @desc    Delete Books
// @route   GET /api/books/:id
// @access  Private
const deleteBooks = asyncHandler(async (req, res) => {
  const books = await Books.findById(req.params.id)

  if (!books) {
    res.status(404)
    throw new Error('ID not found')
  }
  await Books.findByIdAndRemove(req.params.id)
  res.status(200).json({ action: `${books.title} deleted` })
})

// @desc    Search Books
// @route   GET /api/books/search/:id
// @access  Private
const searchBooks = asyncHandler(async (req, res) => {
  if (req.query) {
    //console.log(req.query)
    for (const [key, value] of Object.entries(req.query)) {
      const Search = {
        [key]: {
          $regex: value,
          $options: 'i'
        }
      }
      const books = await Books.find(Search)

      if (books.length === 0) {
        res.status(404)
        throw new Error('not found')
      }
      console.log(books)

      res.status(200).json(books)
    }
  }
})

module.exports = {
  getBooks,
  createBooks,
  updateBooks,
  deleteBooks,
  searchBooks
}
