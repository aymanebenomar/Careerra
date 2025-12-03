import React, { useEffect, useState } from 'react';
import { dummyResumeData } from '../assets/assets';
import { FilePenLineIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloudIcon } from 'lucide-react';

const Dashboard = () => {
  const colors = ["#9333ea", "#d97706", "#3902FF"];
  const [allResumes, setAllResumes] = useState([]);
  const [showCreateResume, setshowCreateResume] = useState(false);
  const [ShowUploadResume, setShowUploadResume] = useState(false);

  const loadAllResumes = async () => {
    setAllResumes(dummyResumeData);
  };

  useEffect(() => {
    loadAllResumes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-xl font-medium text-gray-700">Welcome, Benomar Aymane</p>

        <div className="flex gap-4 flex-wrap">
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">
            <PlusIcon size={18} />
            <span>Create Resume</span>
          </button>

          <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
            <UploadCloudIcon size={18} />
            <span>Upload Existing</span>
          </button>
        </div>
      </div>

      <hr className="border-gray-300 mx-4" />

      {/* Resume Cards */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allResumes.map((resume, index) => {
          const baseColor = colors[index % colors.length];
          return (
            <div
              key={index}
              className="relative flex flex-col justify-between p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              style={{
                background: `linear-gradient(135deg, ${baseColor}20, ${baseColor}50)`,
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <FilePenLineIcon size={24} className="text-white" />
                <h2 className="text-white font-semibold text-lg">{resume.title}</h2>
              </div>

              <p className="text-white/80 text-sm mb-4">
                Updated on {new Date(resume.updatedAt).toLocaleDateString()}
              </p>

              <div className="absolute top-3 right-3 flex gap-2">
                <button className="p-1 bg-white/20 rounded hover:bg-white/30 transition-colors">
                  <PencilIcon size={16} className="text-white" />
                </button>
                <button className="p-1 bg-white/20 rounded hover:bg-white/30 transition-colors">
                  <TrashIcon size={16} className="text-white" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className=''>
        
      </div>
    </div>
  );
};

export default Dashboard;
