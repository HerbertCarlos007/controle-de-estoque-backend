import ProductsController from '../controllers/ProductsController'
import multer = require('multer')
import multerConfig from '../config/multer'

const productsRouter = require('express').Router()
const upload = multer(multerConfig)

productsRouter.post('/products', upload.single('file'),ProductsController.create)

productsRouter.get('/products', ProductsController.findAll)

productsRouter.get('/products/:id', ProductsController.findOne)

productsRouter.put('/products/:id', ProductsController.update)

productsRouter.delete('/products/:id', ProductsController.delete)

export default productsRouter 
