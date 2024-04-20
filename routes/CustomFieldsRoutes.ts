import CustomFieldsController from "../controllers/CustomFieldsController"
import multer = require('multer')
import multerConfig from '../config/multer'
const upload = multer(multerConfig)

const cartProductsRouter = require('express').Router()

cartProductsRouter.post('/customFields', CustomFieldsController.create)
cartProductsRouter.get('/customFields/:store_id', CustomFieldsController.findCustomFields)


export default cartProductsRouter