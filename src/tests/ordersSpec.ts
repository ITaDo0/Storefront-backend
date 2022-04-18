import { order, storefront } from '../models/orderModel'
const product_model = require('../models/productModel')
const product_store = new product_model.storefront
const store = new storefront

describe('Order model', () => {

	beforeAll( (done) => {
		const result = product_store.createTestProduct()
		done()
	})

	it('Should have order method', () => {
		expect(store.order).toBeDefined()
	})

	it('Should have show order method', () => {
		expect(store.order).toBeDefined()
	})

	it('Should insert this data into orders table', async () => {
		const result = await store.order('1','1','5')
		expect(result.length).toBeGreaterThan(0)
	}) 

	it('Should return orders that have this id (1)', async () => {
		const result = await store.showOrders('1')
		expect(result.length).toBeGreaterThan(0)
	})

	it('Should return an array of orders', async () => {
		const result = await store.showOrders('1')
		expect(result.length).toBeGreaterThan(0)
	})
})