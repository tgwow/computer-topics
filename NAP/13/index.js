const R = require('ramda');

console.log('side effects functions')
{
	function foo1 (a) {
		a.foo1 = 10
	}

	const aObj = {};
	foo1(aObj)
	console.log(aObj);

	const someObj = {counter: 0};

	function foo2 () {
		someObj.counter++
	}

	foo2()
	console.log(someObj)

	function inc (obj) {
		if (typeof obj.inc === 'undefined')
			obj.inc = 1;
		else
			obj.inc++
	}

	const var1 = {}
	inc(var1)
	console.log(var1)

	inc(var1)
	console.log(var1)

}

console.log('\nno side effects functions')
{
	function foo1 (a) {
		const newA = R.clone(a)
		newA.foo1 = 10
		return newA
	}

	const aObj = {};
	const newObj = foo1(aObj)
	console.log(newObj);

	const someObj = {counter: 0};

	function foo2 (obj) {
		const newSomeObj = R.clone(obj)
		newSomeObj.counter++
		return newSomeObj
	}

	const newSomeObj = foo2(someObj)
	console.log(someObj)
	console.log(newSomeObj)

	function inc(obj) {
		const newObj = R.clone(obj)
		if (typeof newObj.inc === 'undefined')
			newObj.inc = 1;
		else
			newObj.inc++
		return newObj
	}

	const var1 = {}

	const newVar1 = inc(var1)
	console.log(var1)
	console.log(newVar1)

	const newVar2 = inc(newVar1)
	console.log(newVar2)

}

console.log('\ncurrying')
const add = R.curry((num1, num2) => num1 + num2);

const multiply = R.curry((num1, num2) => num1 * num2);

const createPerson = R.curry((name, genre, age) => {
	return {
		name, genre, age
	};
});
const addThen = add(10)
const double = multiply(2)
const arr = [4, 5, -10, 6]

{
	// (1) using curried functions: addThen
	const reduceTwo = add(-2)

	console.log(addThen(20))
	console.log(reduceTwo(100))

	// using in array
	console.log(arr.map(addThen))
	console.log(arr.map(reduceTwo))

	// (2) using curried functions partial call for the 3 functions
	console.log(arr.map(double).map(addThen))

	// (3) using curried functions with R.__

	const createMale = createPerson(R.__, 'M', R.__)
	console.log(createMale('Chuck Norris', 67))
	// partial call
	console.log(createMale('Chuck Norris')(67))

	const create25Person = createPerson(R.__, R.__, 25)
	console.log(create25Person('Robert', 'M'))

	const createFemale30 = createPerson(R.__, 'F', 30)
	console.log(createFemale30('Isabel'))
}

console.log('\nfunction composition')
{
	// (1) create add 10, double; Then compose it (R.pipe)
	const addTenAndDouble = R.pipe(addThen, double)
	console.log(addTenAndDouble(0))

	// apply to array
	console.log(arr.map(addTenAndDouble))

	// make it more direct
	console.log(R.pipe(add(10), multiply(2))(0))

	const changeAgeToYearOfBirth = person => {
		const p = R.clone(person)
		p.dob = new Date().getFullYear() - p.age
		delete p.age
		return p
	}

	const me = createPerson('Thiago', 'M', 23)
	const me2 = changeAgeToYearOfBirth(me)
	console.log(me2)

	const nameToUpperCase = person => {
		const p = R.clone(person)
		p.name = p.name.toUpperCase()
		return p
	}

	const me3 = nameToUpperCase(me2)
	console.log(me3)

	const fullGenre = person => {
		const p = R.clone(person)
		p.genre = p.genre === 'M' ? 'Male' : 'Female'
		return p
	}

	const me4 = fullGenre(me3)
	console.log(me4)

	// (2) create a person with year of birth, uppercase name and full genre

	const transformPerson = R.pipe(
		createPerson,
		changeAgeToYearOfBirth,
		nameToUpperCase,
		fullGenre
	)

	console.log( createPerson( 'Joao', 'M', 23) )
	console.log( transformPerson( 'Joao', 'M', 23 ))
}

