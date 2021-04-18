const { somaAsync, firstNegative, waitFor} = require('./utils')

describe('Async tests', () => {
	test('somaAsync', (done) => {
		somaAsync([2,2,2]).then(data => {
			expect(data).toBe(6)
			done()
		})
	})

	test('firstNegative', async () => {
		const data = await firstNegative([2,-5,10])
		expect(data).toBe(-5)
	})

	test('waitFor', async () => {
		// setando o timeout interno do jest
		jest.setTimeout(1050)
		await waitFor(1050)
	})
})
