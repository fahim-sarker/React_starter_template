import React from 'react';
import ProfileImg from "../assets/images/profile.png";
import { MoreHorizontal } from 'lucide-react';

const Users = () => {
  // Mock data based on your image
  const userData = [
    { id: '#10009', name: 'Angelina Rosy', email: 'angelinarosy123@gmail.com', plan: 'Free', voice: 'YES', date: '31 January', status: 'Active' },
    { id: '#10010', name: 'Angelina Rosy', email: 'angelinarosy123@gmail.com', plan: 'Free', voice: 'YES', date: '31 January', status: 'Active' },
    { id: '#10011', name: 'Angelina Rosy', email: 'angelinarosy123@gmail.com', plan: 'Seeker', voice: 'NO', date: '31 January', status: 'Suspended' },
    { id: '#10012', name: 'Angelina Rosy', email: 'angelinarosy123@gmail.com', plan: 'Free', voice: 'NO', date: '31 January', status: 'Active' },
    { id: '#10013', name: 'Angelina Rosy', email: 'angelinarosy123@gmail.com', plan: 'Architect', voice: 'YES', date: '31 January', status: 'Active' },
  ];

  return (
    <div className="space-y-6 font-inter pb-10">

      {/* 1. FILTER BAR */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FilterSelect label="Plan" options={['All Plans', 'Free', 'Seeker', 'Architect']} />
        <FilterSelect label="Status" options={['All Status', 'Active', 'Suspended']} />
        <FilterSelect label="Activity" options={['All Levels', 'High', 'Medium', 'Low']} />
      </div>

      {/* 2. USERS TABLE CONTAINER */}
      <div className="bg-[#121212] border border-white/5 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-400 text-sm font-medium border-b border-white/5">
                <th className="px-8 py-6">User Id</th>
                <th className="px-6 py-6">Name</th>
                <th className="px-6 py-6">Email</th>
                <th className="px-6 py-6">Plan</th>
                <th className="px-6 py-6">Voice Sign.</th>
                <th className="px-6 py-6">Last Active</th>
                <th className="px-6 py-6">Status</th>
                <th className="px-6 py-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-white/80 text-sm font-normal">
              {userData.map((user, index) => (
                <tr
                  key={index}
                  className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="px-8 py-5 text-gray-500">{user.id}</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-800">
                        <img src={ProfileImg} alt="avatar" className="w-full h-full object-cover" />
                      </div>
                      <span className="font-medium">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">{user.email}</td>
                  <td className="px-6 py-5">
                    <span className={getPlanColor(user.plan)}>{user.plan}</span>
                  </td>
                  <td className="px-6 py-5">{user.voice}</td>
                  <td className="px-6 py-5">{user.date}</td>
                  <td className="px-6 py-5">
                    <span className={user.status === 'Active' ? 'text-cyan-400' : 'text-red-500'}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-center gap-2">
                      <button className="text-xs px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors cursor-pointer">View</button>
                      <button className="text-xs px-3 py-1.5 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors cursor-pointer">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

/* --- HELPER COMPONENTS & LOGIC --- */

const FilterSelect = ({ label, options }) => (
  <div className="flex flex-col gap-2">
    <label className="text-white text-xs font-medium ml-1">{label}</label>
    <div className="relative">
      <select className="w-full bg-[#121212] text-gray-400 text-sm rounded-xl py-3 px-4 border border-white/5 outline-none cursor-pointer appearance-none hover:border-white/10 transition-colors">
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
        <MoreHorizontal size={14} className="rotate-90" />
      </div>
    </div>
  </div>
);

const getPlanColor = (plan) => {
  switch (plan) {
    case 'Free': return 'text-emerald-400';
    case 'Seeker': return 'text-yellow-500';
    case 'Architect': return 'text-gray-400';
    default: return 'text-white';
  }
};

export default Users;