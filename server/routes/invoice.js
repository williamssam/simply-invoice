const express = require('express')
const {
	createNewInvoice,
	getAllInvoice,
	getClientInvoice,
	deleteInvoice,
} = require('../controller/invoiceController')

const router = express.Router()

router.post('/', createNewInvoice)
router.get('', getAllInvoice)
router.get('/', getClientInvoice)
router.delete('/', deleteInvoice)

module.exports = router
