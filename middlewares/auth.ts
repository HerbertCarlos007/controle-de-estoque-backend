
import { verify } from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'

type TokenPayload = {
    id: string,
    iat: number,
    exp: number
}

export const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ error: 'Acesso Negado!' })
    }

    const [, token] = authorization.split(" ")

    try {
        const decoded = verify(String(token), String(process.env.SECRET))
        const { id } = decoded as TokenPayload

        req.id = String(id)
        next()
    } catch (error) {
        return res.status(401).json({ error: 'Token invalido' })

    }
}