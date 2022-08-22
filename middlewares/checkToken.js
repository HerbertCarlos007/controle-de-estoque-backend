const jwt = require('jsonwebtoken')

function checkToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    if (!token) {
        res.status(401).json({ message: 'Acesso negado!' })
    }

    try {
        const secret = process.env.SECRET
        const id = jwt.verify(token, secret)
        req.id = id
        next()
    } catch (error) {
        console.error(error.message)
        res.status(400).json({ message: error.message })
    }
}

module.exports = checkToken