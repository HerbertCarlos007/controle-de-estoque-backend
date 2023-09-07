import { Sequelize } from 'sequelize-typescript'
import { ProductsProfits } from '../models/ProductProfit'
import {Products} from '../models/Products'
import { CartProducts } from '../models/CartProducts'
import { Users } from '../models/Users'
import {Store} from '../models/Store'

const sequelize = new Sequelize({
  database: process.env.DATABASE_NAME,
  dialect: 'mysql',
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  host: process.env.DATABASE_HOST,
})
sequelize.addModels([Products, Users, ProductsProfits, CartProducts, Store])

export {sequelize}