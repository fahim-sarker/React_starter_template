import React from 'react';
import {
  ResponsiveContainer, AreaChart, Area, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid
} from 'recharts';
import Profile from "../assets/images/profile.png"
import { CheckCircle, MoreHorizontal } from 'lucide-react';
import { Dollar, Failed, High, User, Voice } from '../Shared/Svg/SvgContainer';

/* --- MOCK DATA --- */
const engagementData = [
  { name: 'Jan', users: 24000, api: 23000, voice: 20000 },
  { name: 'Feb', users: 32000, api: 44000, voice: 30000 },
  { name: 'Mar', users: 22000, api: 40000, voice: 22000 },
  { name: 'Apr', users: 48000, api: 20000, voice: 26000 },
  { name: 'May', users: 38000, api: 35000, voice: 22000 },
  { name: 'Jun', users: 28000, api: 55000, voice: 38000 },
  { name: 'Jul', users: 32000, api: 50000, voice: 36000 },
  { name: 'Aug', users: 35000, api: 38000, voice: 32000 },
];

const revenueData = [
  { month: 'Jul', value: 120 },
  { month: '', value: 300 },
  { month: 'Aug', value: 220 },
  { month: '', value: 450 },
  { month: 'Sep', value: 420 },
  { month: '', value: 750 },
  { month: 'Oct', value: 480 },
  { month: '', value: 200 },
  { month: 'Nov', value: 550 },
  { month: 'Dec', value: 230 },
  { month: 'Jan', value: 610 },
];

const Dashboard = () => {
  return (
    <div className="space-y-6 font-inter pb-10">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Active Alchemists" value="12.4k" trend="+ 129" icon={<User size={18} />} />
        <StatCard title="MRR" value="$78,420" icon={<Dollar size={18} />} />
        <StatCard title="API Health" value="Optimal" isStatus icon={<CheckCircle size={18} className="text-gray-400" />} />
        <StatCard title="Voice Minutes Used" value="18,930 min" icon={<Voice size={18} />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

        <div className="lg:col-span-2 flex flex-col gap-6">

          <div className="bg-[#121212] border border-white/5 rounded-3xl p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-semibold text-white">Platform Engagement</h3>
              <select className="bg-black text-cyan-400 text-sm font-medium px-4 py-1.5 rounded-full border border-[#00F2FE]/32 outline-none cursor-pointer">
                <option>Monthly</option>
              </select>
            </div>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} tickFormatter={(val) => `${val / 1000}k`} />
                  <Tooltip
                    wrapperStyle={{ outline: 'none' }}
                    contentStyle={{ backgroundColor: '#84A98C', borderRadius: '8px', border: 'none', boxShadow: '0 8px 48px rgba(255, 255, 255, 0.16)', padding: '12px' }}
                    itemStyle={{ fontSize: '12px', color: '#FFFFFF', fontWeight: '600' }}
                    labelStyle={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '10px', marginBottom: '4px', textTransform: 'uppercase' }}
                  />
                  <Line type="monotone" dataKey="users" stroke="#FF566C" strokeWidth={3} dot={false} tension={0.4} />
                  <Line type="monotone" dataKey="api" stroke="#10B981" strokeWidth={3} dot={{ r: 4, fill: '#00F0FF', strokeWidth: 2, stroke: '#121212' }} tension={0.4} />
                  <Line type="monotone" dataKey="voice" stroke="#F59E0B" strokeWidth={3} dot={false} tension={0.4} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-[#121212] border border-white/5 rounded-3xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">Alerts</h3>
              <button className="flex items-center justify-center rounded-[100px] bg-transparent border border-white/10 hover:bg-white/5 h-10 w-10 transition-all text-gray-500 hover:text-white cursor-pointer">
                <MoreHorizontal size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <AlertItem icon={<High size={20} />} msg="High Latency on Voice Processing" time="45 min ago" bgColor="#FBBC04" />
              <AlertItem icon={<Failed size={20} />} msg="Failed Reflections Jobs : 12 Errors" time="1 hour ago" bgColor="#FF566C" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-[#121212] border border-white/5 rounded-3xl p-6 flex flex-col h-[400px]">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-semibold text-white font-inter">Revenue</h3>
              <div className="text-right">
                <p className="text-emerald-400 font-bold text-sm">$32.5k</p>
                <p className="text-gray-500 text-[10px]">(This month)</p>
              </div>
            </div>
            <div className="flex-1 w-full mt-auto">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData} margin={{ top: 5, right: 10, left: -25, bottom: 0 }}>
                  <defs>
                    <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00F2FE" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#00F2FE" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid horizontal={false} strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#4B5563', fontSize: 11 }} />
                  <YAxis domain={[0, 800]} ticks={[0, 200, 400, 600, 800]} axisLine={false} tickLine={false} tick={{ fill: '#4B5563', fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#000', border: '0.6px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    itemStyle={{ color: '#00F2FE', fontSize: '12px', fontWeight: '600' }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#00F2FE" strokeWidth={2.5} fillOpacity={1} fill="url(#revGrad)" tension={0.4} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-[#121212] border border-white/5 rounded-3xl p-6 flex-1 flex flex-col min-h-[400px]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-medium text-white font-inter">Activity Feed</h3>
              <MoreHorizontal size={20} className='text-[#00F2FE] cursor-pointer' />
            </div>
            <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
              <ActivityItem name="User #A92" action="created voice signature" time="Just now" />
              <ActivityItem name="Payment Received" action="Annual Plan" time="5 min ago" />
              <ActivityItem name="API Usage" action="Spike Detected" time="5 min ago" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const StatCard = ({ title, value, trend, icon, isStatus }) => (
  <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 transition-all hover:border-white/10 cursor-default">
    <div className="flex items-center gap-3 text-white/50 mb-4 text-base font-inter">{icon} {title}</div>
    <div className="flex items-baseline gap-3">
      <span className={`text-2xl font-inter font-semibold tracking-tight ${isStatus ? 'text-emerald-500' : 'text-white'}`}>{value}</span>
      {trend && <span className="text-[11px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full font-inter">{trend}</span>}
    </div>
  </div>
);

const AlertItem = ({ icon, msg, time, bgColor }) => (
  <div className="flex items-center justify-between group cursor-pointer p-3 rounded-[100px] bg-transparent border border-transparent hover:border-white/10 hover:bg-white/5 transition-all">
    <div className="flex items-center gap-4">
      <div
        className="w-12 h-12 flex items-center justify-center rounded-full border border-white/5"
        style={{ backgroundColor: bgColor || '#000000' }}
      >
        {icon}
      </div>
      <span className="text-gray-300 font-medium group-hover:text-white transition-colors font-inter">{msg}</span>
    </div>
    <span className="text-gray-500 text-xs font-inter pr-4">{time}</span>
  </div>
);

const ActivityItem = ({ name, action, time }) => (
  <div className="flex items-center gap-3 group cursor-pointer p-3 rounded-[100px] bg-transparent border border-transparent hover:border-white/10 hover:bg-white/5 transition-all shrink-0">
    <div className="w-10 h-10 rounded-full border border-white/5 shrink-0 overflow-hidden bg-gray-800">
      <img src={Profile} alt="Profile" className="w-full h-full object-cover" />
    </div>
    <div className="flex flex-col min-w-0 flex-1">
      <p className="text-xs text-white truncate leading-tight font-inter">
        <span className="font-bold">{name}</span> {action}
      </p>
      <span className="text-[10px] text-gray-500 mt-1 font-inter text-end">{time}</span>
    </div>
  </div>
);

export default Dashboard;