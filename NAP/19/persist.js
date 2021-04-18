const storage = require('node-persist')

async function setItem(key, value) {
	await storage.setItem(key, value);
}

async function getItem(key) {
	return await storage.getItem(key);
}

async function updateItem(key, value) {
	return await storage.updateItem(key, value);
}

{
	(async () => {
		await storage.init({
			logging: true
		})
		await setItem('users', [
			{
				name: 'Thiago',
				age: '23'
			},{
				name: 'João',
				age: 104
			}
		])
		const users = await getItem('users');
		users.push({
			name: 'Gerson',
			age: '51'
		})
		await updateItem('users', users);
		const updatedUsers = await getItem('users')
		// console.log(updatedUsers)

		storage.forEach(async (item) => console.log(item))
		await storage.clear();
	})()
}

