import React from 'react';
import { useLocation } from 'react-router-dom'; 
import Profile from "../assets/images/profile.png"
import { Search, Settings, Bell } from 'lucide-react';

const Header = () => {
  const location = useLocation(); 

  const pageTitles = {
    '/': 'Dashboard',
    '/users': 'User Management',
    '/subscriptions': 'Subscriptions',
    '/api-monitoring': 'API Monitoring',
    '/alerts': 'Audit & Alerts',
    '/settings': 'Account Settings',
  };

  const currentTitle = pageTitles[location.pathname] || 'Dashboard';

  return (
    <header
      className="flex items-center justify-between px-12 py-6 w-full border-b"
      style={{
        backgroundColor: '#121212',
        borderColor: 'rgba(255, 255, 255, 0.04)'
      }}
    >
      <h1 className="text-3xl font-inter font-semibold text-white min-w-[300px]">
        {currentTitle}
      </h1>

      <div className="relative w-full max-w-md mx-4">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-500" />
        </div>

        <input
          type="text"
          placeholder="Search"
          className="w-full py-2.5 pl-11 pr-4 text-sm text-gray-300 focus:outline-none focus:border-[#00F0FF]/50 transition-all font-inter"
          style={{
            borderRadius: '1000px',
            border: '0.6px solid rgba(255, 255, 255, 0.04)',
            background: '#000',
          }}
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="bg-black h-10 w-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-white/5 transition-colors">
          <Settings size={20} className='text-white' />
        </button>

        <div className="relative">
          <button className="bg-black h-10 w-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-white/5 transition-colors">
            <Bell size={20} className='text-white' />
          </button>
          <span className="absolute top-0 -right-0.5 w-3 h-3 bg-[#FF566C] rounded-full border-2 border-[#121212]"></span>
        </div>

        <div className="flex items-center gap-3 border-white/10 cursor-pointer">
          <img
            src={Profile}
            alt="Profile"
            className="w-10 h-10 rounded-full border border-white/20 hover:border-white/40 transition-all"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;