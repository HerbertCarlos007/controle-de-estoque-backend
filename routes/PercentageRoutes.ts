import PercentageController from "../controllers/PercentageController";

const percentageRouter = require('express').Router()

percentageRouter.post('/productPercentage', PercentageController.store)

export default percentageRouter