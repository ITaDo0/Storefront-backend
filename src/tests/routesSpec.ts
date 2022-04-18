const request = require('supertest')
const express = require('express')

const app = express()

describe('Routes', () => {
	it('Should return 200', () => {
		request(app).get('/').expect(200)
	})

	it('Should return 401', () => {
		request(app).get('/users').expect(401)
	})

	it('Should return 401', () => {
		request(app).get('/users').expect(401)
	})

	it('Should return 401', () => {
		request(app).get('/users/1').expect(401)
	})

	it('Should reutrn 200', () => {
		request(app).get('0.0.0.0:80/products/1').expect(200)
	})

	it('Should return 401', () => {
		request(app).get('/show/orders').expect(401)
	})

	it('Should return 401', () => {
		request(app).get('/products/1/order').expect(401)
	})
}) 