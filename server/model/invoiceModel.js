const mongoose = require('mongoose')
const { schema } = require('./clientsModel')

const Schema = mongoose.Schema

const InvoiceItems = new Schema({
	description: {
		type: String,
		required: true,
	},
	unitPrice: {
		type: Number,
		required: true,
	},
	amount: {
		type: Number,
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
})

const invoiceModel = new Schema(
	{
		invoiceNo: {
			type: String,
			required: true,
		},
		issuedDate: {
			type: Date,
			required: true,
		},
		dueDate: {
			type: Date,
			required: true,
		},
		totalAmount: {
			type: Number,
			required: true,
		},
		subtotalAmount: {
			type: Number,
			default: 0,
		},
		discount: {
			type: Number,
			default: 0,
		},
		project: {
			type: String,
		},
		clientId: {
			type: String,
			required: true,
		},
		note: {
			type: String,
		},
		status: {
			type: [
				{
					type: String,
					enum: ['paid', 'draft', 'pending', 'sent'],
				},
			],
		},
		invoiceItems: [InvoiceItems],
	},
	{ timestamps: { createdAt: true } }
)

module.exports = mongoose.model('Invoices', invoiceModel)
