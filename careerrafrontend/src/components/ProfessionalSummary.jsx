import { Loader2, Sparkles } from 'lucide-react'
import React, { use, useState } from 'react'
import { useSelector } from 'react-redux'
import api from '../configs/api';
import toast from 'react-hot-toast';

const ProfessionalSummary = ({data, onChange, setResumeData}) => {
	

	const {token} = useSelector(state => state.auth)
	console.log("Token from Redux:", token)
	const [isGenerating, setIsGenerating] = useState(false)

	
	const generateSummary = async () => {
		try {
			setIsGenerating (true)
			const prompt = `enhance my profetional summary "${data}"`;
			const response = await api.post('/api/ai/enhance-pro-sum', {userContent: prompt}, {headers: { Authorization: token}})
			setResumeData (prev => ({...prev, professional_summary: response.data.enhancedContent}))
		} catch (error) {
			toast.error(error?.response?.data?.message || error.message)
		}
	}


  return (
	<div className='space-y-4'>
		<div className='flex items-center justify-between'>
			<div>
				<h3 className='flex items-center gap-2 text-lg font-semibold text-gray-800'> Professional Summary </h3>
				<p className='text-sm text-gray-500'> Add summary for your Resume here</p>
			</div>
				<button 
				disabled={isGenerating}
				onClick={generateSummary}
				className="flex items-center gap-1 px-2 py-1 text-xs bg-blue-300 rounded hover:bg-blue-200 transition-colors">
					{isGenerating ? (<Loader2 className='size-4 animate-spin' />) : (<Sparkles className="w-3 h-3" />)}
					{isGenerating ? "Enhancing..." : "AI Enhance"}

				</button>
		</div>
		<div className='mt-6'>
			<textarea value={data || ""} rows={7} onChange={(e) => onChange(e.target.value)}  
				className='w-full p-3 px-4 mt-2 border text-sm border-gray-300 rounded-lg focus:ring focus:ring-blue-500 
				focus:border-blue-500 outline-none transition-colors resize-none' placeholder='Write a Compelling professional summary that highlights
				your key strengths and Career objectives ...'/>
				<p className='text-xs text-gray-500 max-w-4/5 mx-auto text-center'> 
				Tip : Keep it concise (3 - 4 sentences) And focus on your most relevent achievments and Skills</p>
		</div>
	</div>
  )
}

export default ProfessionalSummary