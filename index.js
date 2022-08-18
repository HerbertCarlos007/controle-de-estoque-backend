const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const productsRoutes = require('./routes/productsRoutes')

const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, './.env')})

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(cors())
app.use(express.json())
app.use('/products', productsRoutes)

app.get('/', (req,res) => {
    res.json({message: 'Oi Express!'})
})

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('Conectado ao MongoDB')

}).catch((err) => console.log(err))

app.listen(process.env.PORT, () => {
    console.log(`Porta: ${process.env.PORT}`)
})