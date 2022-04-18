import express, { Request, Response } from 'express'
import { storefront } from '../models/orderModel'
import { order_product } from '../models/order_productModel'
import dotenv from 'dotenv'
const jwt = require('jsonwebtoken')

dotenv.config({path:__dirname+'/./../../.env'})
const app: express.Application = express()
const store = new storefront()
const orderProduct = new order_product()


module.exports = function (app: express.Application): void {
	// Show orders for that user using his id
	app.post('/show/orders', async function (req: Request, res: Response) {
	    try {
	    	const decoded = jwt.verify(req.body.token, process.env.TOKEN_SECRET)
	    	const result = await store.showOrders(decoded.id)
	    	res.json(result)
	    } catch (err) {
	    	res.status(401)
	    	res.json(`Invalid token ${err}`)
	    }
	})

	// Make order
	app.post('/products/:product_id/order', async function (req: Request, res: Response) {
		try{
			const decoded = jwt.verify(req.body.token, process.env.TOKEN_SECRET)
	    	const result = await store.order(req.params.product_id as string, decoded.id as string, req.body.quantity as string)
	    	res.send('Order Placed Successfully')
	    } catch (err) {
	    	res.status(401)
	    	res.json(`Invalid token ${err}`)
	    }
	})

	// Show all data in order_products table
	app.get('/order/products', async function (req: Request, res: Response) {
		const result = await orderProduct.index()
		res.json(result) 
	})
}