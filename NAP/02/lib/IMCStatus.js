class IMCStatus {
	#imc;
	#classification;

	constructor (imc, classification) {
		this.#imc = imc;
		this.#classification = classification;
	}
	get () {
		return `IMC: ${this.#imc} Classification: ${this.classification}`
	}

	get classification() {
		return this.#classification;
	};

	get imc() {
		return this.#imc;
	}
}

module.exports = IMCStatus
