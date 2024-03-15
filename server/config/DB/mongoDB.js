const mongoose = require('mongoose');

async function mongoConnection() {
	await mongoose
		.connect(
			`mongodb+srv://joker:${process.env.MONGO_PASSWORD}@backenddb.ng3w0qn.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB`
		)
		.then(() => console.log('⭐ MONGO OK! '))
		.catch((err) => console.log('🚩 NO CONNECTION TO MONGO', err.message));
}

module.exports = mongoConnection;
