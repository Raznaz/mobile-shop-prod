const ApiError = require('../error/ApiError');
const { Type } = require('../models/models');

class typeController {
	async create(req, res, next) {
		try {
			const { name } = req.body;
			const response = await Type.create({ name });

			res.status(200).json(response);
		} catch (error) {
			return next(ApiError.badRequest(error.message));
		}
	}

	async getAll(req, res) {
		try {
			const response = await Type.findAll();

			res.status(200).json(response);
		} catch (error) {
			return next(ApiError.badRequest(error.message));
		}
	}

	async remove(req, res) {
		res.status(200).json({});
	}

	async update(req, res) {
		res.status(200).json({});
	}
}

module.exports = new typeController();
