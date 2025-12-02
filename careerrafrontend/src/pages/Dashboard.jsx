import React, { use, useEffect, useState } from 'react'
import { dummyResumeData } from '../assets/assets';
import { FilePenLineIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloudIcon } from 'lucide-react';
import { color } from 'framer-motion';

const Dashboard = () => {

	const colors = ["#9333ea", "#d97706"]
	const [allResumes, setAllResumes] = useState([])
	const loadAllResumes = async () => {
		setAllResumes(dummyResumeData)
	}
	
	useEffect(() => {
		loadAllResumes()
	},[]);
  return (
	<div>
		<div className='max-w-7xl mx-auto px-4 py-8'>
			<p>Welcome , Benomar aymane</p>
			<div className='flex gap-4'>
					<button className=''>
						<PlusIcon className='' />
						<p className=''>Create Resume</p>
					</button>
				<div className='flex gap-4'>
					<button className=''>
						<UploadCloudIcon className='' />
						<p className=''>Upload Existing</p>
					</button>
				</div> 
			</div>
		</div>

		<hr className=''/>

		<div className=''>
			{
				allResumes.map((resume, index) => {
					const basecolor = colors[index % colors.length];
					return (
						<button key={index} className='' style={{background: `linear-gradint(135deg, ${basecolor}10, )`}}>
							<FilePenLineIcon className='' />
							<p className=''> {resume.title}</p>
							<p className=''>Updated on {new Date(resume.updatedAt).toLocaleDateString()}</p>
							<div className=''>
								<TrashIcon className='' />
								<PencilIcon />
							</div>
						</button>
					)
				}
				)
			}
		</div>
	</div>
  )
}

export default Dashboard