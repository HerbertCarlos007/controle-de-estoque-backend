import { Router } from "express";
import productsRouter from '../routes/productsRoutes'
import userRouter from '../routes/userRoutes'

const router = require('express').Router()

router.use(userRouter)
router.use(productsRouter)

export default router