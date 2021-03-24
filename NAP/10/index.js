(() => { // IIFE - Immediately Invoked Function Expression - Useful to create new context in a closed scope
	/* 1st-class citizens:
		Values that can be passed as parameters,
		can be returned from a function and can be assignable to a variable.
	*/
	const print = () => {
		console.log('print')
	}

	const callTwice = (func) => {
		func()
		func()
	}

	// const returnPrint = () => {
	// 	return print
	// }
	const returnPrint = () => {
			return () => console.log('other print')
		}
	callTwice(print)
	let f = returnPrint()()


	/* Closure:
			Is the capability of access state an outer function's scope from an inner function.
			Closures are created at the function execution time.
	*/
	const createHelloFunction = (message) => {
		return name => console.log(`${message}, ${name}`)
	}

	createHelloFunction('Hello')('everybody')

	const obj = {}
	obj.hello = createHelloFunction('Hello')
	obj.hello('Mary')
	obj.hello('Jhon')

	console.log(typeof obj.hello === 'function')
	console.log(obj.hello.toString())
	console.log(obj.hello.name)

	/* Arrow Functions:
			Syntax sugar for creation of functions
	*/
	const sum = (a, b) => a + b
	const createClient = (id, name) => ({id, name})
	const diff = (a, b) => {
		console.log('some diff')
		return a - b
	}
	console.log(sum(5,6))
	console.log(createClient(4556, 'Jean Claude'))
	console.log(diff(5,6))

	/* HOC = High Order Functions:
			Functions that are passed as parameters to another functions
	*/
	const arr = [5,6,7,8,9,10]
	// Filter
	// const even = arr.filter(el => el % 2 === 0)
	// console.log(even)
	const isEven = el => el % 2 === 0
	console.log(arr.filter(isEven))

	// Map
	const double = arr.map(el => el * 2)
	console.log(double)

	// Reduce
	const minor = arr.reduce((acc, curr, index, array) => {
		if (index === 0)
			return curr
		if (acc < curr)
			return acc
		return curr
	})
	console.log(minor)

	const amount = arr.reduce((acc, curr) => acc + curr)
	console.log(amount)
})()

