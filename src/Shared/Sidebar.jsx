import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../assets/images/Logo.svg"
import { LayoutDashboard, Settings, LogOut } from 'lucide-react';
import { Api, Audit, Subscription, User } from './Svg/SvgContainer';

const SideBar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { name: 'Users', icon: User, path: '/users' },
    { name: 'Subscriptions', icon: Subscription, path: '/subscriptions' },
    { name: 'API Monitoring', icon: Api, path: '/api-monitoring' },
    { name: 'Audit & Alerts', icon: Audit, path: '/alerts' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <aside
      className="flex flex-col h-screen w-75 p-6 justify-between border-r shrink-0"
      style={{
        backgroundColor: '#121212',
        borderColor: 'rgba(255, 255, 255, 0.04)'
      }}
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-3 shrink-0">
          <img src={Logo} alt="Logo" />
          <span className="text-white font-bold italic text-xl font-Playfair">
            Midnight Alchemist
          </span>
        </div>

        <nav className="flex flex-col gap-4 mt-20">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-4 cursor-pointer rounded-xl transition-all duration-200 text-lg font-medium no-underline
                  ${isActive
                    ? 'bg-[#00F2FE] text-black shadow-[0_0_15px_rgba(0,242,254,0.3)]'
                    : 'text-white/50 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {/* Icon will now inherit text-black when active, and text-white/60 when not */}
                <Icon size={20} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Log Out Button */}
      <div className="border-t border-white/5 pt-4">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl cursor-pointer font-medium text-red-500 hover:bg-red-500/10 transition-colors text-lg">
          <LogOut size={20} />
          Log Out
        </button>
      </div>
    </aside>
  );
};

export default SideBar;