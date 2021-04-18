const axios = require('axios').default;

const getLog = async () => {
	const { data, status } = await axios.get('http://localhost:3000/log');
	if (status === 200)
		console.log(`Requests count: ${data.requests}`)
}
const addBook = async (book) => {
	try {
		const { data } = await axios.post('http://localhost:3000/books', book)
		console.log(data)
	} catch (e) {
		console.log('ERROR: ', e.response?.data?.message)
	}
}

const getBooks = async () => {
	try {
		const { data, status } = await axios.get('http://localhost:3000/books')

		if (status === 200)
			books = data
		await Promise.all(books.map( async (book, index) => {
			const { data } = await axios.get(`http://localhost:3000/books/${book.ID}`)
			console.log(`Book[${index + 1}]: `, data)
		}))
	} catch (e) {
		console.log(e.response.data)
	}
}
{
	(async () => {
		await addBook({
			ID: 3,
			name: 'My Boook',
			author: 'Me and only me'
		})
		await addBook({
			ID: 4,
			name: 'O mundo de Sofia',
			author: 'Jostein Gaarder'
		})
		await getBooks()
		await getLog()
	})()
}
