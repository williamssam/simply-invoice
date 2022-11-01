import Head from 'next/head'
import { ReactElement } from 'react'
import { DashboardLayout } from '../../components/DashboardLayout'

const Reports = () => {
	return (
		<>
			<Head>
				<title>Reports | Simply Invoice</title>
			</Head>
			<div>
				<h2>Reports</h2>
			</div>
		</>
	)
}

Reports.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout>{page}</DashboardLayout>
}

export default Reports
