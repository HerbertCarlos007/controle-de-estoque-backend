import CartProductsController from "../controllers/CartProductsController"

const cartProductsRouter = require('express').Router()

cartProductsRouter.post('/cartProducts', CartProductsController.addToCart)
cartProductsRouter.get('/cartProducts', CartProductsController.productsOnCart)

export default cartProductsRouter