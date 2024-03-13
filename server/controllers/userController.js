const ApiError = require('../error/ApiError');

class UserController {
	async registration(req, res) {
		res.status(200).json({});
	}
	async login(req, res) {}

	async check(req, res, next) {
		const { id } = req.query;

		if (!id) {
			return next(ApiError.badRequest(`Your ID=${id} is incorrect 😐`));
		}

		res.json({ auth: 'MY checkAuthController', id });
	}
}

module.exports = new UserController();
