const nodemailer = require('nodemailer')
const readFile = require('fs').promises.readFile
const { waitFor } = require('./lib/utils')

const readFileAsync = async (path) => {
	try {
		return await readFile(path, 'utf8');
 	} catch (e) {
		return e.message
	}
}

(async () => {
	const p1 = readFileAsync('./res/emails.txt')
	const p2 = readFileAsync('./res/corpo.txt')
	const p3 = readFileAsync('./res/titulo.txt')

	const [emails, corpo, titulo] = await Promise.all([p1, p2, p3])

	const transporter = nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		port: 587,
		auth: {
			user: 'mallory.rolfson74@ethereal.email',
			pass: '3ux8rFnMtSJXqCcVYH'
		}
	});
	const updatedEmails = emails.trim().split('\n');
	for (let email of updatedEmails) {
		const info = await transporter.sendMail({
			from: `someone`,
			to: email,
			subject: titulo,
			text: corpo
		});
		console.log('Message ID: ', info.messageId)
		console.log('Message URL: ', nodemailer.getTestMessageUrl(info))
		await waitFor(2000)
	}
})()
