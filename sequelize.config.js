require('dotenv').config()

module.exports = {
    database: process.env.DATABASE_NAME,
    dialect: 'mysql',
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    host: process.env.DATABASE_HOST,
}