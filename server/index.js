const express = require('express');
require('dotenv').config();
const sequelize = require('./db.js');
const models = require('./models/models.js');

const PORT = process.env.PORT || 7000;

const app = express();

const start = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		app.listen(PORT, () => console.log(`🚀 Server was started on ${PORT} port`));
	} catch (error) {
		console.log('🔴 ', error);
	}
};

start();
