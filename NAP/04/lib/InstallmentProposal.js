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
	validate ({name, age, salary, lending}) {
		if (!name) throw 'invalid name'
		if (salary < 0.00) throw 'invalid salary'
		if (age < 18 && age > 70) throw 'invalid age'
		if (lending < 100 && lending > 100000.00) throw 'invalid lending'
	}
	generate ({salary, lending, ...rest}) {
		this.validate({salary, lending, ...rest})
		switch (true) {
			case salary < 1000.00:
				this.proposal[0] = this.calculate(2, 2, lending);
				this.proposal[1] = this.calculate(2, 3, lending);
				break
			case (salary > 1000.01 && salary < 5000.00):
				this.proposal[0] = this.calculate(1.3, 2, lending);
				this.proposal[1] = this.calculate(1.5, 4, lending);
				this.proposal[2] = this.calculate(1.5, 10, lending);
				break
			case (salary > 5000.01):
				this.proposal[0] = this.calculate(1.1, 2, lending);
				this.proposal[1] = this.calculate(1.3, 4, lending);
				this.proposal[2] = this.calculate(1.3, 10, lending);
				this.proposal[3] = this.calculate(1.4, 20, lending);
				break
			default: throw 'Unhandled proposal for this salary'
		}
	}
}

module.exports = InstallmentProposal
