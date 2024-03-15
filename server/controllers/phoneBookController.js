const Phone = require('../models/mongo/contact.model');
const PhoneUser = require('../models/mongo/user.model');

class PhoneBookController {
	async create(req, res, next) {
		try {
			const {
				firstName,
				lastName,
				email,
				address,
				notes,
				isDeleted,
				countryCode,
				cityCode,
				mainNumber,
				phoneNumber,
			} = req.body;

			const phone = await Phone.create({
				countryCode,
				cityCode,
				mainNumber,
				phoneNumber,
			});

			const phoneUser = await PhoneUser.create({
				firstName,
				lastName,
				phones: phone._id,
				email,
				address,
				notes,
				isDeleted,
			});

			res.status(200).json({ phoneUser, phone });
		} catch (error) {
			res.status(400).json(error);
		}
	}

	async getAll(req, res, next) {
		try {
			const allUserContacts = await PhoneUser.find().populate('phones').exec();

			res.status(200).json(allUserContacts);
		} catch (error) {
			res.status(400).json(error);
		}
	}
	async update(req, res, next) {
		res.status(200).json({ message: 'ONE PHONE' });
	}

	async remove(req, res, next) {
		res.status(200).json({ message: 'ONE PHONE' });
	}
}

module.exports = new PhoneBookController();
