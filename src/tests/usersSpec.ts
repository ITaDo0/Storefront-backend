import { user, storefront } from '../models/userModel'

const store = new storefront()

describe('Users model', () => {

	beforeAll((done) => {
		const result = store.create_test_user()
		done()
	})

	it('Should have index method', () => {
		expect(store.index).toBeDefined()
	})

	it('Should have create method', () => {
		expect(store.create).toBeDefined()
	})

	it('Should have show method', () => {
		expect(store.show).toBeDefined()
	})

	it('Should create a new user', async () => {
		const result = await store.create('test','test','test')
		expect(result.length).toEqual(1)
	})

	it('Should return array of all users', async () => {
		const result = await store.index()
		expect(result.length).toBeGreaterThan(0)
	})

	it('Should return one user', async () => {
		const result = await store.show('1')
		expect(result.length).toBeGreaterThan(0)
	})
})