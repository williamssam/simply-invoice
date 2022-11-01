import Link from 'next/link'
import { useRouter } from 'next/router'
import { Customer } from '../assets/icons/Customer'
import { Dashboard } from '../assets/icons/Dashboard'
import { Invoice } from '../assets/icons/Invoice'
import { Report } from '../assets/icons/Report'

export const DashboardHeader = () => {
	const navs = [
		{
			id: 1,
			name: 'Dashboard',
			icon: <Dashboard />,
			url: '/dashboard/home',
		},
		{
			id: 2,
			name: 'Customers',
			icon: <Customer />,
			url: '/dashboard/customers',
		},
		{
			id: 3,
			name: 'Invoices',
			icon: <Invoice />,
			url: '/dashboard/invoices',
		},
		{
			id: 4,
			name: 'Reports',
			icon: <Report />,
			url: '/dashboard/reports',
		},
	]
	const router = useRouter()
	return (
		<header className='col-span-1 py-6 px-4 z-50 font-figtree'>
			<nav className='bg-neutral shadow-xl h-full flex flex-col justify-between rounded-xl p-10 '>
				<div>
					<h1 className='font-sora text-3xl'>SimInv</h1>

					<ul className='flex flex-col gap-4 text-gray-500 mt-8'>
						{navs?.map(({ name, icon, id, url }) => (
							<li key={id}>
								<Link href={url}>
									<a
										className={`flex items-center gap-2 py-2 px-4 ${
											router.pathname === url
												? 'bg-other-black text-neutral rounded-md drop-shadow'
												: 'text-gray-500'
										}`}>
										{icon}
										<span>{name}</span>
									</a>
								</Link>
							</li>
						))}
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
