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

	generate ({salary, lending}) {
		switch (true) {
			case salary < 1000.00:
				this.proposal[0] = this.calculate(2, 2, lending);
				this.proposal[1] = this.calculate(2, 3, lending);
				break
			default: throw 'Unhandled proposal for this salary'
		}
	}
}

module.exports = InstallmentProposal
