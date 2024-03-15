const express = require('express');
require('dotenv').config();
const sequelize = require('./db.js');
const models = require('./models/models.js');
const router = require('./routes/index.js');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandlingMiddleware.js');
const path = require('path');
const mongoConnection = require('./config/DB/mongoDB.js');

const PORT = process.env.PORT || 7000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use(express.static(path.resolve(__dirname, 'static')));
app.use('/api', router);
app.use(errorHandler);

const start = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync({ logging: false });

		await mongoConnection();

		app.listen(PORT, () =>
			console.log(`🚀🚀🚀 \x1b[33m Server was started on ${PORT} port \x1b`)
		);
	} catch (error) {
		console.log('🔴 ', error);
	}
};

start();
