const express = require('express')

const router = express.Router()

/*
  Routes to create:
  - Create new clients - requiure their name, email, phone-number, logo link(or upload logo)*, company name, userId
  - get all clients
  - get single client* (might handle this in the frontend)
*/

router.get('/all-clients', (req, res) => {
	const { name, email, phone_number, company_name, compnay_address } = req.body
})

module.exports = router
