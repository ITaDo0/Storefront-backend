import Client from '../db'
import { order_product } from './order_productModel'

export type order = {
	id: number,
	product_id: number,
	user_id: number,
	quantity: number,
	status_of_order: string
}

const order_product_Model = new order_product()

export class storefront {

	// Create order
	async order(product_id: string, user_id: string, quantity: string): Promise<order[]> {
		try {
			const conn = await Client.connect()
			const sql = `INSERT INTO orders(product_id, user_id, quantity, status_of_order) VALUES ('${product_id}', ${user_id}, '${quantity}', 'active') RETURNING *`
			const result = await conn.query(sql)
			const create_order_product = await order_product_Model.create(quantity, result.rows[0].id, product_id)
			conn.release()
			return result.rows
		} catch (err) {
			throw new Error(`Order: ${err}`)
		}
	}

	// Show all orders for one users using his id
	async showOrders(id: string): Promise<order[]> {
		try {
			const conn = await Client.connect()
			const sql = `SELECT * FROM orders WHERE user_id = ${id}`
			const result = await conn.query(sql)
			conn.release()
			return result.rows
		} catch (err) {
			throw new Error(`showOrders: ${err}`)
		}
	}
}