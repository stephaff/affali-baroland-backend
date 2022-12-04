const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn : '30d' })
}

const connexion = async (req, res) => {

    const { email, password } = req.body

    try {

        const user = await User.connexion(email, password)

        const token = createToken(user._id)
        return res.status(200).json({ email, token })
        
    } catch (error) {
        return res.status(400).json({ error : error.message })
    }
    
}

const inscription = async (req, res) => {

    const { email, password } = req.body

    try {

        const user = await User.inscription(email, password)
        const token = createToken(user._id)

        return res.status(200).json({ email, token })
    } catch (error) {
        return res.status(400).json({ error : error.message })
    }

}

module.exports = { 
    connexion,
    inscription
}