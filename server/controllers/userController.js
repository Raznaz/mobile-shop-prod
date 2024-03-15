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
	async login(req, res, next) {
		try {
			const { email, password } = req.body;

			const user = await User.findOne({ where: { email } });

			if (!user) {
				return next(
					ApiError.internalError(`User doesn\'t exist with email: ${email} 🔕`)
				);
			}

			const comparePassword = bcryp.compareSync(password, user.password);

			console.log('❎compare ', comparePassword);

			if (!comparePassword) {
				return next(ApiError.internalError(`Password is incorrect ${password} ⛔`));
			}

			const token = generateToken(user.id, user.email, user.role);
			res.status(200).json({ email, token });
		} catch (error) {
			return next(ApiError.forbidden(error.message));
		}
	}

	async check(req, res, next) {
		try {
			const token = generateToken(req.user.id, req.user.email, req.user.role);
			return res.json({ token });
		} catch (error) {}
		res.status(200).json({ message: 'Good' });
	}
}

module.exports = new UserController();
