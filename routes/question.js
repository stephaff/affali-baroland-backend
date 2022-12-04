const express = require('express')
const router = express.Router()

const { getAllQuestions, addQuestion } = require('../controllers/questionControllers')

router.get('/', getAllQuestions)

router.post('/', addQuestion)

module.exports = router