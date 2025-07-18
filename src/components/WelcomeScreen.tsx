import React from 'react';
import { Heart, Baby, Users, Shield } from 'lucide-react';

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Baby className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Vatsal AI
          </h1>
          <p className="text-lg text-gray-600">
            Where Vatsalya meets tech. Smart care for your little one.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
            <Heart className="w-6 h-6 text-orange-500 flex-shrink-0" />
            <div className="text-left">
              <h3 className="font-semibold text-gray-800">Personalized Care</h3>
              <p className="text-sm text-gray-600">Tailored guidance for pregnancy, infancy, and toddlerhood</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
            <Shield className="w-6 h-6 text-green-500 flex-shrink-0" />
            <div className="text-left">
              <h3 className="font-semibold text-gray-800">Expert Advice</h3>
              <p className="text-sm text-gray-600">Evidence-based information from trusted sources</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
            <Users className="w-6 h-6 text-yellow-500 flex-shrink-0" />
            <div className="text-left">
              <h3 className="font-semibold text-gray-800">Community Support</h3>
              <p className="text-sm text-gray-600">Connect with parents in your area and stage</p>
            </div>
          </div>
        </div>

        <button
          onClick={onGetStarted}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Get Started
        </button>

        <p className="text-xs text-gray-500 mt-4">
          Available in multiple Indian languages
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;