class InstallmentProposal {
	constructor () {
		this.proposal = [];
	}

	calculate (factor, installmentsQty, lending) {
		const total = lending * factor
		return {
			total,
			installmentsQty,
			installmentsValue: total / installmentsQty
		}
	}

	generate (client) {
		switch (true) {
			case client.salary < 1000.00:
				this.proposal[0] = this.calculate(2, 2, client.lending);
				this.proposal[1] = this.calculate(2, 3, client.lending);
				break
			case client.salary > 1000:
				break
			default: throw 'Unhandled proposal for this salary'
		}
	}
}

module.exports = InstallmentProposal
