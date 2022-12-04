require('dotenv').config({ path : './config/.env'})

const userRoutes = require('./routes/user')
const questionRoutes = require('./routes/question')

const mongoose = require('mongoose')

const express = require('express')
const app = express()

app.use(express.json())

//routes
app.use('/api/user', userRoutes)

app.use('/api/questions', questionRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => 
    app.listen(process.env.PORT, () =>
        console.log(`Serveur en marche sur le port ${ process.env.PORT }`)
    ))
    .catch(error => 
        console.log(error)    
    )
