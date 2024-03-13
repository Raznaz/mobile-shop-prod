const ApiError = require('../error/ApiError');
const { Brand } = require('../models/models');

class brandController {
	async create(req, res, next) {
		try {
			const { name } = req.body;
			const response = await Brand.create({ name });

			res.status(200).json(response);
		} catch (error) {
			return next(ApiError.badRequest(error.message));
		}
	}

	async getAll(req, res) {
		try {
			const response = await Brand.findAll();

			res.status(200).json(response);
		} catch (error) {
			return next(ApiError.badRequest(error.message));
		}
	}

	async remove(req, res) {
		res.status(200).json({});
	}

	async update(req, res) {
		res.status(200).json({ message: 'UPDATE' });
	}
}

module.exports = new brandController();
