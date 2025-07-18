import React from 'react';
import { UserProfile } from '../../../types/user';
import { Baby, Gamepad2, Utensils, TrendingUp, Brain, Heart } from 'lucide-react';

interface ToddlerhoodHomeProps {
  userProfile: UserProfile;
}

const ToddlerhoodHome: React.FC<ToddlerhoodHomeProps> = ({ userProfile }) => {
  const calculateToddlerAge = () => {
    if (!userProfile.babyBirthDate) return { months: 13, weeks: 0 };
    const birthDate = new Date(userProfile.babyBirthDate);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - birthDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const months = Math.floor(diffDays / 30);
    const weeks = Math.floor((diffDays % 30) / 7);
    return { months, weeks };
  };

  const toddlerAge = calculateToddlerAge();

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Hi {userProfile.name}! 🌟
            </h1>
            <p className="text-gray-600 mt-1">
              Your little one is {toddlerAge.months} months {toddlerAge.weeks} weeks old
            </p>
          </div>
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
            <Baby className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <div className="bg-yellow-50 rounded-lg p-4">
          <p className="text-sm text-yellow-800 font-medium">
            🧠 Critical brain development phase! Focus on interactive play, language, and social skills.
          </p>
        </div>
      </div>

      {/* Brain Development Activities */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <Brain className="w-5 h-5 mr-2 text-purple-500" />
          Today's Brain Boosters
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <button className="p-4 bg-purple-50 rounded-xl text-center hover:bg-purple-100 transition-colors">
            <Gamepad2 className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-800">Shape Sorter Game</p>
          </button>
          <button className="p-4 bg-pink-50 rounded-xl text-center hover:bg-pink-100 transition-colors">
            <Brain className="w-8 h-8 text-pink-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-800">Reading Time</p>
          </button>
        </div>
      </div>

      {/* Nutrition Plan */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Today's Nutrition</h2>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
            <Utensils className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-800">Toddler Meals</h3>
              <p className="text-sm text-gray-600">3 main meals + 2 healthy snacks</p>
              <div className="mt-2 flex space-x-2">
                <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">Breakfast ✓</span>
                <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded">Lunch</span>
                <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">Dinner</span>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
            <Heart className="w-5 h-5 text-orange-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-800">Mother's Nutrition</h3>
              <p className="text-sm text-gray-600">Balanced diet with iron and calcium</p>
              <div className="mt-2">
                <p className="text-xs text-gray-500">Energy level: Good 💪</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Development Tracking */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-orange-500" />
          Development Progress
        </h2>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <div>
              <p className="font-semibold text-gray-800">Walking independently</p>
              <p className="text-sm text-gray-600">Expected: 12-15 months</p>
            </div>
            <span className="text-green-600 font-bold">✓</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
            <div>
              <p className="font-semibold text-gray-800">First words (5-10 words)</p>
              <p className="text-sm text-gray-600">Expected: 12-18 months</p>
            </div>
            <span className="text-yellow-600 font-bold">⏳</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div>
              <p className="font-semibold text-gray-800">Using spoon/fork</p>
              <p className="text-sm text-gray-600">Expected: 15-18 months</p>
            </div>
            <span className="text-blue-600 font-bold">⭐</span>
          </div>
        </div>
      </div>

      {/* Recommended Activities */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recommended Today</h2>
        
        <div className="space-y-3">
          <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
            <h3 className="font-semibold text-gray-800 mb-1">Puzzle Play</h3>
            <p className="text-sm text-gray-600">Simple 2-3 piece puzzles for cognitive development</p>
            <p className="text-xs text-purple-600 font-medium mt-2">15-20 minutes</p>
          </div>

          <div className="p-4 border-l-4 border-green-500 bg-green-50">
            <h3 className="font-semibold text-gray-800 mb-1">Music & Movement</h3>
            <p className="text-sm text-gray-600">Dance and sing along to develop rhythm and language</p>
            <p className="text-xs text-green-600 font-medium mt-2">10-15 minutes</p>
          </div>

          <div className="p-4 border-l-4 border-orange-500 bg-orange-50">
            <h3 className="font-semibold text-gray-800 mb-1">Outdoor Exploration</h3>
            <p className="text-sm text-gray-600">Safe outdoor play for physical development</p>
            <p className="text-xs text-orange-600 font-medium mt-2">30 minutes</p>
          </div>
        </div>
      </div>

      {/* Health & Safety */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Health & Safety</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-800">MMR Vaccine</p>
                <p className="text-sm text-gray-600">Due at 15 months</p>
              </div>
            </div>
            <button className="text-orange-600 font-semibold text-sm">Schedule</button>
          </div>

          <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Baby className="w-5 h-5 text-red-600" />
              <div>
                <p className="font-semibold text-gray-800">Childproofing Check</p>
                <p className="text-sm text-gray-600">Review home safety measures</p>
              </div>
            </div>
            <button className="text-orange-600 font-semibold text-sm">Review</button>
          </div>
        </div>
      </div>

      {/* Nearby Services */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Nearby Services</h2>
        <div className="space-y-3">
          <div className="p-3 border border-green-200 rounded-lg">
            <h3 className="font-semibold text-gray-800">Little Stars Playschool</h3>
            <p className="text-sm text-gray-600">0.8 km away • ₹3,000/month</p>
            <button className="text-green-600 font-semibold text-sm mt-2">View Details</button>
          </div>
          <div className="p-3 border border-blue-200 rounded-lg">
            <h3 className="font-semibold text-gray-800">Children's Park</h3>
            <p className="text-sm text-gray-600">1.2 km away • Safe play equipment</p>
            <button className="text-blue-600 font-semibold text-sm mt-2">Get Directions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToddlerhoodHome;