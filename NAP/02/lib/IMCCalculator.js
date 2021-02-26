const IMCStatus = require('./IMCStatus')

class IMCCalculator {

	calculate(person) {
		const weight = person.weight;
		const height = person.height;

		if(weight <= 0 || height <= 0)
			throw 'Invalid arguments';

		const imc = Math.round(weight / (height * height));
		let classification;

		if (imc < 18.5)
			classification = "under weight";
		else if(imc < 25)
			classification = "normal";
		else if(imc < 30)
			classification = "over weight";
		else
			classification = "obese";

		return new IMCStatus(imc, classification);
	}
}

module.exports = IMCCalculator;

