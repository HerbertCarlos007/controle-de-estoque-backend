import {Request, Response} from 'express'
import { Users } from '../models/Users'


class UserController {
    async store(req: Request, res: Response) {
        const {name, email, password} = req.body
        const user = await Users.create({
            name,
            email,
            password
        })
        return res.status(200).json(user)
    }
}

export default new UserController