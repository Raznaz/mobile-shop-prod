const { Device } = require('../models/models');
const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/ApiError');

class deviceController {
	async create(req, res, next) {
		try {
			const { name, price, brandId, typeId, info } = req.body;
			const { img } = req.files;
			let fileName = uuid.v4() + '.jpg';
			img.mv(path.resolve(__dirname, '..', 'static', fileName));

			const response = await Device.create({
				name,
				price,
				info,
				brandId,
				typeId,
				img: fileName,
			});

			res.status(200).json(response);
		} catch (error) {
			return next(ApiError.badRequest(error.message));
		}
	}

	async getAll(req, res) {
		try {
			const response = await Device.findAll();

			res.status(200).json(response);
		} catch (error) {
			return next(ApiError.badRequest(error.message));
		}
	}

	async getOne(req, res) {
		res.status(200).json({});
	}

	async remove(req, res) {
		res.status(200).json({});
	}

	async update(req, res) {
		res.status(200).json({});
	}
}

module.exports = new deviceController();
