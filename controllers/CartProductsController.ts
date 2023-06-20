import { Request, Response } from "express";
import { CartProducts } from "../models/CartProducts";
import { Products } from '../models/Products'
import { getLastProfit } from "../utils/getLastProfit";


interface IProduct {
    id: number,
    name: string,
    imageUrl: string,
    purchasePrice: string
    quantity?: number
}
interface IProductCart {
    Product?: IProduct,
    quantity: number
}

class CartProductsController {

    async addToCart(req: Request, res: Response) {
        const { productId, userId } = req.body

        const productCartAlreadyCreated = await CartProducts.findOne({
            where: {
                productId,
                userId: 1,

            }
        })
        if (productCartAlreadyCreated) {

            await CartProducts.update({
                quantity: Number(productCartAlreadyCreated?.quantity) + 1
            }, {
                where: {
                    productId,
                    userId: 1
                }
            })
            return res.status(201).json({ result: 'ok' })

        }
        const cart = await CartProducts.create({
            productId,
            userId: 1,
            quantity: 1
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
                quantity: productCart.quantity,
                imageUrl: productCart.Product?.imageUrl,
                purchasePrice: productCart.Product?.purchasePrice,
                saleValue: Number(productCart.Product?.purchasePrice) + (Number(productCart.Product?.purchasePrice) * Number(currentProductProfit?.percentage))
            }
        })

        return products.length > 0 ? res.status(200).json(productCartWithSaleValue) :
            res.status(204).send()
    }

    async incrementProduct(req: Request, res: Response) {
        await CartProducts.update({ quantity: req.body.quantity }, {
            where: {
                productId: req.params.productId,
                userId: req.params.userId
            }
        });

        return res.status(200).json({ result: 'ok' })

    }

    async delete(req: Request, res: Response) {
        const { id } = req.params
        await CartProducts.destroy({
            where: {
                productId: id
            }
        })
        return res.status(204).send()
    }
}

export default new CartProductsController()
