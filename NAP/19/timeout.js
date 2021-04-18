// Colocar sempre o menor valor primeiro para evitar bug no agendamento do event loop
setTimeout(() => {
	console.log('1s depois')
}, 1000)

setTimeout(() => {
	console.log('2s depois')
}, 2000)
