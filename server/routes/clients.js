const express = require('express')
const {
	getAllClients,
	addNewClient,
	getOneClient,
	deleteClient,
	updateClient,
} = require('../controller/clientsController')
const { check, body } = require('express-validator')
const Clients = require('../model/clientsModel')

const router = express.Router()

let clientValidation = [
	check('name')
		.not()
		.isEmpty()
		.withMessage('Name cannot be empty')
		.isLength({ min: 3 })
		.withMessage('Name must have minimum length of 3')
		.trim()
		.escape(),
	check('email')
		.not()
		.toLowerCase()
		.isEmpty()
		.withMessage('Client email cannot be empty')
		.isEmail()
		.withMessage('Email address is invalid')
		.custom(value => {
			return Clients.findOne({ email: value }).then(email => {
				if (email) {
					throw new Error('Email address already exists 😔')
				}

				return true
			})
		})
		.trim()
		.normalizeEmail(),
	check('phoneNumber')
		.not()
		.isEmpty()
		.withMessage('Phone number cannot be empty')
		.isLength({ min: 11 })
		.withMessage('Phone number cannot have more than 11 digits.')
		.trim()
		.escape(),
	check('organization')
		.not()
		.isEmpty()
		.toLowerCase()
		.withMessage('Oraanization name cannot be empty')
		.isLength({ min: 3 })
		.withMessage('Oraanization Name must have minimum length of 3')
		.custom(value => {
			return Clients.findOne({ organization: value }).then(organization => {
				if (organization) {
					throw new Error('Organization already exists 😔')
				}

				return true
			})
		})
		.trim()
		.escape(),
	check('organizationAddress')
		.not()
		.isEmpty()
		.withMessage('Oraanization address cannot be empty')
		.isLength({ min: 3 })
		.withMessage('Oraanization Address must have minimum length of 3')
		.trim()
		.escape(),
]

router.get('/', getAllClients)
router.post('/', clientValidation, addNewClient)
router.get('/:id', getOneClient)
router.delete('/', deleteClient)
router.patch('/:id', updateClient)

module.exports = router
