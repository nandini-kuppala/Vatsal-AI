import React from 'react';
import { UserProfile } from '../../types/user';
import PregnancyHome from './home/PregnancyHome';
import InfancyHome from './home/InfancyHome';
import ToddlerhoodHome from './home/ToddlerhoodHome';

interface HomeViewProps {
  userProfile: UserProfile;
}

const HomeView: React.FC<HomeViewProps> = ({ userProfile }) => {
  const renderStageSpecificHome = () => {
    switch (userProfile.stage) {
      case 'pregnancy':
        return <PregnancyHome userProfile={userProfile} />;
      case 'infancy':
        return <InfancyHome userProfile={userProfile} />;
      case 'toddlerhood':
        return <ToddlerhoodHome userProfile={userProfile} />;
      default:
        return <PregnancyHome userProfile={userProfile} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
      {renderStageSpecificHome()}
    </div>
  );
};

export default HomeView;