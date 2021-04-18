// Callback é agendada para a próxima itereção do event loop
setImmediate(() => {
	console.log('1')
})

setImmediate(() => {
	console.log('2')
})

console.log('end of setImmediate script')

// Callback tem prioridade na fila de execução do event loop
process.nextTick(() => {
	console.log('next tick 1')
})

process.nextTick(() => {
	console.log('next tick 1')
})

console.log('end of next tick script')
