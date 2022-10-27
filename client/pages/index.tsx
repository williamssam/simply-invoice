import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Simply Invoice - Home</title>
			</Head>
			<header className='text-neutral absolute top-0 z-50 font-figtree'>
				<nav className='flex items-center justify-between w-screen px-16 pt-6'>
					<h1 className='font-sora text-xl'>SimpInv</h1>

					<ul className='flex items-center gap-8 text-sm'>
						<li>Features</li>
						<li>Log in</li>
						<li className='py-2 px-6 border border-black-btn rounded-md'>
							Sign up
						</li>
						{/* <li>Github</li> */}
						{/* <li>
							<button className='p-2 bg-other-black rounded-full hover:bg-gray-500'>
								<Sun />
							</button>
						</li> */}
					</ul>
				</nav>
			</header>
			<main className='relative flex items-center justify-center flex-col bg-main-black h-screen font-figtree'>
				<a
					href='https://williamssam.netlify.app/'
					target='_blank'
					rel='noreferrer'
					className='text-yellow-200 transition-colors hover:text-yellow-300'>
					Built by Williams Samuel
				</a>
				<h1 className='font-sora text-5xl text-neutral pt-2'>
					SimpInv, Simply Invoice
				</h1>
				<p className='text-dark-clr w-[500px] pt-4 text-center leading-relaxed text-sm'>
					Invoicing app for freelancers and small business. Send Invoice to
					clients and receive payment automatically.{' '}
					<strong>Is that not cool? 🤗🤩</strong>
				</p>

				<div className='flex items-center text-sm'>
					<button className='mt-10 py-3 px-14 bg-black-btn rounded-md text-neutral shadow-lg transition-transform active:scale-95'>
						Get Started
					</button>
					<button className='mt-10 py-3 px-14 text-neutral'>
						Download App
					</button>
				</div>
			</main>
		</>
	)
}

export default Home
