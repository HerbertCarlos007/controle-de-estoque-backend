import { Router } from "express";
import productsRouter from '../routes/productsRoutes'
import userRouter from '../routes/userRoutes'
import percentageRouter from "./PercentageRoutes";

const router = require('express').Router()

router.use(userRouter)
router.use(productsRouter)
router.use(percentageRouter)

export default router