const mongoose = require('mongoose')

const Schema = mongoose.Schema

const clientsModel = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: String,
			required: true,
		},
		organization: {
			type: String,
			required: true,
		},
		organizationAddress: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Clients', clientsModel)
