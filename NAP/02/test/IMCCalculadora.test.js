const Person = require('../lib/Person')
const IMCCalculator = require('../lib/IMCCalculator')

const Calc = new IMCCalculator();

describe('It should test calculator method from IMCCalculator class.', () => {
	test('It should return an exception "Invalid arguments" when user does not provide weight or height attributes.', () => {
		const invalidPerson = new Person('Thiago', -1, '');
		expect(() => {
			Calc.calculate(invalidPerson)
		}).toThrow('Invalid arguments')
	})

	test('Classification must be "under weight" when imc was smaller then 18.5.', () => {
		const normalIMC = new Person('Thiago', 47, '1.61');
		const IMCStatus = Calc.calculate(normalIMC)
		expect(IMCStatus.classification).toBe('under weight')
	})

	test('Classification must be "normal" when imc was smaller then 25.', () => {
		const normalIMC = new Person('Thiago', 66, '1.8');
		const IMCStatus = Calc.calculate(normalIMC)
		expect(IMCStatus.classification).toBe('normal')
	})

	test('Classification must be "over weight" when imc was smaller then 30.', () => {
		const normalIMC = new Person('Thiago', 86, '1.8');
		const IMCStatus = Calc.calculate(normalIMC)
		expect(IMCStatus.classification).toBe('over weight')
	})

	test('Classification must be "obese" when imc was larger then 30.', () => {
		const normalIMC = new Person('Thiago', 97, '1.8');
		const IMCStatus = Calc.calculate(normalIMC)
		expect(IMCStatus.classification).toBe('obese')
	})
})
