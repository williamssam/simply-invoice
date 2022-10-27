import Link from 'next/link'
import { Customer } from '../assets/icons/Customer'
import { Dashboard } from '../assets/icons/Dashboard'
import { Invoice } from '../assets/icons/Invoice'
import { Report } from '../assets/icons/Report'

export const DashboardHeader = () => {
	return (
		<header className='col-span-1 py-6 px-4 z-50 font-figtree'>
			<nav className='bg-neutral shadow-xl h-full flex flex-col justify-between rounded-xl p-10 '>
				<div>
					<h1 className='font-sora text-3xl'>SimInv</h1>

					<ul className='flex flex-col gap-4 text-gray-500 mt-8'>
						<li className='py-2 px-4 bg-other-black text-neutral rounded-md drop-shadow'>
							<Link href='/dashboard'>
								<a className='flex items-center gap-2'>
									<Dashboard />
									<span>Dashboard</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href='/dashboard/customers'>
								<a className='flex items-center gap-2'>
									<Customer />
									<span>Customers</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href='/'>
								<a className='flex items-center gap-2'>
									<Invoice />
									<span>Invoices</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href='/'>
								<a className='flex items-center gap-2'>
									<Report />
									<span>Reports</span>
								</a>
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<p>Logout</p>

					<p className='bg-main-black text-neutral py-3 px-5 mt-10 text-sm flex flex-col rounded-md'>
						<span className='text-xs'>Created By</span>
						<span className='font-bold'>Williams Samuel</span>
					</p>
				</div>
			</nav>
		</header>
	)
}
