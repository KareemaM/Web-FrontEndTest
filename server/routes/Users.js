const express = require('express')
const users  = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { validateSignupData } = require("../util/validator")

const User = require('../models/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
    
    const { valid, errors} = validateSignupData(req.body);
    if(!valid) return res.status(400).json(errors);
    const userData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        month: req.body.month,
        day: req.body.day,
        year: req.body.year,
        phone: req.body.year,
        country: req.body.country,
        zip: req.body.zip
    }

    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(!user){
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash
                User.create(userData)
                .then(user => {
                    return res.json({status: user.email + 'registered'})
                })
                .catch(err => 
                    res.send('error: ' + err))
            })
        }
        else{
            let errors = {}
            errors.email = "this email is already taken"
            return res.status(400).json(errors);
        }
    })
    .catch(err => {
        res.send('error = ' + err)
    })
})

users.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(user){
            let token;
            if(bcrypt.compareSync(req.body.password, user.password)){
                token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn:1440
                })
                res.send(token)
            }
            else{
                res.send(res.status(400).json({error: 'Incorrect Password'}))
            }
            
        }
        else{
            res.status(400).json({error: 'User does not exist'})
        }
    })
    .catch(err => {
        res.status(400).json({error: err})
    })
})

module.exports = users