import express, { Request, Response } from 'express'
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app: express.Application = express()
const address: string = "0.0.0.0:80"

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

require('./handlers/productHandler')(app)
require('./handlers/orderHandler')(app)
require('./handlers/userHandler')(app)

app.listen(80, function () {
    console.log(`starting app on: ${address}`)
})
