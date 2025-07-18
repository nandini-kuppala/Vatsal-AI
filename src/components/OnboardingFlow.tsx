import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, User, MapPin, Calendar, CreditCard } from 'lucide-react';
import { UserProfile } from '../types/user';

interface OnboardingFlowProps {
  onComplete: (profile: UserProfile) => void;
}

const OnboardingFlow: React.FC<OnboardingFlowProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    role: '' as 'mother' | 'father' | '',
    stage: '' as 'pregnancy' | 'infancy' | 'toddlerhood' | '',
    incomeRange: '' as 'below-2' | '2-to-8' | 'above-8' | '',
    location: '',
    dueDate: '',
    babyBirthDate: '',
    preferredLanguage: 'english'
  });

  const steps = [
    {
      title: 'Personal Information',
      icon: User,
      fields: ['name', 'role', 'location', 'preferredLanguage']
    },
    {
      title: 'Current Stage',
      icon: Calendar,
      fields: ['stage', 'dueDate', 'babyBirthDate']
    },
    {
      title: 'Income Range',
      icon: CreditCard,
      fields: ['incomeRange']
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const profile: UserProfile = {
        stage: formData.stage,
        role: formData.role,
        incomeRange: formData.incomeRange,
        name: formData.name,
        location: formData.location,
        preferredLanguage: formData.preferredLanguage,
        ...(formData.dueDate && { dueDate: formData.dueDate }),
        ...(formData.babyBirthDate && { babyBirthDate: formData.babyBirthDate })
      };
      onComplete(profile);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    const currentFields = steps[currentStep].fields;
    return currentFields.every(field => {
      if (field === 'dueDate') return formData.stage !== 'pregnancy' || formData.dueDate;
      if (field === 'babyBirthDate') return formData.stage === 'pregnancy' || formData.babyBirthDate;
      return formData[field as keyof typeof formData];
    });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">I am a</label>
              <div className="grid grid-cols-2 gap-3">
                {['mother', 'father'].map(role => (
                  <button
                    key={role}
                    onClick={() => setFormData({ ...formData, role: role as 'mother' | 'father' })}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      formData.role === role
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-300 hover:border-orange-300'
                    }`}
                  >
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="City, State"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Language</label>
              <select
                value={formData.preferredLanguage}
                onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="tamil">Tamil</option>
                <option value="telugu">Telugu</option>
                <option value="bengali">Bengali</option>
                <option value="marathi">Marathi</option>
              </select>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Stage</label>
              <div className="space-y-3">
                {[
                  { key: 'pregnancy', label: 'Pregnancy', desc: 'Currently pregnant' },
                  { key: 'infancy', label: 'Infancy', desc: 'Baby is 0-12 months old' },
                  { key: 'toddlerhood', label: 'Toddlerhood', desc: 'Child is 13-24 months old' }
                ].map(stage => (
                  <button
                    key={stage.key}
                    onClick={() => setFormData({ ...formData, stage: stage.key as any })}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      formData.stage === stage.key
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-300 hover:border-orange-300'
                    }`}
                  >
                    <div className="font-semibold text-gray-800">{stage.label}</div>
                    <div className="text-sm text-gray-600">{stage.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {formData.stage === 'pregnancy' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expected Due Date</label>
                <input
                  type="date"
                  value={formData.dueDate}
                  onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            )}

            {(formData.stage === 'infancy' || formData.stage === 'toddlerhood') && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Baby's Birth Date</label>
                <input
                  type="date"
                  value={formData.babyBirthDate}
                  onChange={(e) => setFormData({ ...formData, babyBirthDate: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Annual Household Income</label>
              <div className="space-y-3">
                {[
                  { key: 'below-2', label: 'Below ₹2 Lakhs', desc: 'Eligible for maximum government support' },
                  { key: '2-to-8', label: '₹2-8 Lakhs', desc: 'Middle income range' },
                  { key: 'above-8', label: 'Above ₹8 Lakhs', desc: 'Focus on premium care options' }
                ].map(income => (
                  <button
                    key={income.key}
                    onClick={() => setFormData({ ...formData, incomeRange: income.key as any })}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      formData.incomeRange === income.key
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-300 hover:border-orange-300'
                    }`}
                  >
                    <div className="font-semibold text-gray-800">{income.label}</div>
                    <div className="text-sm text-gray-600">{income.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const Icon = steps[currentStep].icon;

  return (
    <div className="min-h-screen flex flex-col justify-center p-6">
      <div className="max-w-md mx-auto w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{steps[currentStep].title}</h2>
          <div className="flex space-x-2 justify-center">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index <= currentStep ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          {renderStepContent()}
        </div>

        <div className="flex space-x-4">
          {currentStep > 0 && (
            <button
              onClick={handleBack}
              className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={!isStepValid()}
            className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <span>{currentStep === steps.length - 1 ? 'Complete' : 'Next'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFlow;