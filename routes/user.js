const express = require('express')
const router = express.Router()

const { 
    connexion,
    inscription
} = require('../controllers/userControllers')

router.post('/connexion', connexion)

router.post('/inscription', inscription)

module.exports = router