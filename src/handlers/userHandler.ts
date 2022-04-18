import express, { Request, Response } from 'express'
import { storefront } from '../models/userModel'
import dotenv from 'dotenv'
const jwt = require('jsonwebtoken')
const generateToken = require('../generateToken')
dotenv.config({path:__dirname+'/./../../.env'})

const app: express.Application = express()
const store = new storefront()

module.exports = function (app: express.Application): void {
	// Show all users
	app.post('/users', async function (req: Request, res: Response) {
		const user_token = req.body.token
	    try{
	    	jwt.verify(user_token, process.env.TOKEN_SECRET)
	    	const result = await store.index()
	    	res.json(result)
	    } catch(err) {
	    	res.status(401)
	    	res.json(`Invalid token ${err}`)
	    	return
	    }
	})

	// Show only one user
	app.post('/users/:user_id', async function (req: Request, res: Response) {
		const user_token = req.body.token
		const user_id = req.params.user_id
		try{
			const decoded = jwt.verify(user_token, process.env.TOKEN_SECRET)
			const result = await store.show(user_id)
			res.json(result)
		} catch (err) {
			res.status(401)
			res.json(`Invalid token ${err}`)
			return
		}
	})

	// Create new user
	app.post('/create/user', async function (req: Request, res: Response) {
	    const firstname = req.body.firstname
	    const lastname = req.body.lastname
	    const password = req.body.password
	    const result = await store.create(firstname as string, lastname as string, password as string)
	    //@ts-ignore
	    const token = generateToken.generateAccessToken({id: result.id,firstname: firstname, lastname: lastname, })
	    res.cookie('token', token)
	    res.json(token)
	})
}

