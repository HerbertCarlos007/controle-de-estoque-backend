import ProductsController from '../controllers/ProductsController'

const productsRouter = require('express').Router()

productsRouter.post('/products', ProductsController.create)

productsRouter.get('/products', ProductsController.findAll)

productsRouter.get('/products/:id', ProductsController.findOne)

productsRouter.put('/products/:id', ProductsController.update)

productsRouter.delete('/products/:id', ProductsController.delete)

export default productsRouter 
