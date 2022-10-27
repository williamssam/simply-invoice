import Link from 'next/link'

const NotFound = () => {
	return (
		<div className='flex flex-col items-center justify-center bg-main-black min-h-screen'>
			<p className='text-yellow-200 uppercase tracking-widest font-sora text-sm transition-colors'>
				Simply Invoice
			</p>
			<h2 className='text-5xl text-neutral font-sora pt-3'>
				404 - Looks like you are lost
			</h2>
			<p className='text-[#9a9999] pt-4 w-[550px] text-center'>
				Maybe this page use to exist or you just spelled something wrong.
				Chances are you spelled something wrong, so can you double check the
				URL?
			</p>

			<Link href='/'>
				<a className='bg-black-btn py-3 px-8 mt-8 text-neutral rounded-md shadow-lg transition-transform active:scale-95'>
					Return to Homepage
				</a>
			</Link>
		</div>
	)
}

export default NotFound
