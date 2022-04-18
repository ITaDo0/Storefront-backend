import express, { Request, Response } from 'express'
import { storefront } from '../models/productModel'

const app: express.Application = express()
const store = new storefront()

module.exports = function (app: express.Application): void {
    // Show products
    app.get('/', async function (req: Request, res: Response) {
        const result = await store.indexProducts()
        res.json(result)
    })
    // Show one product
    app.get('/products/:product_id', async function (req: Request, res: Response) {
        const product_id = req.params.product_id
        const result = await store.showProduct(product_id)
        res.json(result)
    })

    // Create new product
    app.post('/create/product', async function (req: Request, res: Response) {
        const name = req.body.name
        const price = req.body.price
        const result = await store.createProduct(name as string, price as string)
        res.json(result)
    })
}

