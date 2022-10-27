import { ReactElement } from 'react'
import { DashboardLayout } from '../../components/DashboardLayout'
import { NextPageWithLayout } from '../_app'

const Dashboard: NextPageWithLayout = () => {
	return (
		<div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
				minima.
			</p>
		</div>
	)
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout>{page}</DashboardLayout>
}

export default Dashboard
