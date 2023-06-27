import ProductsController from '../controllers/ProductsController'
import { AuthMiddleware } from '../middlewares/auth'
import multer = require('multer')
import multerConfig from '../config/multer'

const productsRouter = require('express').Router()
const upload = multer(multerConfig)

productsRouter.post('/products', AuthMiddleware, upload.single('file'), ProductsController.create)

productsRouter.get('/products', AuthMiddleware, ProductsController.findAll)

productsRouter.get('/products/:id', AuthMiddleware, ProductsController.findOne)

productsRouter.put('/products/:id', AuthMiddleware, ProductsController.update)

productsRouter.delete('/products/:id', AuthMiddleware, ProductsController.delete)

export default productsRouter 
