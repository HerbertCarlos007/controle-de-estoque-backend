import express from 'express'
import ProductsController from '../controllers/ProductsController'
const router = require('express').Router()

router.post('/products', ProductsController.create)

router.get('/products', ProductsController.findAll)

router.get('/products/:id', ProductsController.findOne)

router.put('/products/:id', ProductsController.update)

router.delete('/products/:id', ProductsController.delete)

export { router }
