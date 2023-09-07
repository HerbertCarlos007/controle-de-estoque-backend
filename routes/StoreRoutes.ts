import StoreController from '../controllers/StoreController'

const storeRouter = require('express').Router()

storeRouter.post('/store', StoreController.create)
storeRouter.get('/store/:subdomain', StoreController.getBySubdomain)

export default storeRouter