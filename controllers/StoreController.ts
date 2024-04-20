import { Request, Response } from "express";
import { Store } from '../models/Store'

class StoreController {
    async create(req: Request, res: Response) {
        const { subdomain, banner, logo, background, colors } = req.body

        const storeExists = await Store.findOne({
            where: {
                subdomain
            }
        })

        if (storeExists) {
            return res.json({ error: 'Loja já existe' })
        }

        const store = await Store.create({
            subdomain, banner
        })

        return res.status(200).json(store)
    }

    async getBySubdomain(req: Request, res: Response) {
        const store = await Store.findOne({
            where: {
                subdomain: req.params.subdomain
            }
        })
        return res.status(200).json(store)
    }
}

export default new StoreController();