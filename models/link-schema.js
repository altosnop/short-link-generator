const { Schema, default: mongoose } = require('mongoose');
const { model } = require('mongoose');

const LinkSchema = new Schema({
	linkId: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
	shortLink: {
		type: String,
		required: true,
	},
});

module.exports = model('Link', LinkSchema);
