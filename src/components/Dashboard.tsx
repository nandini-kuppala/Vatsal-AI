import React, { useState } from 'react';
import { UserProfile } from '../types/user';
import BottomNavigation from './BottomNavigation';
import HomeView from './views/HomeView';
import ReportsView from './views/ReportsView';
import AssistantView from './views/AssistantView';
import KnowledgeView from './views/KnowledgeView';
import CommunityView from './views/CommunityView';

interface DashboardProps {
  userProfile: UserProfile;
}

const Dashboard: React.FC<DashboardProps> = ({ userProfile }) => {
  const [activeTab, setActiveTab] = useState('home');

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView userProfile={userProfile} />;
      case 'reports':
        return <ReportsView userProfile={userProfile} />;
      case 'assistant':
        return <AssistantView userProfile={userProfile} />;
      case 'knowledge':
        return <KnowledgeView userProfile={userProfile} />;
      case 'community':
        return <CommunityView userProfile={userProfile} />;
      default:
        return <HomeView userProfile={userProfile} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {renderActiveView()}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Dashboard;