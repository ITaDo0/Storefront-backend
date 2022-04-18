import { product, storefront } from '../models/productModel'

const store = new storefront()

describe('Product model', () => {

	it('Should have index method', () => {
		expect(store.indexProducts).toBeDefined()
	})

	it('Should have show method', () => {
		expect(store.showProduct).toBeDefined()
	})

	it('Should have create method', () => {
		expect(store.createProduct).toBeDefined()
	})

	it('Should create a product', async () => {
		const result = await store.createProduct('wood', '5.0')
		expect(result).toEqual([])
	})

	it('Should return one product which have this id (1)', async () => {
		const result = await store.showProduct('1')
		expect(result.length).toEqual(1)
	})

	it('Should return an array of all products', async () => {
		const result = await store.indexProducts()
		expect(result.length).toBeGreaterThan(0)
	})
})