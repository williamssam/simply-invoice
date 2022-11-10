const mongoose = require('mongoose')
const Clients = require('../model/clientsModel')
const { validationResult } = require('express-validator')

const getAllClients = async (req, res) => {
	try {
		const getAll = await Clients.find({}).sort({ createdAt: -1 })
		res.status(200).json({
			status: true,
			message: 'All clients retrieved successfully!',
			data: getAll,
		})
	} catch (error) {
		res.status(400).json({
			status: false,
			message: 'Error retrieving all clients!',
			err: error.message,
		})
	}
}

const getOneClient = async (req, res) => {
	const { id } = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such client' })
	}

	try {
		const client = await Clients.findById(id)
		res.status(200).json({
			status: true,
			message: 'Client retrieved successfully 🎉!',
			data: client,
		})
	} catch (error) {
		res.status(400).json({
			status: false,
			message: 'No Client with that ID!',
			err: error.message,
		})
	}
}

const addNewClient = async (req, res) => {
	const { name, email, phoneNumber, organization, organizationAddress } =
		req.body

	// validate error with "express-validator"
	let errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	try {
		const client = await Clients.create({
			name,
			email,
			phoneNumber,
			organization,
			organizationAddress,
		})
		res.status(200).json({
			status: true,
			message: 'Client added successfully 🎉!',
			data: client,
		})
	} catch (error) {
		res.status(400).json({
			status: false,
			message: 'Error adding client!',
			err: error.message,
		})
	}
}

const deleteClient = async (req, res) => {
	const { id } = req.body

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such client' })
	}

	try {
		const client = await Clients.findOneAndDelete({ id })
		res.status(200).json({
			status: true,
			message: 'Client deleted successfully!',
			data: client,
		})
	} catch (error) {
		res.status(400).json({
			status: false,
			message: 'Client could not be deleted!',
			err: error.message,
		})
	}
}

const updateClient = async (req, res) => {
	const { id } = req.params
	try {
		const client = await Clients.findOneAndUpdate(
			{ _id: id },
			{
				...req.body,
			},
			{
				new: true,
			}
		)
		if (!client) {
			res.status(400).json({
				status: false,
				message: 'No such client!',
				err: error.message,
			})
		}
		res.status(200).json({
			status: true,
			message: 'Client updated successfully!',
			data: client,
		})
	} catch (error) {}
}

module.exports = {
	getAllClients,
	getOneClient,
	addNewClient,
	deleteClient,
	updateClient,
}
