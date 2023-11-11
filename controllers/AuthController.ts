import { compare} from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import {Request, Response} from 'express'
import { Users } from '../models/Users'


class AuthController {

    async authenticate(req: Request, res: Response) {
        const {email, password} = req.body
        const user = await Users.findOne({
            where: {
                email
            }
        })

        if(!user) {
            return res.json({error: 'Usuário não encontrado'})
        }
        const isValuePassowrd = await compare(password, String(user.password))

        if(!isValuePassowrd) {
            return res.status(401).json({ error: 'Senha inválida' });
        }
        
        const token = sign({id: user.id}, String(process.env.SECRET), {expiresIn: '1d'})
        const { id, store_id, levelPermission } = user
        return res.status(200).json({ user: { id, email, store_id, levelPermission }, token })
    }
}

export default new AuthController