const { Device, DeviceInfo } = require('../models/models');
const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/ApiError');
const { where } = require('sequelize');

class deviceController {
	async create(req, res, next) {
		try {
			const { name, price, brandId, typeId, info } = req.body;
			const { img } = req.files;
			let fileName = uuid.v4() + '.jpg';
			img.mv(path.resolve(__dirname, '..', 'static', fileName));

			const device = await Device.create({
				name,
				price,
				info,
				brandId,
				typeId,
				img: fileName,
			});

			if (info) {
				info = JSON.parse(info);
				info.forEach((inf) => {
					DeviceInfo.create({
						deviceId: device.id,
						title: inf.title,
						description: inf.description,
					});
				});
			}

			res.status(200).json(device.id);
		} catch (error) {
			return next(ApiError.badRequest(error.message));
		}
	}

	async getAll(req, res, next) {
		try {
			let { brandId, typeId, limit, page } = req.query;
			page = page || 1;
			limit = limit || 9;

			let offset = page * limit - limit;

			let response;

			if (!brandId && !typeId) {
				response = await Device.findAndCountAll({ limit, offset });
			}

			if (brandId && !typeId) {
				response = await Device.findAndCountAll({ where: { brandId }, limit, offset });
			}

			if (!brandId && typeId) {
				response = await Device.findAndCountAll({ where: { typeId }, limit, offset });
			}

			if (brandId && typeId) {
				response = await Device.findAndCountAll({
					where: { typeId, brandId },
					limit,
					offset,
				});
			}
			return res.status(200).json(response);
		} catch (error) {
			return next(ApiError.badRequest(error.message));
		}
	}

	async getOne(req, res, next) {
		try {
			const { id } = req.params;

			if (!id) {
				return next(ApiError.badRequest('ID incorrect 😐'));
			}

			const device = await Device.findOne({
				where: { id },
				include: [{ model: DeviceInfo, as: 'info' }],
			});

			res.status(200).json({ device });
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

module.exports = new deviceController();
