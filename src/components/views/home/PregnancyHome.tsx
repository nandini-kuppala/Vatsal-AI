import React from 'react';
import { UserProfile } from '../../../types/user';
import { Calendar, Heart, Activity, AlertCircle, MapPin, Baby } from 'lucide-react';

interface PregnancyHomeProps {
  userProfile: UserProfile;
}

const PregnancyHome: React.FC<PregnancyHomeProps> = ({ userProfile }) => {
  const calculateWeeksPregnant = () => {
    if (!userProfile.dueDate) return 0;
    const dueDate = new Date(userProfile.dueDate);
    const today = new Date();
    const pregnancyDuration = 40 * 7; // 40 weeks in days
    const daysUntilDue = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    const daysPassed = pregnancyDuration - daysUntilDue;
    return Math.floor(daysPassed / 7);
  };

  const weeksPregnant = calculateWeeksPregnant();
  const trimester = weeksPregnant <= 12 ? 1 : weeksPregnant <= 27 ? 2 : 3;

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Hello, {userProfile.name}! 👋
            </h1>
            <p className="text-gray-600 mt-1">
              Week {weeksPregnant} • Trimester {trimester}
            </p>
          </div>
          <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
            <Baby className="w-8 h-8 text-white" />
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Pregnancy Progress</span>
            <span>{weeksPregnant}/40 weeks</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-orange-400 to-orange-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(weeksPregnant / 40) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="text-sm text-gray-600">
          Your baby is now the size of a {weeksPregnant < 12 ? 'grape' : weeksPregnant < 27 ? 'mango' : 'coconut'}! 🥭
        </div>
      </div>

      {/* Today's Plan */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-orange-500" />
          Today's Care Plan
        </h2>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
            <Heart className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-800">Diet Plan</h3>
              <p className="text-sm text-gray-600">3 servings of fruits, iron-rich foods, 8 glasses of water</p>
              <div className="mt-2 flex space-x-2">
                <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">Spinach ✓</span>
                <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded">Citrus fruits</span>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
            <Activity className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-800">Exercise Plan</h3>
              <p className="text-sm text-gray-600">30 min prenatal yoga, 15 min walking</p>
              <div className="mt-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Today's Progress</span>
                  <span>2/3 activities</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Health Reminders */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Health Reminders</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-yellow-600" />
              <div>
                <p className="font-semibold text-gray-800">Prenatal Checkup</p>
                <p className="text-sm text-gray-600">Due in 3 days</p>
              </div>
            </div>
            <button className="text-orange-600 font-semibold text-sm">Schedule</button>
          </div>

          <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Heart className="w-5 h-5 text-purple-600" />
              <div>
                <p className="font-semibold text-gray-800">Iron Supplement</p>
                <p className="text-sm text-gray-600">Take with vitamin C</p>
              </div>
            </div>
            <button className="text-orange-600 font-semibold text-sm">Mark Done</button>
          </div>
        </div>
      </div>

      {/* Emergency Section */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <AlertCircle className="w-6 h-6 text-white" />
          <h2 className="text-xl font-bold text-white">Emergency Care</h2>
        </div>
        <p className="text-red-100 mb-4 text-sm">
          Call immediately if you experience severe pain, bleeding, or sudden symptoms
        </p>
        <div className="flex space-x-3">
          <button className="flex-1 bg-white text-red-600 font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Nearby Hospitals</span>
          </button>
          <button className="bg-red-700 text-white font-semibold py-3 px-6 rounded-lg">
            Call 108
          </button>
        </div>
      </div>

      {/* Government Schemes */}
      {userProfile.incomeRange !== 'above-8' && (
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Available Benefits</h2>
          <div className="space-y-3">
            <div className="p-3 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-gray-800">PMMVY Scheme</h3>
              <p className="text-sm text-gray-600">₹5,000 cash assistance for first child</p>
              <button className="text-green-600 font-semibold text-sm mt-2">Apply Now</button>
            </div>
            <div className="p-3 border border-blue-200 rounded-lg">
              <h3 className="font-semibold text-gray-800">Free Checkups</h3>
              <p className="text-sm text-gray-600">PMSMA - Free ANC on 9th of every month</p>
              <button className="text-blue-600 font-semibold text-sm mt-2">Find Center</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PregnancyHome;