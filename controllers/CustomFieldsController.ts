import { Request, Response } from 'express'
import { CustomFields } from '../models/CustomFields'

class CustomFieldsController {
    async create(req: Request, res: Response) {
        const { name, colors, store_id, logo, background } = req.body

        const customFields = await CustomFields.create({
            name, colors, store_id, logo, background,
        })


        return res.status(201).json(customFields)
    }


    async findCustomFields(req: Request, res: Response) {
        const { store_id } = req.params

        const customFields = CustomFields.findAll({
            where: {
                store_id
            }
        })

        return res.status(200).json(customFields)
    }
}

export default new CustomFieldsController();