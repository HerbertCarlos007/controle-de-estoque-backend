const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, './.env')})
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const productsRoutes = require('./routes/productsRoutes')
const usersRoutes = require('./routes/userRoutes')
import {sequelize} from './database/db'
import {Request, Response} from 'express'
import router from './routes'


const app = express()

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(cors())
app.use(express.json())
app.use(router)

app.get('/', (req: Request,res: Response) => {
    res.json({message: 'Oi Express!'})
})



app.listen(process.env.PORT, async () => {
    await sequelize.sync({force: true})
    console.log(`Porta: ${process.env.PORT}`)
})