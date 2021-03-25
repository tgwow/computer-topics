class Calculator {
	constructor (name, email) {
		this.name = name
		this.email = email
	}

	set (values) {
		this.salary = values.salary
		this.role = values.role
	}

	calculate() {
		switch (this.role) {
			case 'Developer':
				console.log('is a dev')
				return this.salary
			default:
				throw `Unhandled role ${this.role}`
		}
	}
}

module.exports = Calculator
