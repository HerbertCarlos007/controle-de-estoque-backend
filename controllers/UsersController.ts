import { Request, Response } from 'express'
import { Users } from '../models/Users'
import nodemailer from 'nodemailer'
import { encryptPassword } from '../utils/encryptPassword'


class UserController {

    async findAllUser(req: Request, res: Response) {
        const users = await Users.findAll()
        return res.json({ users })
    }

    async store(req: Request, res: Response) {
        const { name, email, password, role, store_id } = req.body

        const userExists = await Users.findOne({
            where: {
                email
            }
        })

        if (userExists) {
            return res.json({ error: 'Usuário já existe' })
        }
        const hashPassword = await encryptPassword(password)
        const user = await Users.create({
            name,
            email,
            role,
            password: hashPassword,
            store_id
            
        })
        return res.status(200).json(user)
    }

    async recoverPassword(req: Request, res: Response) {
        const { email } = req.body

        try {
            const user = await Users.findOne({
                where: {
                    email
                }
            })

            if (!user) {
                return res.status(404).json({ error: 'Usuário não encontrado!' })
            }

            const transporter = nodemailer.createTransport({
                host: String(process.env.EMAIL_HOST),
                port: Number(process.env.EMAIL_PORT),
                auth: {
                  user: process.env.EMAIL_USER,
                  pass: process.env.EMAIL_PASSWORD
                }
              });

            transporter.sendMail({
                from: 'Administrador <1e5ca73e07-7109e4@inbox.mailtrap.io>',
                to: email,
                subject: 'E-mail para trocar senha!',
                html: `<p>Clique no link para alterar sua senha</p><br/><a href="http://localhost:3000/recoverPassword/${user.id}">Sistema</a>`,

            }).then(() => {
                res.status(200).json({ message: 'Email enviado com sucesso' })
            }).catch((error) => {
                console.log(error)
                res.status(500).json({ error: 'Erro ao enviar email de confirmação' })
            })

        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Erro ao atualizar a senha' })
        }
    }

    async forgotPassword(req: Request, res: Response) {
        const { id } = req.params
        const password = await encryptPassword(req.body.password)

        try {
            await Users.update({
                password
            }, {
                where: {
                    id
                }
            })

            return res.status(200).json({ message: 'Senha atualizada com sucesso!' })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Erro ao atualizar senha' })
        }
    }
}

export default new UserController