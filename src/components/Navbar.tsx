import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Thermometer, Droplets, LayoutDashboard, Home } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const location = useLocation();
  const { t } = useLanguage();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-8">
            {[
              { path: '/', icon: Home, label: t('nav.home') },
              { path: '/dashboard', icon: LayoutDashboard, label: t('nav.dashboard') },
              { path: '/temperature', icon: Thermometer, label: t('nav.temperature') },
              { path: '/humidity', icon: Droplets, label: t('nav.humidity') },
            ].map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(path)
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;