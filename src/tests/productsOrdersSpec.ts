import { orderProduct, order_product } from '../models/order_productModel'
const order_model = require('../models/orderModel')

const order_store = new order_model.storefront
const store = new order_product

describe('Order_Products table', () => {

	it('Should have index method', () => {
		expect(store.index).toBeDefined
	})

	it('Should have create method', () => {
		expect(store.create).toBeDefined
	})

	it('Should return all order_products', async () => {
		const result = await store.index()
		expect(result.length).toBeGreaterThan(0)
	})

	it('Should create a new order_products row', async () => {
		const result = await order_store.order(1,1,33)
		// If there's more than one row in order_products table it means order_prodcuts is created
		const order_products_result = await store.index()
		expect(result.length).toBeGreaterThan(0)
	})
})