import { Request, Response } from "express";
import { Products } from "../models/Products";
import { ProductsProfits } from '../models/ProductProfit'
import UploadImageService from "../services/UploadImageService";

class ProductsController {

    async findAll(req: Request, res: Response) {
        const currentProductProfit = await getLastProfit()
        const products = await Products.findAll()
        const productsWithSaleValue = products.map(product => ({
            id: product.id,
            name: product.name,
            description: product.description,
            imageUrl: product.imageUrl,
            amount: product.amount,
            brand: product.brand,
            purchasePrice: product.purchasePrice,
            saleValue: Number(product.purchasePrice) + (Number(product.purchasePrice) * Number(currentProductProfit?.percentage))
        }))
        return products.length > 0 ? res.status(200).json({ products: productsWithSaleValue, currentProductProfit }) :
            res.status(204).send()
    }

    async findOne(req: Request, res: Response) {
        const { id } = req.params
        const currentProductProfit = await getLastProfit()
        const product = await Products.findOne({
            where: {
                id: id
            }
        })
        const profitValue = Number(product?.purchasePrice) * Number(currentProductProfit?.percentage)
        const saleValue = Number(product?.purchasePrice) + profitValue
        const saleValueDigitsCount = saleValue.toString().length
        return product ? res.status(200).json({ ...product, saleValue: saleValue.toFixed(saleValueDigitsCount - 1) }) : res.status(204).send()
    }

    async create(req: Request, res: Response) {
        const { file } = req
        const { productData } = req.body
        const parsedProductData = JSON.parse(productData)
        const uploadImage = new UploadImageService()

        if (file) {
            await uploadImage.execute(file)
        }

        const products = await Products.create({
            imageUrl: file ? `https://teste-startpn.s3.amazonaws.com/${file.filename}` : null,
            ...parsedProductData
        })
        return res.status(201).json(products)
    }
    
    async update(req: Request, res: Response) {
        const { id } = req.params
        await Products.update(req.body, {
            where: {
                id: id
            }
        })
        return res.status(204).send()
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params
        await Products.destroy({
            where: {
                id: id
            }
        })
        return res.status(204).send()
    }

}


async function getLastProfit() {
    const currentProductProfitId = await ProductsProfits.max('id')
    const currentProductProfit = await ProductsProfits.findOne({
        where: {
            id: String(currentProductProfitId)
        }
    })

    return currentProductProfit
}

export default new ProductsController();

