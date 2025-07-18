import React from 'react';
import { Home, BarChart3, Bot, BookOpen, Users } from 'lucide-react';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'reports', label: 'Analytics', icon: BarChart3 },
    { id: 'assistant', label: 'AI Care', icon: Bot },
    { id: 'knowledge', label: 'Learn', icon: BookOpen },
    { id: 'community', label: 'Connect', icon: Users },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-white via-orange-50 to-white border-t-2 border-orange-100 px-2 py-3 z-50 shadow-lg backdrop-blur-sm">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 transform ${
                isActive
                  ? 'text-orange-600 bg-gradient-to-br from-orange-100 to-orange-200 shadow-md scale-105 border border-orange-200'
                  : 'text-gray-500 hover:text-orange-500 hover:bg-orange-50 hover:scale-105'
              }`}
            >
              <Icon className={`w-5 h-5 mb-1 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} />
              <span className={`text-xs font-medium transition-all duration-300 ${isActive ? 'font-semibold' : ''}`}>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;