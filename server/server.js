require('dotenv').config()

const Sequelize = require('sequelize')
const path = require('path')

const {CONNECTION_STRING} =process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

const express = require('express')
const cors = require('cors')
const {seed} = require('./seed.js')
const {SERVER_PORT} = process.env
const {
    login,
    register,
    
} = require('./auth')


const app = express()

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/landing.html'))
})

app.get(`/public`, (req, res) => {res.sendFile(path.join(__dirname, ('../public/main.html')))})
app.get(`/logout`, (req, res) => {res.sendFile(path.join(__dirname, ('../public/landing.html')))})
app.use(express.json())
app.use(cors())
app.post(`/api/login`, login)
app.post(`/api/register`, register)
app.post('/seed', seed)






app.listen(SERVER_PORT, () => console.log(`jivin on ${SERVER_PORT}`))