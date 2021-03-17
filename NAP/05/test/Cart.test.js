const { toBeDeepCloseTo, toMatchCloseTo } = require('jest-matcher-deep-close-to');
const Cart = require('../lib/Cart')

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

const cart = new Cart();

describe('Cart tests', () => {
	test('Should return correct item list when there is only one item', () => {
		const items = [
			{
				name: 'Bread',
				value: 2
			},
		];
		cart.validate(items);
		expect(cart.checkout).toBe('Your cart item is: Bread')
	})
	test('Should return correct item list when there are two items', () => {
		const items = [
			{
				name: 'Bread',
				value: 2
			},
			{
				name: 'Milk',
				value: 4
			},
		];
		cart.validate(items);
		expect(cart.checkout).toBe('Your cart items are: Bread and Milk')
	})

	test('Should return correct item list when there are more than two items', () => {
		const items = [
			{
				name: 'Bread',
				value: 2
			},
			{
				name: 'Milk',
				value: 4
			},
			{
				name: 'Coffee',
				value: 10
			},
		];
		cart.validate(items);
		expect(cart.checkout).toBe('Your cart items are: Bread, Milk and Coffee')
	})
})
