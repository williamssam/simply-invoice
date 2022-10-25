const mongoose = require('mongoose')
const Invoices = require('../model/invoiceModel')

const createNewInvoice = async (req, res) => {
	try {
		const newInvoice = await Invoices.create({ ...req.body })
		res.status(200).json({
			status: true,
			message: 'Invoice created successfully 🎉!',
			data: newInvoice,
		})
	} catch (error) {
		res.status(400).json({
			status: false,
			message: 'Error adding invoice!',
			err: error.message,
		})
	}
}

const getAllInvoice = async (req, res) => {
	try {
		const allInvoice = await Invoices.find({}).sort({ createdAt: -1 })
		res.status(200).json({
			status: true,
			message: 'All created invoice retrieved successfully 🎉!',
			data: allInvoice,
		})
	} catch (error) {
		res.status(400).json({
			status: false,
			message: 'Error retrieving invoice!',
			err: error.message,
		})
	}
}

const getClientInvoice = async (req, res) => {
	// const { clientId } = req.params
	// try {
	// 	const clientInvoice = await Invoices.find({
	// 		clientId,
	// 	})
	// 	res.status(200).json({
	// 		status: true,
	// 		message: 'All invoice for the client retrieved successfully 🎉!',
	// 		data: clientInvoice,
	// 	})
	// } catch (error) {
	// 	res.status(400).json({
	// 		status: false,
	// 		message: 'Error retrieving invoice!',
	// 		err: error.message,
	// 	})
	// }
}

const deleteInvoice = async (req, res) => {
	const { id } = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such invoice' })
	}

	try {
		const invoice = await Invoices.findOneAndDelete({ id })
		res.status(200).json({
			status: true,
			message: 'Invoice deleted successfully!',
			data: invoice,
		})
	} catch (error) {
		res.status(400).json({
			status: false,
			message: 'Invoice could not be deleted!',
			err: error.message,
		})
	}
}

module.exports = {
	createNewInvoice,
	getAllInvoice,
	deleteInvoice,
	getClientInvoice,
}
