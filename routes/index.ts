import { Router } from "express";
import productsRouter from '../routes/productsRoutes'
import userRouter from '../routes/userRoutes'
import percentageRouter from "./PercentageRoutes";
import cartProductsRouter from "./CartProductsRoutes";
import imageRoutes from "./ImageRoutes";

const router = require('express').Router()

router.use(userRouter)
router.use(imageRoutes)
router.use(productsRouter)
router.use(percentageRouter)
router.use(cartProductsRouter)

export default router