const bcrypt = require('bcrypt')
const validator = require('validator')

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})

userSchema.statics.inscription = async function(email, password){

    if(!email || !password){
        throw Error('veuillez remplir tous les champs')
    }

    if(!validator.isEmail(email)){
        throw Error('email invalide')
    }

    if(!validator.isStrongPassword(password)){
        throw Error('mot de passe invalide')
    }

    // const salt = await bcrypt.genSalt(10)
    // const hash = await bcrypt.hash(password, salt)

    // const user = await this.create({ email, password : hash })

    const user = await this.create({ email, password })

    return user

}

userSchema.statics.connexion = async function(email, password){
    
    if(!email || !password){
        throw Error('veuillez remplir tous les champs')
    }

    const user = await this.findOne({ email })

    if(!user){
        throw Error('email incorrect')
    }

    if(password !== user.password){
        throw Error('mot de passe incorrect')
    }

    return user

}

module.exports = mongoose.model('User', userSchema)