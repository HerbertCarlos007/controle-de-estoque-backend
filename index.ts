const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, './.env')})
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const productsRoutes = require('./routes/productsRoutes')
const usersRoutes = require('./routes/userRoutes')
import {sequelize} from './database/db'
import {Request, Response} from 'express'


app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(cors())
app.use(express.json())
app.use('/products', productsRoutes)
app.use('/users', usersRoutes)

app.get('/', (req: Request,res: Response) => {
    res.json({message: 'Oi Express!'})
})



app.listen(process.env.PORT, async () => {
    await sequelize.sync({force: true})
    console.log(`Porta: ${process.env.PORT}`)
})