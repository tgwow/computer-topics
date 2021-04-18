const util = require('util')
const fs = require('fs')

const statPromisify = util.promisify(fs.stat)

{
	(async () => {
		const file = await statPromisify('./package.json')
		console.log(file.isDirectory())
	})()
}
