import Client from '../db'

export type product = {
	id: number,
	name: string,
	price: number
}

export class storefront {

	// Show all products
	async indexProducts(): Promise<product[]> {
		try {
			const conn = await Client.connect()
			const sql = 'SELECT * FROM products'
			const result = await conn.query(sql)
			conn.release()
			return result.rows
		} catch(err) {
			throw new Error(`indexProducts: ${err}`)
		}
	}

	// Show one product
	async showProduct(id: string): Promise<product[]> {
		try {
			const conn = await Client.connect()
			const sql = `SELECT * FROM products WHERE id=${id}`
			const result = await conn.query(sql)
			conn.release()
			return result.rows
		} catch (err) {
			throw new Error(`Show Product: ${err}`)
		}
	}
	
	// Create new product
	async createProduct(name: string, price: string): Promise<product[]> {
		try {
			const conn = await Client.connect()
			const sql = `INSERT INTO products(name, price) VALUES ('${name}', '${price}')`
			const result = await conn.query(sql)
			conn.release()
			return result.rows
		} catch (err) {
			throw new Error(`CreateProducts: ${err}`)
		}
	}

	// Create test project with id 1 
	async createTestProduct(): Promise<product[]> {
		try {
			const conn = await Client.connect()
			const sql = "INSERT INTO products(id, name, price) VALUES (1, 'test', 1.50)"
			const result = await conn.query(sql)
			conn.release()
			return result.rows
		} catch(err) {
			throw new Error(`Insert into products failes: ${err}`)
		}
	}
}