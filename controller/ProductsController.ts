import { Request, Response } from "express";

class ProductsController {
    async findAll(req:Request, res:Response) {}

    async findOne(req:Request, res:Response) {}

    async create(req:Request, res:Response) {
        const {name, description, amount, brand, purchasePrice, saleValue} = req.body
    }
    
    async update(req:Request, res:Response) {}

    async delete(req:Request, res:Response) {}
}

export default new ProductsController();