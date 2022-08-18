const router = require('express').Router()
const Products = require('../models/Products')


router.post('/', async (req,res) => {
    const {name, description, amount, brand, purchasePrice, saleValue} = req.body

    if(!name) {
        res.status(422).json({error: 'O nome é obrigátorio'})
        return
    }

    const product = {
        name,
        description,
        amount,
        brand,
        purchasePrice,
        saleValue
    }

    try {
        await Products.create(product)
        res.status(201).json({message: 'Producto cadastrado com sucesso'})
    } catch (error) {
        res.status(500).json({error: error})
    }
})

module.exports = router