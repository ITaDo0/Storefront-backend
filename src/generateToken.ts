const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config({path:__dirname+'/./../.env'})

// Generate token
function generateAccessToken(username: string) {
	return jwt.sign(username, process.env.TOKEN_SECRET)
}

module.exports = { generateAccessToken }