
import React from 'react';

interface ProfileData {
  name: string;
  registration: string;
  mobile: string;
  linkedinUrl: string;
  cgpa: string;
  profileImage: string;
}

interface ProfileCardProps {
  data: ProfileData;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-sm w-full transform transition-all hover:scale-[1.02] duration-300">
      {/* Top Background / Header */}
      <div className="h-32 bg-indigo-600 relative">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-24 h-24 rounded-2xl border-4 border-white shadow-lg overflow-hidden bg-slate-100">
            <img 
              src={data.profileImage} 
              alt={data.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="pt-16 pb-8 px-6 text-center">
        <h1 className="text-2xl font-bold text-slate-800">{data.name}</h1>
        <p className="text-indigo-600 font-medium text-sm mt-1">{data.registration}</p>
        
        <div className="mt-6 flex justify-center items-center gap-4">
          <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">CGPA</p>
            <p className="text-xl font-bold text-slate-700">{data.cgpa}</p>
          </div>
          <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Status</p>
            <p className="text-xl font-bold text-green-600">Active</p>
          </div>
        </div>

        <div className="mt-8 space-y-3 text-left">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 transition-colors hover:bg-slate-100">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Mobile</p>
              <p className="text-sm font-semibold text-slate-700">{data.mobile}</p>
            </div>
          </div>

          <a 
            href={data.linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 transition-colors hover:bg-blue-50 border border-transparent hover:border-blue-200"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <svg className="h-4 w-4 text-white fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">LinkedIn</p>
              <p className="text-sm font-semibold text-blue-600">View Professional Profile</p>
            </div>
          </a>
        </div>
      </div>

      <div className="bg-slate-50 p-4 border-t border-slate-100 flex justify-center gap-2">
         <span className="w-2 h-2 rounded-full bg-slate-300"></span>
         <span className="w-2 h-2 rounded-full bg-slate-300"></span>
         <span className="w-2 h-2 rounded-full bg-slate-300"></span>
      </div>
    </div>
  );
};
