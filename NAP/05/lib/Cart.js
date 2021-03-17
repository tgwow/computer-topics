class Cart {
	constructor () {
		this.checkout = '';
	}
	reducer(acc, curr, index, arr){
		let separator;
		if (index === arr.length - 1)
			separator = " and ";
		else
			separator = ", ";

		return acc.concat(index > 0 ? separator : '' ).concat(curr.name)
	}
	validate(items) {
		if (items.length > 1) {
			this.checkout = `Your cart items are: ${items.reduce(this.reducer, '')}`
		} else {
			this.checkout = `Your cart item is: ${items[0].name}`
		}
	}
}

module.exports = Cart
