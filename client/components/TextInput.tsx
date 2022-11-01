import { ReactElement } from 'react'

interface TextInputProps {
	type: string
	label: string
	icon: ReactElement
}

export const TextInput = ({ type, label, icon }: TextInputProps) => {
	return (
		<div>
			<div>
				<label className='flex items-center text-sm text-gray-700'>
					<span className='scale-75 text-gray-400'>{icon}</span>
					<span>{label}</span>
				</label>
				<input
					type='text'
					className='mt-2 py-4 px-4 w-full font-bold font-figtree text-gray-900 bg-gray-200 focus:outline-none rounded-md focus:ring-2 focus:ring-main-black'
				/>
			</div>

			{/* <p className='text-xs text-red-700 mt-1 font-bold'>
				Email address is invalid
			</p> */}
		</div>
	)

	//
}
