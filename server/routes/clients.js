const express = require('express')
const {
	getAllClients,
	addNewClient,
	getOneClient,
	deleteClient,
	updateClient,
} = require('../controller/clientsController')

const router = express.Router()

/*
  Routes to create:
  - Create new clients - requiure their name, email, phone-number, logo link(or upload logo)*, company name, userId
  - get all clients
  - get single client* (might handle this in the frontend)
*/

router.get('', getAllClients)
router.post('', addNewClient)
router.get('/:id', getOneClient)
router.delete('/', deleteClient)
router.patch('/:id', updateClient)

module.exports = router
