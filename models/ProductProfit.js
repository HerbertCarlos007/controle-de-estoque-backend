const mongoose = require('mongoose')
const productSchema = new mongoose.Schema(
    {

    }
)
const ProductsProfit = mongoose.model('ProductsProfit', {
    percentage: String
   
},{
    
})

module.exports = ProductsProfit