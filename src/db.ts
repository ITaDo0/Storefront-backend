import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config({path:__dirname+'/./../.env'})

const {
	POSTGRES_HOST,
	POSTGRES_DB,
	POSTGRES_DB_TEST,
	POSTGRES_USER,
	POSTGRES_PASSWORD,
	ENV
} = process.env

let Client: any;

if(ENV === 'test') {
	Client = new Pool({
		host: POSTGRES_HOST,
		database: POSTGRES_DB_TEST,
		port: 5432,
		user: POSTGRES_USER,
		password: POSTGRES_PASSWORD
	})
}

if(ENV === 'dev') {
	Client = new Pool({
		host: POSTGRES_HOST,
		database: POSTGRES_DB,
		port: 5432,
		user: POSTGRES_USER,
		password: POSTGRES_PASSWORD
	})
}

export default Client
