const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const clientsRoutes = require('./routes/clients')
const invoiceRoutes = require('./routes/invoice')

const app = express()
require('dotenv').config()

// middlewares
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
	next()
})

// routes
app.use('/api/v1/clients', clientsRoutes)
app.use('/api/v1/invoices', invoiceRoutes)

// start server
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log(
				`🎉 Server connected to DB and started on port ${process.env.PORT}`
			)
		})
	})
	.catch(err => console.error(err))
