const Calculator = require('../lib/Calculator')

const calc = new Calculator('Jhon', 'jhon@test.com')
describe('Calculator tests', () => {
	describe('Developer tests', () => {
		test('It should return correct final salary if the costumer salary is less than 3.000,00', () => {
			const values = {
				salary: 2.500,
				role: 'Developer'
			}
			calc.set(values)
			expect(calc.calculate()).toBeGreaterThan(2.500)
		})
	})
})
