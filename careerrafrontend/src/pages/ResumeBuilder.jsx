import React, { useEffect, useState } from 'react'
import { useParams, Link, data } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets'
import { ArrowLeftIcon, Briefcase, ChevronLeft, ChevronRight, DownloadIcon, EyeIcon, EyeOffIcon, FileText, FolderIcon, GraduationCap, Share2Icon, Sparkles, User } from 'lucide-react'
import Dashboard from './Dashboard';
import PersonalinfoForm from '../components/PersonalinfoForm';
import Resumepreview from '../components/Resumepreview';
import TemplateSelecter from '../components/TemplateSelecter';
import ColorPicker from '../components/ColorPicker';
import ProfessionalSummary from '../components/ProfessionalSummary';
import ExperienceForm from '../components/ExperienceForm';
import EducationForm from '../components/EducationForm';
import ProjectForm from '../components/ProjectForm';
import SkillsForm from '../components/SkillsForm';

const ResumeBuilder = () => {

	const { resumeId } = useParams()
	
	const [resumeData, setResumeData] = useState({
		_id: '',
		title: '',
		personal_info:{},
		professional_summary: "",
		experience: [],
		education: [],
		project: [],
		skills: [],
		template: "classic",
		accent_color: "#3B82F6",
		public: false,
	})

	const loadExistingResume = async () => {
		const resume = dummyResumeData.find(resume => resume._id === resumeId)
		if(resume){
			setResumeData(resume)
			document.title = resume.title
		}
	}

	const [activeSectionIndex, setActiveSectionIndex] = useState(0)
	const [removeBackground, setRemoveBackground] = useState(false);

	const sections = [
		{id: "personal", name: "Personal Info", icon: User},
		{id: "summary", name: "summay", icon: FileText},
		{id: "experience", name: "Experience", icon: Briefcase},
		{id: "education", name: "Education", icon: GraduationCap},
		{id: "projects", name: "Projects", icon: FolderIcon},
		{id: "skills", name: "Skill", icon: Sparkles}, 
	]

	const activeSection = sections[activeSectionIndex]

	useEffect(() => {
		loadExistingResume()
	}, [])

	const ChangeResumeVisibility = async () => {
		setResumeData({...resumeData, public: !resumeData.public})
	}

	const HandelShare = () => {
		const frontendUrl = window.location.href.split('/app/')[0];
		const resumeUrl = frontendUrl + '/view/' + resumeId;

		if(navigator.share) {
			navigator.share({url: resumeId, text: "My Resume", })
		} else {
			alert('Share not Supported on this Browser')
		}
	}

	const downloadResume = () => {
		window.print();
	}  

  return (
	<div className='pt-20'>
		<div className='max-w-7xl mx-auto px-4 py-6'>
			<Link to={'/app'} className='inline-flex gap-2 items-center text-slate-500
			hover:text-slate-700 transition-all'>
				<ArrowLeftIcon  className='size-4'/>
				Back to Dashboard
			</Link>
		</div>

		<div className='max-w-7xl mx-auto px-4 pb-8'>
			<div className='grid lg:grid-cols-12 gap-8'>
				{/* Left Panel - Form */}
				<div className='relative lg:col-span-5 rounded-lg overflow-hidden'>
					<div className='bg-white rounded-lg shadow-sm border border-grey-200 p-6 pt-1'>
						{/* Progress barre - using activeSectionIndex */}
						<hr  className='absolute top-0 left-0 right-0 border-2 border-gray-200'/>
						<hr className='absolute top-0 left-0 h-1 bg-gradient-to-r
						from-green-400 to-green-700 border-none transition-all duration-2000' 
						style={{width: `${activeSectionIndex * 100 / (sections.length - 1)}%`}} />

						{/* Section Navigation */}
						<div className='flex justify-between items-center mb-6 border-b border-gray-300 py-1'>
							<div className='flex justify-between items-center mb-6 border-b border-gray-300 py-1'>
								<TemplateSelecter selectedTemplate={resumeData.template}
									onChange={(template) => setResumeData(prev => ({...prev, template}))} />
								<ColorPicker selectedColor={resumeData.accent_color} onchange={(color) => setResumeData((prev) => 
									({...prev, accent_color:color}))}/>
							</div>
							<div className='flex items-center'>
								{activeSectionIndex !== 0 && (
									<button onClick={() => setActiveSectionIndex((prevIndex) => Math.max(prevIndex - 1, 0))} 
									className='flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600
									hover:bg-gray-50 transition-all' disabled={activeSectionIndex === 0}>
										<ChevronLeft className='size-4' /> Previous
									</button>
								)}
								<button onClick={() => setActiveSectionIndex((prevIndex) => Math.min(prevIndex + 1, sections.length - 1))} 
									className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50
									transition-all ${activeSectionIndex === sections.length - 1 && 'opacity-50'}`} 
									disabled={activeSectionIndex === sections.length - 1}>
										<ChevronRight className='size-4' /> Next
									</button>	

							</div>
						</div>

						{/* Form Content */}
						<div className='space-y-6'>
							{
								activeSection.id === 'personal' && (
									<PersonalinfoForm  data={resumeData.personal_info} onChange={(data) => 
										setResumeData(prev => ({...prev, personal_info:data}))}
										removeBackground={removeBackground}
										setRemoveBackground={setRemoveBackground}
										/>
								)
							}
							{
								activeSection.id === 'summary' && (
									<ProfessionalSummary data={resumeData.professional_summary} onChange={(data) =>
										setResumeData(prev => ({...prev, professional_summary:data}))
									}	setResumeData={setResumeData} />
								)
							}
							{
								activeSection.id === 'experience' && (
									<ExperienceForm data={resumeData.experience} onChange={(data) =>
										setResumeData(prev => ({...prev, experience:data}))
									}	setResumeData={setResumeData} />
								)
							}
							{
								activeSection.id === 'education' && (
									<EducationForm data={resumeData.education} onChange={(data) =>
										setResumeData(prev => ({...prev, education:data}
										))} />
								)
							}
							{
								activeSection.id === 'projects' && (
									<ProjectForm data={resumeData.project} onChange={(data) =>
										setResumeData(prev => ({...prev, project:data}))
									}/>
								)
							}
							{
								activeSection.id === 'skills' && (
									<SkillsForm data={resumeData.skills} onChange={(data) => 
										setResumeData(prev => ({...prev, skills:data}))
									} />
								)
							}
						</div>
						<button className='bg-gradient-to-br from-green-100 to-green-200 ring-green-300
						text-green-600 ring hover:ring-green-400 transition-all rounded-md px-6 py-2 mt-6 text-sm'>
							Save Changes
						</button>
					</div>
				</div>

				{/* Right Panel - Preview */}
				<div className='lg:col-span-7 max-lg:mt-6 px-4'>
					<div className='relative w-full'>
						<div className='absolute bottom-3 left-0 right-0 flex items-center justify-end gap-2'>
							{resumeData.public && (
								<button onClick={HandelShare} className='flex items-center p-2 px-4 gap-2 text-xs bg-gradient-to-br from-blue-100 to-blue-300
								rounded-lg ring-blue-300 hover:ring transition-colors'>
									<Share2Icon className='size-4'/> Share
								</button>
							)}
							<button onClick={ChangeResumeVisibility} className='flex items-center gap-2 px-6 py-2 text-xs bg-gradient-to-br from-orange-200 
							to-orange-300 text-white rounded-lg ring-orange-300 hover:ring transition-colors'>
								{resumeData.public ? <EyeIcon className='size-4' /> : <EyeOffIcon className='size-4'/>}
								{resumeData.public ? 'Public' : 'Private'}
							</button>
							<button onClick={downloadResume} className='flex items-center gap-2 px-6 py-2 text-xs bg-gradient-to-br from-green-200 
							to-green-300 text-white rounded-lg ring-green-300 hover:ring transition-colors'>
								<DownloadIcon className='size-4' /> Download
							</button>
						</div>
					</div>

					<Resumepreview data={resumeData} template={resumeData.template} accentColor={resumeData.accent_color} />

				</div>
			</div>
		</div>
	</div>
  )
}

export default ResumeBuilder