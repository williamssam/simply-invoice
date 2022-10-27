import Head from 'next/head'
import { ReactElement } from 'react'
import { DashboardLayout } from '../../components/DashboardLayout'
import { NextPageWithLayout } from '../_app'

const Customers: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Customers | Simply Invoice</title>
			</Head>

			<section>
				<header>
					{/* breadcrumb */}
					<p className='text-gray-400 text-sm'>
						dashboard /{' '}
						<span className='text-gray-500 font-bold'>customers</span>
					</p>
					<h2 className='font-sora text-4xl pt-1'>Customers</h2>
				</header>

				<div className='grid grid-cols-3 mt-6'>
					{/* all clients */}
					<div className='col-span-2'>
						<div>
							<h3 className='font-bold text-xl'>Saved Customers</h3>
							<p className='text-xs text-dark-clr'>
								Click each customer to create a new invoice for that customer
							</p>
						</div>

						<ul>
							<li>
								<h4>Williams Samuel</h4>
								<p>CodeandWilliams</p>
								<p>ghostdeveloper@yopmail.com</p>
								<p>+234 8130578968</p>
								<p>Adeniran Ogunsanya Avenue, Victoria Island, Lagos State.</p>
							</li>
						</ul>
					</div>

					{/* new client */}
					<div className='col-span-1 bg-gray-200 py-4 px-7 rounded-md'>
						<h3 className='font-bold text-xl'>Add new client</h3>
						{/* on click of a add button, show the form */}
					</div>
				</div>
			</section>
		</>
	)
}

Customers.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout>{page}</DashboardLayout>
}

export default Customers
