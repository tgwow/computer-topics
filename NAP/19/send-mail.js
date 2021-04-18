const nodemailer = require('nodemailer')

const sendMail = async () => {
	const transporter = nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		port: 587,
		auth: {
			user: 'mallory.rolfson74@ethereal.email',
			pass: '3ux8rFnMtSJXqCcVYH'
		}
	});

	const info = await transporter.sendMail({
		from: '"mallory"',
		to: 'thiago.2809@outlook.com.br',
		subject: 'Hello from Josephine',
		text: 'Hi, I\'m testing the nodemailer library and ethereal email service! \n Bye bye'
	})

	console.log('Message ID: ', info.messageId)
	console.log('Message URL: ', nodemailer.getTestMessageUrl(info))
}

sendMail()
