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
})
