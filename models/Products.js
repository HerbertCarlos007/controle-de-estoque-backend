const mongoose = require('mongoose')

const Products = mongoose.model('Products', {
    name: String,
    description: String,
    brand: String,
    purchasePrice: Number,
    saleValue: Number,
})

module.exports = Products