import Client from '../db'

export type orderProduct = {
	id: number,
	quantity: number,
	order_id: number,
	product_id: number
}

export class order_product {

	// Show all data in order_product table
	async index(): Promise<orderProduct[]> {
		try {
			const conn = await Client.connect()
			const sql = 'SELECT * FROM order_products'
			const result = await conn.query(sql)
			conn.release()
			return result.rows
		} catch (err) {
			throw new Error(`Index: ${err}`)
		}
	}

	// Create new order_product
	async create(quantity: string, order_id: string, product_id: string): Promise<orderProduct[]> {
		try {
			const conn = await Client.connect()
			const sql = `INSERT INTO order_products(quantity, order_id, product_id) VALUES (${quantity}, ${order_id}, ${product_id})`
			const result = await conn.query(sql)
			conn.release()
			return result.rows
		} catch(err) {
			throw new Error(`order_product: ${err}`)
		}
	}
}