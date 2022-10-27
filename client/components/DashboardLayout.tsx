import { DashboardHeader } from './DashboardHeader'

interface DashboardLayoutProps {
	children: React.ReactNode
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
	return (
		<section className='grid grid-cols-5 min-h-screen bg-gray-100 relative'>
			{/* <header className='bg-gray-900 w-full h-28'></header> */}
			<DashboardHeader />
			<main className='col-span-4 p-10'>{children}</main>

			{/* decoration */}
			<div className='bg-gray-900 w-full h-32 absolute top-0'></div>
		</section>
	)
}
