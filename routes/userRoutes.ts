import UserController from '../controllers/UsersController'

const userRouter = require('express').Router()

userRouter.get('/:id')
userRouter.post('/register', UserController.store)
userRouter.post('/login')

export default userRouter