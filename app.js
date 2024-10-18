// imports
require('dotenv').config()
const express = require ('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

// open route
app.get('/', (req, res)=> {
    res.status(200).json ({ msg: 'Bem-vindo a nossa API!'})
})

const bdUser = process.env.BD_USER
const bdPassword = process.env.BD_PASS

mongoose
    .connect(
        `mongodb+srv://${bdUser}:${bdPassword}@back-site.vjsnh.mongodb.net/?retryWrites=true&w=majority&appName=back-site`,
    )
    .then(()=>{
        app.listen(3000)
        console.log('Conectou ao banco de dados!')
    })

.catch((err) => console.log('Erro ao conectar ao banco de dados:', err))
