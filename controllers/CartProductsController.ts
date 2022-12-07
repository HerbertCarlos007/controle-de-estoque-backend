import { Request, Response } from "express";
import { CartProducts } from "../models/CartProducts";
import { Products } from '../models/Products'

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

        CartProducts.hasMany(Products, {foreignKey: 'id'})
        Products.belongsTo(CartProducts, {foreignKey: 'id'})

        const products = await CartProducts.findAll({
            include: [{
                model: Products,
                required: true
            }]
        })

        return products.length > 0 ? res.status(200).json(products) :
            res.status(204).send()
    }
}

export default new CartProductsController()
