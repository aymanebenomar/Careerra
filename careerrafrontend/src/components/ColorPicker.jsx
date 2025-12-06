import { color } from 'framer-motion';
import { Check, Palette } from 'lucide-react';
import React, { useState } from 'react'

const ColorPicker = ({ selectedColor, onchange }) => {
	
	const colors = [
		{ name: "Blue", value: "#3902FF" },
		{ name: "Red", value: "#FF0000" },
		{ name: "Green", value: "#00FF00" },
		{ name: "Orange", value: "#FFA500" },
		{ name: "Purple", value: "#800080" },
		{ name: "Teal", value: "#008080" },
		{ name: "Yellow", value: "#FFFF00" },
		{ name: "Pink", value: "#FF69B4" },
		{ name: "Brown", value: "#A52A2A" },
		{ name: "Gray", value: "#808080" }
	];

	const [isOpen, setIsOpen] = useState(false);

  return (
	<div className='relative'>
		<button onClick={() => setIsOpen(!isOpen)} className='flex items-center gap-1 text-sm text-yellow-500 bg-gradient-br from-blue-50 to-blue-300
		ring-blue-50 hover:ring transition-all px-3 py-2 rounded-lg'>
			<Palette size={16} /> <span className='max-sm:hidden'>Accent</span>
		</button>
		{
			isOpen && (
				<div className='grid grid-cols-4 w-60 gap-2 absolute top-full left-0 right-0 p-3 mt-2
				z-10 bg-white rounded-md border border-gray-200 shadow-sm'>
					{colors.map((color) => (
						<div key={color.key} className='relative cursor-pointer group flex flex-col' onClick={() => onchange(color.value)}>
							<div className='w-12 h-12 rounded-full border-2 border-transparent group-hover:border-black/25 transition-colors' 
							style={{backgroundColor : color.value}}>
							</div>
							{selectedColor === color.value && (
								<div className='absolute top-0 left-0 right-0 bottom-4.5 flex items-center justify-center'>
									<Check className='size-5 text-white'/>
								</div>
							)}
							<p className='text-xs text-center mt-1 text-gray-500'>
								{color.name}
							</p>
						</div>
					))}
				</div>
			)
		}
	</div>
  )
}

export default ColorPicker