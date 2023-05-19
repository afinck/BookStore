const express = require('express')
const router = express.Router()
const {
  getBooks,
  createBooks,
  updateBooks,
  deleteBooks,
  searchBooks
} = require('../controllers/bookControllers')

router.get('/', getBooks)

router.post('/', createBooks)

router.put('/:id', updateBooks)

router.delete('/:id', deleteBooks)

router.get('/:id', searchBooks)

module.exports = router
