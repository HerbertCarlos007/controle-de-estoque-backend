import CartProductsController from "../controllers/CartProductsController"

const cartProductsRouter = require('express').Router()

cartProductsRouter.post('/cartProducts', CartProductsController.addToCart)
cartProductsRouter.get('/cartProducts/:userId/:store_id', CartProductsController.productsOnCart)
cartProductsRouter.delete('/cartProducts/:id', CartProductsController.delete)
cartProductsRouter.patch('/cartProducts/increment/:userId/:productId', CartProductsController.incrementProduct)

export default cartProductsRouter