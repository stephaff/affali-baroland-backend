const Question = require('../models/questionModel')

const getAllQuestions = async (req, res) => {

    const questions = await Question.find({ }).sort({ createdAt : -1 })

    res.status(200).json(questions)
}

const addQuestion = async (req, res) => {

    const { title, contenu, category, createdAt } = req.body

    try {
        const question = await Question.create({ title, contenu, category, createdAt })
        res.status(200).json(questions)
    } catch (error) {
        res.status(400).json({ error : error.message })
    }

}

module.exports = { 
    getAllQuestions,
    addQuestion
}