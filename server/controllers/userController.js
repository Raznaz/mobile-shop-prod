const ApiError = require('../error/ApiError');
const { User, Basket } = require('../models/models');
const bcryp = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = (id, email, role) => {
	const token = jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
		expiresIn: '24h',
	});

	return token;
};

class UserController {
	async registration(req, res, next) {
		try {
			const { email, password, role } = req.body;

			if (!email || !password) {
				return next(ApiError.badRequest(error.message));
			}

			const candidate = await User.findOne({ where: { email } });

			if (candidate) {
				return next(ApiError.badRequest(`User ${candidate.email} is already exist 🛑`));
			}

			const hashPassword = await bcryp.hash(password, 5);
			const user = await User.create({ email, password: hashPassword, role });
			const basket = await Basket.create({ userId: user.id });

			const token = generateToken(user.id, user.email, user.role);

			await res.status(200).json({ token });
		} catch (error) {
			return next(ApiError.badRequest(error.message));
		}
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
