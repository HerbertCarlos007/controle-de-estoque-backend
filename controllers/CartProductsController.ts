import { Request, Response } from "express";
import { CartProducts } from "../models/CartProducts";
import { Products } from '../models/Products'
import { getLastProfit } from "../utils/getLastProfit";
interface IProduct {
    id: number,
    name: string,
    imageUrl: string,
    purchasePrice: string
}
interface IProductCart {
    Product?: IProduct
}

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

        Products.hasMany(CartProducts)
        CartProducts.belongsTo(Products)
        const currentProductProfit = await getLastProfit()
        const products = (await CartProducts.findAll({
            include: [{
                model: Products,
                required: true
            }]
        })) as IProductCart[]

        const productCartWithSaleValue = products.map((productCart: IProductCart) => {
            return {
                id: productCart.Product?.id,
                name: productCart.Product?.name,
                imageUrl: productCart.Product?.imageUrl,
                purchasePrice: productCart.Product?.purchasePrice,
                saleValue: Number(productCart.Product?.purchasePrice) + (Number(productCart.Product?.purchasePrice) * Number(currentProductProfit?.percentage))
            }
        })

        return products.length > 0 ? res.status(200).json(productCartWithSaleValue) :
            res.status(204).send()
    }
}

export default new CartProductsController()
