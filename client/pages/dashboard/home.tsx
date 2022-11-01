import Head from 'next/head'
import { ReactElement } from 'react'
import { DashboardLayout } from '../../components/DashboardLayout'
import { NextPageWithLayout } from '../_app'

const Dashboard: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>SimplyInvoice - Dashboard</title>
			</Head>
			<section>
				<header>
					{/* breadcrumb */}
					<p className='text-gray-400 text-sm'>
						dashboard / <span className='text-gray-500 font-bold'>home</span>
					</p>
					<h2 className='font-sora text-4xl pt-1'>Dashboard</h2>
				</header>

				{/* overview */}
				<ul className='flex items-center justify-between mt-10 py-9 px-16 bg-main-black shadow-md text-neutral rounded-xl'>
					<li>
						<h3 className='text-sm font-bold text-gray-400'>Total Amount</h3>
						<p className='text-3xl font-bold font-figtree pt-1'>N158,000</p>
					</li>
					<li className='w-[0.1px] h-16 bg-gray-600'></li>
					<li>
						<h3 className='text-sm font-bold text-gray-400'>Invoices</h3>
						<p className='text-3xl font-bold font-figtree pt-1'>200,589</p>
					</li>
					<li className='w-[0.1px] h-16 bg-gray-600'></li>
					<li>
						<h3 className='text-sm font-bold text-gray-400'>Customers</h3>
						<p className='text-3xl font-bold font-figtree pt-1'>100,423</p>
					</li>
					<li className='w-[0.1px] h-16 bg-gray-600'></li>
					<li>
						<h3 className='text-sm font-bold text-gray-400'>Paid</h3>
						<p className='text-3xl font-bold font-figtree pt-1'>N100,000</p>
					</li>
				</ul>

				{/* recent invoices */}
				<div className='mt-10'>
					<header className='grid grid-cols-5 py-1 px-6'>
						<h4 className='font-bold text-gray-500'>Invoice No</h4>
						<h4 className='font-bold text-gray-500'>Date created</h4>
						<h4 className='font-bold text-gray-500'>Client</h4>
						<h4 className='font-bold text-gray-500'>Amount</h4>
						<h4 className='font-bold text-gray-500'>Status</h4>
					</header>

					<ul className='flex flex-col gap-3 mt-3'>
						<li className='grid grid-cols-5 items-center bg-neutral rounded py-2 px-6'>
							<p>Inv-2005</p>
							<p>3 Jul, 2022</p>
							<p>CodeandWilliams</p>
							<p>N150,000</p>
							<p className='bg-purple-200 w-max px-2 py-1 text-sm text-purple-700 font-bold rounded'>
								Sent
							</p>
						</li>
						<li className='grid grid-cols-5 items-center bg-neutral rounded py-2 px-6'>
							<p>Inv-2005</p>
							<p>3 Jul, 2022</p>
							<p>CodeandWilliams</p>
							<p>N150,000</p>
							<p className='bg-yellow-200 w-max px-2 py-1 text-sm text-yellow-700 font-bold rounded'>
								Pending
							</p>
						</li>
						<li className='grid grid-cols-5 items-center bg-neutral rounded py-2 px-6'>
							<p>Inv-2005</p>
							<p>3 Jul, 2022</p>
							<p>CodeandWilliams</p>
							<p>N150,000</p>
							<p className='bg-green-200 w-max px-2 py-1 text-sm text-green-700 font-bold rounded'>
								Paid
							</p>
						</li>
						<li className='grid grid-cols-5 items-center bg-neutral rounded py-2 px-6'>
							<p>Inv-2005</p>
							<p>3 Jul, 2022</p>
							<p>CodeandWilliams</p>
							<p>N150,000</p>
							<p className='bg-red-200 w-max px-2 py-1 text-sm text-red-700 font-bold rounded'>
								Overdue
							</p>
						</li>
						<li className='grid grid-cols-5 items-center bg-neutral rounded py-2 px-6'>
							<p>Inv-2005</p>
							<p>3 Jul, 2022</p>
							<p>CodeandWilliams</p>
							<p>N150,000</p>
							<p className='bg-green-200 w-max px-2 py-1 text-sm text-green-700 font-bold rounded'>
								Paid
							</p>
						</li>
					</ul>
				</div>
			</section>
		</>
	)
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
	return <DashboardLayout>{page}</DashboardLayout>
}

export default Dashboard
