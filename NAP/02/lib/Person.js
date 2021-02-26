class Person {
	constructor (name, weight, height) {
		this._name = name;
		this._weight = weight;
		this._height = height;
	}

	get name() {
		return this._name;
	}

	get weight() {
		return this._weight;
	}

	get height() {
		return this._height;
	}

}

module.exports = Person;
