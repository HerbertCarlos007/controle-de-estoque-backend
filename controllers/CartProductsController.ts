import { Request, Response } from "express";
import { CartProducts } from "../models/CartProducts";

class CartProductsController {

    async addToCart(req: Request, res: Response) {
        const { productId, userId } = req.body

        const cart = await CartProducts.create({
            productId,
            userId
        })

        return res.status(201).json(cart)
    }

    async productsOnCart(req: Request, res: Response) {
        const products = await CartProducts.findAll()

        return products.length > 0 ? res.status(200).json(products) :
            res.status(204).send()
    }
}
