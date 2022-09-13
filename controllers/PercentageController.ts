import { Request, Response } from "express";
import { ProductsProfits } from "../models/ProductProfit";

class PercentageController {
    async store(req: Request, res: Response) {
        const { percentage } = req.body

        const productsPercentage = await ProductsProfits.create({
            percentage
        })

        return res.status(201).json(productsPercentage)
    }
}

export default new PercentageController