const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
	countryCode: { type: Number, default: 38 },
	cityCode: { type: Number, required: true },
	mainNumber: { type: Number, required: true },
	otherNumber: [{ type: Number }],
});

const Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;
