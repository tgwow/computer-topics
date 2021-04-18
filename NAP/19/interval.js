let count = 0;
// A menos que voce não "limpe" o interval, ele ficará executando para sempre
const intervalId = setInterval(() => {
	console.log(`interval ${count++}`)
}, 1000)

setTimeout(() => {
	// Eles retornam uma referencia que pode ser utilizada para "limpar" o interval ou timeout
	clearInterval(intervalId)
}, 5000)
