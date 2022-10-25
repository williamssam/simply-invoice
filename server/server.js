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
app.use('/api/clients', clientsRoutes)
app.use('/api/invoice', invoiceRoutes)

// start server
mongoose.connect(process.env.MONGO_URI).then(() => {
	app.listen(process.env.PORT, () => {
		console.log(
			`🎉 Server connected to DB and started on port ${process.env.PORT}`
		)
	}),
		err => console.error(err)
})
