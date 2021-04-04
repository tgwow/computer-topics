const R = require('ramda');

const isEven = (number) => {
	const n = R.clone(number);
	n.even = n.value % 2 === 0;
	return n;
}

const positive = (number) => {
	const n = R.clone(number);
	n.positive = n.value > 0;
	return n;
}

const isOdd = (number) => {
	const n = R.clone(number)
	n.odd = n.value % 2 !== 0
	return n
}

const negative = (number) => {
	const n = R.clone(number)
	n.negative = n.value < 0
	return n
}

const isZero = (number) => {
	const n = R.clone(number)
	n.zero = number.value === 0
	return n
}

const isPrime = (number) => {
	const n = R.clone(number)
	let i = 2
	n.prime = n.value > 1

	while ( i < n.value ) {
		if (n.value % i === 0)
			n.prime = false;
		i++
	}
	return n
}

const mapToNumberObject = (num) => {
	return { value: num };
}

const arr = [-1, 50, 5, 10, -8, 20, 25, 0, 100, 14, -123];

// Exercicio 1: use map() para transformar 'arr' em objetos usando mapToNumberObject()
const arrToObject = arr.map(mapToNumberObject)
console.log(arrToObject)

// Exercicio 2: seguindo o modelo das 2 primeiras funções implemente as outras 4 funções

// Exercicio 3: refatore todas as funções para a forma usando arrow function (=>)

// Exercicio 4: use R.pipe para compor as funções: isEven, positive, isOdd, negative,
// isZero, e isPrime. Teste a função composta com um único objeto.
const compositeFunction = R.pipe(
	isEven,
	positive,
	isOdd,
	negative,
	isZero,
	isPrime
)

console.log(compositeFunction({ value: 2}))

// Exercicio 5: use a função composta do Ex. 4 para transformar os números em 'arr'
console.log(arr.map( (n) => compositeFunction( {value: n} )))
