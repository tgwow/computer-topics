// Função que soma n números em um array e retorne uma promise que resolve na próxima itereção do event loop
const somaAsync = (arr) => {
	const res = arr.reduce((acc, el) => acc + el, 0)
	const promise = new Promise((resolve, reject) => {
		if (isNaN(res))
			reject('Valor inválido')
		setImmediate(() => resolve(res))
	})
	return promise
}

const firstNegative = (arr) => {
	const res = arr.find(el => el < 0)
	const promise = new Promise((resolve, reject) => {
		if (isNaN(res))
			reject('Valor inválido.')
		if (res === undefined)
			reject('Valor maior que 0.')
		process.nextTick(() => {
			resolve(res)
		})
	})
	return promise
}

// função que retorna uma promise que resolve em X ms
const waitFor = (ms) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve()
		}, ms)
	})
}

module.exports = {
	somaAsync,
	firstNegative,
	waitFor
}
