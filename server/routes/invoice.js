const express = require('express')
const {
	createNewInvoice,
	getAllInvoice,
	getClientInvoice,
	deleteInvoice,
} = require('../controller/invoiceController')

const router = express.Router()

router.post('', createNewInvoice)
router.get('', getAllInvoice)
router.get('/:id', getClientInvoice)
router.delete('/:id', deleteInvoice)

module.exports = router
