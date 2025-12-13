import React, { useEffect, useState } from 'react';
import { dummyResumeData } from '../assets/assets';
import { FilePenLineIcon, LoaderCircleIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloudIcon, XIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import api from '../configs/api.js';
import pdfToText from 'react-pdftotext'

const Dashboard = () => {

  const { user, token } = useSelector(state => state.auth)

  const [allResumes, setAllResumes] = useState([]);
  const [showCreateResume, setshowCreateResume] = useState(false);
  const [ShowUploadResume, setShowUploadResume] = useState(false);
  const [title, setTitle] = useState("");
  const [resume, setResume] = useState(null);
  const [editResumeId, setEditResumeId] = useState('');
  const [isLoadind, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const loadAllResumes = async () => {
    try {

      const { data } = await api.get('/api/users/resumes', {headers:  {
        Authorization: token }})
        setAllResumes(data.resumes)

    } catch (error) {

      toast.error(error?.response?.data?.message || error.message)
    }
  };

  const createResume = async (event) => {
    try {
      event.preventDefault()
      const {data} = await api.post('/api/resumes/create', {title}, {headers:  {
        Authorization: token }})
        setAllResumes([...allResumes, data.resume])
        setTitle('')
        setshowCreateResume(false)
        navigate(`/app/builder/${data.resume._id}`)
      
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)

    }
  };

  const uploadResume = async (event) => {
    event.preventDefault();
    setIsLoading(true)

    try {
      const resumeText = await pdfToText(resume)
      const {data} = await api.post('/api/ai/upload-resume', {title, resumeText}, {headers:  {
        Authorization: token }})
        setTitle('')
        setResume(null)
        setShowUploadResume(false)
        navigate(`/app/builder/${data.resumeId}`)

    } catch (error) {

      toast.error(error?.response?.data?.message || error.message) 
    }
    setIsLoading(false)
  }

  const editTitle = async (event) => {
    try {

          event.preventDefault();
          const {data} = await api.put('/api/resumes/update', {resumeId: editResumeId, resumeData: { title }}, {headers:  {
          Authorization: token }})
          setAllResumes(allResumes.map(resume => resume._id === editResumeId ? { ...resume, title } : resume))
            setTitle('')
            setEditResumeId('')
            toast.success(data.message)

    } catch (error) {

      toast.error(error?.response?.data?.message || error.message) 

    }

  }

  const deleteResume = async (resumeId) => {

    try {
          const confirm = window.confirm('Are you sure you to delete this resume !')
        if(confirm){
          const {data} = await api.delete(`/api/resumes/delete/${resumeId}`,{headers:  {
            Authorization: token }})
            setAllResumes(allResumes.filter(resume => resume._id !== resumeId))
            toast.success(data.message)

        }

    } catch (error) {

        toast.error(error?.response?.data?.message || error.message) 

    }
  
  }

  useEffect(() => {
    loadAllResumes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-28">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-2xl font-semibold text-gray-800">
          Welcome, <span className="text-indigo-600">Benomar Aymane</span>
        </p>

        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => setshowCreateResume(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all"
          >
            <PlusIcon size={18} />
            <span>Create Resume</span>
          </button>

          <button
            onClick={() => setShowUploadResume(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-gray-700 font-medium rounded-xl shadow-md hover:bg-gray-100 hover:shadow-lg transition-all border"
          >
            <UploadCloudIcon size={18} />
            <span>Upload Existing</span>
          </button>
        </div>
      </div>

      <hr className="border-gray-300 mx-4 my-6" />

      {/* Resume Cards */}
      <div className="pl-6 grid grid-cols-2 sm:flex flex-wrap gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allResumes.map((resume, index) => {
            return (
              <div
                onClick={() => navigate(`/app/builder/${resume._id}`)}
                key={index}
                className="
                  relative w-full sm:max-w-48 h-56 flex flex-col items-center justify-center rounded-lg
                  gap-3 border group hover:shadow-lg transition-all duration-300 cursor-pointer
                  p-4
                "
              >

                {/* Top right icons - show on hover */}
                <div className="absolute top-2 right-2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-all"
                  onClick={e => e.stopPropagation()}
                >
                  <button className="p-1.5 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all shadow-sm hover:shadow-md">
                    <PencilIcon size={14} className="text-gray-700" onClick={() => {setEditResumeId(resume._id); 
                      setTitle(resume.title)}}/>
                  </button>
                  <button className="p-1.5 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all shadow-sm hover:shadow-md">
                    <TrashIcon  onClick={() => deleteResume(resume._id)} size={14} className="text-gray-700" />
                  </button>
                </div>

                {/* Title Row - centered */}
                <div className="flex flex-col items-center justify-center gap-2 w-full h-full">
                  <FilePenLineIcon className="text-[#3902FF] size-8 group-hover:scale-105 transition-all" />
                  <p className="text-sm font-semibold text-center truncate w-full">{resume.title}</p>
                </div>

                {/* Updated Date */}
                <div className="mt-auto pt-3 border-t border-gray-100 w-full">
                  <p className="text-gray-500 text-xs text-center">
                    Updated on {new Date(resume.updatedAt).toLocaleDateString()}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Popups */}
      {showCreateResume && (
        <form
          onSubmit={createResume}
          onClick={() => setshowCreateResume(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-10 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl relative animate-slideUp"
          >
            <XIcon
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
              onClick={() => {
                setshowCreateResume(false);
                setTitle('');
              }}
            />

            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Create a Resume
            </h2>

            <label className="block mb-3 text-gray-700 font-medium">
              Resume Title
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Enter your resume title"
              required
              className="
                w-full px-4 py-3 rounded-xl border border-gray-300 
                focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                outline-none text-gray-800 shadow-sm
              "
            />

            <button
              type="submit"
              className="
                w-full mt-6 py-3 rounded-xl text-white font-semibold 
                bg-[#3902FF]
                shadow-md hover:shadow-lg transition-all hover:bg-[#2a02cc]
              "
            >
              Create Resume
            </button>
          </div>
        </form>
      )}

      {ShowUploadResume && (
        <form
          onSubmit={uploadResume}
          onClick={() => setShowUploadResume(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-10 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl relative animate-slideUp"
          >
            <XIcon
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
              onClick={() => {
                setShowUploadResume(false);
                setTitle('');
              }}
            />

            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Upload Resume
            </h2>

            <label className="block mb-3 text-gray-700 font-medium">
              Resume Title
            </label>

            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Enter your resume title"
              required
              className="
                w-full px-4 py-3 rounded-xl border border-gray-300 
                focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                outline-none text-gray-800 shadow-sm
              "
            />

            <label
              htmlFor="resume-input"
              className="
                mt-5 w-full border border-dashed border-gray-300 rounded-xl 
                flex flex-col items-center justify-center py-8 cursor-pointer
                hover:bg-gray-50 transition-all
              "
            >
              {resume ? (
                <p className="text-gray-700 font-medium">{resume.name}</p>
              ) : (
                <>
                  <UploadCloudIcon className="size-11 transition-all duration-300 p-2.5
                  bg-gradient-to-br from-purple-300 to-purple-500 text-white rounded-full" />
                  <p className="text-gray-700 font-medium">Click to upload</p>
                  <p className="text-gray-400 text-sm mt-1">PDF</p>
                </>
              )}
            </label>

            <input
              id="resume-input"
              type="file"
              accept='.pdf'
              className="hidden"
              onChange={(e) => setResume(e.target.files?.[0] || null)}
            />

            <button
              disabled={isLoadind}
              type="submit"
              className="
                w-full mt-6 py-3 rounded-xl text-white font-semibold 
                bg-[#3902FF]
                shadow-md hover:shadow-lg transition-all hover:bg-[#2a02cc]
                flex items-center justify-center gap-2
              "
            >
              {isLoadind && <LoaderCircleIcon className='animate-spin size-4 text-white' />}
              {isLoadind ? 'Uploading...' : 'Upload Resume'}
            </button>
          </div>
        </form>
      )}

      {editResumeId && (
        <form
          onSubmit={editTitle}
          onClick={() => setEditResumeId('')}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-10 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl relative animate-slideUp"
          >
            <XIcon
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
              onClick={() => {
                setEditResumeId('');
                setTitle('');
              }}
            />

            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Edit Resume Title
            </h2>

            <label className="block mb-3 text-gray-700 font-medium">
              Edit Resume Title
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Enter your resume title"
              required
              className="
                w-full px-4 py-3 rounded-xl border border-gray-300 
                focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                outline-none text-gray-800 shadow-sm
              "
            />

            <button
              type="submit"
              className="
                w-full mt-6 py-3 rounded-xl text-white font-semibold 
                bg-[#3902FF]
                shadow-md hover:shadow-lg transition-all hover:bg-[#2a02cc]
              "
            >
              Update
            </button>
          </div>
        </form>
      )}

    </div>
  );
};

export default Dashboard;
