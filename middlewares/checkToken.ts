import { verify } from 'jsonwebtoken'
import {NextFunction, Request, Response} from 'express'

function checkToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    if (!token) {
        res.status(401).json({ message: 'Acesso negado!' })
    }

    try {
        const secret = process.env.SECRET
        const id = verify(String(token), String(secret))
        req.id = String(id)
        next()
    } catch (error: any) {
        console.error(error.message)
        res.status(400).json({ message: error.message })
    }
}

export default checkToken