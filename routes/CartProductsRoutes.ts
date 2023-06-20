import CartProductsController from "../controllers/CartProductsController"

const cartProductsRouter = require('express').Router()

cartProductsRouter.post('/cartProducts', CartProductsController.addToCart)
cartProductsRouter.get('/cartProducts', CartProductsController.productsOnCart)
cartProductsRouter.delete('/cartProducts/:id', CartProductsController.delete)
cartProductsRouter.patch('/cartProducts/increment/:userId/:productId', CartProductsController.incrementProduct)

export default cartProductsRouter