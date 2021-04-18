const express = require('express');
const bodyParser = require('body-parser')
const storage = require('node-persist')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

(async () => {
	const log = 0;
	const books = [
		{
			ID: 1,
			name: 'Codigo Da Vinci',
			author: 'Dan Brown'
		},
		{
			ID: 2,
			name: 'Os Lusiadas',
			author: 'Luis de Camoes'
		}
	];
	await storage.init()
	await storage.setItem('books', books);
	await storage.setItem('log', log)
})()

const addLog = async () => {
	const log = await storage.getItem('log');
	await storage.updateItem('log', log + 1)
}

app.get('/books', async (req, res) => {
	await addLog();
	const books = await storage.getItem('books')
	res.send(books);
});

app.post('/books', async (req, res) => {
	await addLog();
	const newBook = req.body;
	const books = await storage.getItem('books')
	if (books.findIndex(b => b.ID === newBook.ID) !== -1) {
	  res.status(500).send({ message: 'Existing book ID' });
	  return;
  }
  books.push(newBook);
	await storage.updateItem('books', books)
  res.send('Book added');
});

app.get('/books/:bookId', async (req, res) => {
	await addLog();
	const bookId = parseInt(req.params.bookId);
  if (isNaN(bookId)) {
    res.status(500).send('Non integer');
    return;
  }
	const books = await storage.getItem('books')
	const book = books.find(b => b.ID === bookId);
  if (!book) {
    res.status(500).send('Invalid book ID');
    return;
  }

  res.send(book);
});

app.get('/log', async (req, res) => {
	const requests = await storage.getItem('log')
	res.status(200).send({ requests })
})

app.listen(3000, () => {
  console.log(`app listening at http://localhost:3000`);
})
