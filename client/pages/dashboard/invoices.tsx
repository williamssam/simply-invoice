import Head from 'next/head'
import { ReactElement } from 'react'
import { DashboardLayout } from '../../components/DashboardLayout'

const Invoices = () => {
	return (
		<>
			<Head>
				<title>Invoice | Simply Invoice</title>
			</Head>
			<div>
				<h2>Invoices</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
					similique laboriosam neque cumque quaerat nam distinctio officiis cum
					fugiat! Minima.
				</p>
			</div>
		</>
	)
}

Invoices.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout>{page}</DashboardLayout>
}

export default Invoices
