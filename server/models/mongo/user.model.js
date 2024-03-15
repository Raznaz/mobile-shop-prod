const mongoose = require('mongoose');
const { Schema } = mongoose;

const user = new Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	phones: { type: mongoose.Schema.Types.ObjectId, ref: 'Phone' },
	email: [{ type: String }],
	address: String,
	notes: String,
	isDeleted: Boolean,
});

const PhoneUser = mongoose.model('PhoneUser', user);

module.exports = PhoneUser;
