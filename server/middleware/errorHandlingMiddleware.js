const ApiError = require('../error/ApiError');

const handleErrorMiddle = (err, req, res, next) => {
	if (err instanceof ApiError) {
		return res.status(err.status).json({ message: err.message });
	}

	return res.status(500).json({ message: 'Unexpected error 🐵' });
};

module.exports = handleErrorMiddle;
