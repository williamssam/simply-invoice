const express = require('express')
const {
	getAllClients,
	addNewClient,
	getOneClient,
	deleteClient,
	updateClient,
} = require('../controller/clientsController')
const { check } = require('express-validator')

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
		.isEmpty()
		.withMessage('Client email cannot be empty')
		.isEmail()
		.withMessage('Email address is invalid')
		.trim()
		.normalizeEmail(),
	check('phoneNumber')
		.not()
		.isEmpty()
		.withMessage('Phone number cannot be empty')
		.isLength({ min: 13 })
		.withMessage('Phone number cannot have more than 11 digits.')
		.trim()
		.escape(),
	check('organisation')
		.not()
		.isEmpty()
		.withMessage('Company name cannot be empty')
		.isLength({ min: 3 })
		.withMessage('Company Name must have minimum length of 3')
		.trim()
		.escape(),
	check('organisationAddress')
		.not()
		.isEmpty()
		.withMessage('Company address cannot be empty')
		.isLength({ min: 3 })
		.withMessage('Company Address must have minimum length of 3')
		.trim()
		.escape(),
]

router.get('/', getAllClients)
router.post('/', clientValidation, addNewClient)
router.get('/:id', getOneClient)
router.delete('/', deleteClient)
router.patch('/:id', updateClient)

module.exports = router
