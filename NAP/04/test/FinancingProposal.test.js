describe('FinancingProposal tests', () => {
	test('Should return correct proposal to salary below than 1000.00', () => {
		const generator = new Generator();
		const client = {
			name: 'José Feliz',
			age: 47,
			salary: 900.00,
			lending: 1500.00
		}
		const proposal = generator.generateProposal(client);

		expect(proposal.length).toBe(2);

		expect(proposal[0].installmentsQty).toBe(2);
		expect(proposal[0].total).toBeCloseTo(3000.00);
		expect(proposal[0].installmentsValue).toBeCloseTo(1500.00);

		expect(proposal[1].installmentsQty).toBe(3);
		expect(proposal[1].total).toBeCloseTo(3000.00);
		expect(proposal[1].installmentsValue).toBeCloseTo(1000.00);

	})
})
