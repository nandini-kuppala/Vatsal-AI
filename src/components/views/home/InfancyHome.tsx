import React from 'react';
import { UserProfile } from '../../../types/user';
import { Baby, Moon, Utensils, TrendingUp, Volume2, AlertCircle } from 'lucide-react';

interface InfancyHomeProps {
  userProfile: UserProfile;
}

const InfancyHome: React.FC<InfancyHomeProps> = ({ userProfile }) => {
  const calculateBabyAge = () => {
    if (!userProfile.babyBirthDate) return { months: 0, weeks: 0 };
    const birthDate = new Date(userProfile.babyBirthDate);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - birthDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const months = Math.floor(diffDays / 30);
    const weeks = Math.floor((diffDays % 30) / 7);
    return { months, weeks };
  };

  const babyAge = calculateBabyAge();

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome back, {userProfile.name}! 👋
            </h1>
            <p className="text-gray-600 mt-1">
              Baby is {babyAge.months} months {babyAge.weeks} weeks old
            </p>
          </div>
          <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
            <Baby className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-sm text-green-800 font-medium">
            🌟 This is a critical brain development period! Focus on bonding, feeding, and sleep routines.
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Help</h2>
        <div className="grid grid-cols-2 gap-3">
          <button className="p-4 bg-blue-50 rounded-xl text-center hover:bg-blue-100 transition-colors">
            <Volume2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-800">Why is baby crying?</p>
          </button>
          <button className="p-4 bg-purple-50 rounded-xl text-center hover:bg-purple-100 transition-colors">
            <Moon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-800">Sleep help</p>
          </button>
        </div>
      </div>

      {/* Today's Care Plan */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Today's Care Plan</h2>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
            <Utensils className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-800">Mother's Nutrition</h3>
              <p className="text-sm text-gray-600">Extra calories for breastfeeding, calcium-rich foods</p>
              <div className="mt-2 flex space-x-2">
                <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">Milk ✓</span>
                <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded">Almonds</span>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
            <Baby className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-800">Baby Feeding</h3>
              <p className="text-sm text-gray-600">
                {babyAge.months < 6 ? 'Exclusive breastfeeding every 2-3 hours' : 'Breastfeeding + solid foods'}
              </p>
              <div className="mt-2">
                <p className="text-xs text-gray-500">Last fed: 2 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Development Tracking */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-orange-500" />
          Development Milestones
        </h2>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <div>
              <p className="font-semibold text-gray-800">Smiling</p>
              <p className="text-sm text-gray-600">Expected: 2-3 months</p>
            </div>
            <span className="text-green-600 font-bold">✓</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
            <div>
              <p className="font-semibold text-gray-800">Rolling over</p>
              <p className="text-sm text-gray-600">Expected: 4-6 months</p>
            </div>
            <span className="text-yellow-600 font-bold">⏳</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-semibold text-gray-800">Sitting without support</p>
              <p className="text-sm text-gray-600">Expected: 6-8 months</p>
            </div>
            <span className="text-gray-400 font-bold">○</span>
          </div>
        </div>
      </div>

      {/* Health Reminders */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Health Reminders</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-800">BCG Vaccine</p>
                <p className="text-sm text-gray-600">Due next week</p>
              </div>
            </div>
            <button className="text-orange-600 font-semibold text-sm">Schedule</button>
          </div>

          <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <div>
                <p className="font-semibold text-gray-800">Growth Check</p>
                <p className="text-sm text-gray-600">Weight & height measurement</p>
              </div>
            </div>
            <button className="text-orange-600 font-semibold text-sm">Log Data</button>
          </div>
        </div>
      </div>

      {/* Government Benefits */}
      {userProfile.incomeRange !== 'above-8' && (
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Available Benefits</h2>
          <div className="space-y-3">
            <div className="p-3 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-gray-800">Free Immunization</h3>
              <p className="text-sm text-gray-600">All vaccines free at government centers</p>
              <button className="text-green-600 font-semibold text-sm mt-2">Find Center</button>
            </div>
            <div className="p-3 border border-orange-200 rounded-lg">
              <h3 className="font-semibold text-gray-800">Anganwadi Services</h3>
              <p className="text-sm text-gray-600">Nutrition support and health monitoring</p>
              <button className="text-orange-600 font-semibold text-sm mt-2">Register</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfancyHome;