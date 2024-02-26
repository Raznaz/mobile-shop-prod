const express = require('express');
require('dotenv').config();
const sequelize = require('./db.js');
const models = require('./models/models.js');
const router = require('./routes/index.js');
const cors = require('cors');

const PORT = process.env.PORT || 7000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

const start = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		app.listen(PORT, () => console.log(`🚀🚀🚀 \x1b[33m Server was started on ${PORT} port \x1b`));
	} catch (error) {
		console.log('🔴 ', error);
	}
};

start();
