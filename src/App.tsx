import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import OnboardingFlow from './components/OnboardingFlow';
import Dashboard from './components/Dashboard';
import { UserProfile } from './types/user';

function App() {
  const [currentStep, setCurrentStep] = useState<'welcome' | 'onboarding' | 'dashboard'>('welcome');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    // Check if user has already completed onboarding
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setUserProfile(JSON.parse(savedProfile));
      setCurrentStep('dashboard');
    }
  }, []);

  const handleOnboardingComplete = (profile: UserProfile) => {
    setUserProfile(profile);
    localStorage.setItem('userProfile', JSON.stringify(profile));
    setCurrentStep('dashboard');
  };

  const handleGetStarted = () => {
    setCurrentStep('onboarding');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
      {currentStep === 'welcome' && (
        <WelcomeScreen onGetStarted={handleGetStarted} />
      )}
      {currentStep === 'onboarding' && (
        <OnboardingFlow onComplete={handleOnboardingComplete} />
      )}
      {currentStep === 'dashboard' && userProfile && (
        <Dashboard userProfile={userProfile} />
      )}
    </div>
  );
}

export default App;