import Client from '../db'
import bcrypt from 'bcrypt'

export type user = {
	id: number,
	firstname: string,
	lastname: string,
	password: string
}

export class storefront {
	
	// Delete a user that matches this id
	async Delete(id: number): Promise<user> {
		try {
			const conn = await Client.connect()
			const sql = `DELETE FROM users WHERE id=${id}`
			const result = await conn.query(sql);
			conn.release()
			return result.rows[0]
		} catch (err) {
			throw new Error(`Delete: ${err}`)
		}
	}
	
	// Create new user
	async create(firstname: string, lastname:string, password: string): Promise<user[]> {
		// Create a new user
    	const salt_rounds = 10
    	const hash = bcrypt.hashSync(password, salt_rounds)
		try {
			const conn = await Client.connect()
			const sql = `INSERT INTO users(firstname, lastname, password) VALUES ('${firstname}', '${lastname}', '${hash}') RETURNING *`
			const result = await conn.query(sql)
			conn.release()
			return result.rows
		} catch (err) {
			throw new Error(`Create Error: ${err}`)
		}

	}

	// Return all from users table
	async index(): Promise<user[]> {
		try {
			const conn = await Client.connect();
			const sql = 'SELECT * FROM users'
			const result = await conn.query(sql)
			conn.release()
			return result.rows
		} catch (err) {
			throw new Error(`Index: ${err}`)
		}
	}

	// Return one user from the database that matches this id
	async show(id: string): Promise<user[]> {
		try {
			const conn = await Client.connect()
			const sql = `SELECT * FROM users WHERE id=${id}`
			const result = await conn.query(sql)
			conn.release()
			return result.rows
		} catch (err) {
			throw new Error(`Error: ${err}`)
		}
	}

	// Crete test user 
	async create_test_user(): Promise<user[]> {
		try {
			const conn = await Client.connect()
			const sql = "INSERT INTO users(id, firstname, lastname, password) VALUES (1, 'test', 'test', 'password') RETURNING *"
			const result = await conn.query(sql)
			conn.release()
			return result.rows
		} catch (err) {
			throw new Error(`Create test user: ${err}`)
		}
	}
}