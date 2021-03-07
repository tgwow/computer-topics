const { toBeDeepCloseTo, toMatchCloseTo } = require('jest-matcher-deep-close-to');
const InstallmentProposal = require('../lib/InstallmentProposal')

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

const ip = new InstallmentProposal();

describe('FinancingProposal tests', () => {
	test('Should return correct proposal to salary below than 1000.00', () => {
		const client1 = {
			name: 'José Feliz',
			age: 47,
			salary: 900.00,
			lending: 1500.00
		}
		ip.generate(client1)
		expect(ip.proposal.length).toBe(2);
		expect(ip.proposal[0]).toMatchCloseTo({
			installmentsQty: 2,
			total: 3000.00,
			installmentsValue: 1500.00
		}, 2);
		expect(ip.proposal[1]).toMatchCloseTo({
			installmentsQty: 3,
			total: 3000.00,
			installmentsValue: 1000.00
		}, 2);
	})
	test('Should return correct proposal to salary between 1000.01 and 5000.00', () => {
		const client2 = {
			name: 'Bernando Batista',
			age: 27,
			salary: 2800.00,
			lending: 3000.00
		}
		ip.generate(client2)
		expect(ip.proposal.length).toBe(3);
		expect(ip.proposal[0]).toMatchCloseTo({
			installmentsQty: 2,
			total: 3900.00,
			installmentsValue: 1950.00
		}, 2);
		expect(ip.proposal[1]).toMatchCloseTo({
			installmentsQty: 4,
			total: 4500.00,
			installmentsValue: 1125.00
		}, 2);
	})
})
