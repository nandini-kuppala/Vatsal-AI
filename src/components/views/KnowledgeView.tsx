import React, { useState } from 'react';
import { UserProfile } from '../../types/user';
import { BookOpen, Video, FileText, Heart, User, Baby, Play, ExternalLink, Clock, Star } from 'lucide-react';

interface KnowledgeViewProps {
  userProfile: UserProfile;
}

const KnowledgeView: React.FC<KnowledgeViewProps> = ({ userProfile }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getStageContent = () => {
    switch (userProfile.stage) {
      case 'pregnancy':
        return {
          articles: [
            { 
              title: 'Complete Pregnancy Nutrition Guide', 
              type: 'article', 
              category: 'nutrition',
              thumbnail: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300',
              duration: '8 min read',
              description: 'Essential nutrients, foods to avoid, and meal planning for healthy pregnancy'
            },
            { 
              title: 'Safe Prenatal Yoga & Exercise', 
              type: 'video', 
              category: 'exercise',
              thumbnail: 'https://images.pexels.com/photos/396133/pexels-photo-396133.jpeg?auto=compress&cs=tinysrgb&w=300',
              duration: '15 min',
              description: 'Gentle exercises safe for each trimester'
            },
            { 
              title: 'Understanding Prenatal Tests & Scans', 
              type: 'article', 
              category: 'health',
              thumbnail: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=300',
              duration: '6 min read',
              description: 'Complete guide to ultrasounds, blood tests, and screening procedures'
            },
            { 
              title: 'Labor & Delivery Preparation', 
              type: 'video', 
              category: 'preparation',
              thumbnail: 'https://images.pexels.com/photos/1556652/pexels-photo-1556652.jpeg?auto=compress&cs=tinysrgb&w=300',
              duration: '20 min',
              description: 'What to expect during labor and delivery process'
            },
          ],
          fatherContent: [
            { 
              title: 'How to Support Your Pregnant Wife', 
              type: 'video', 
              category: 'support',
              youtubeId: 'dQw4w9WgXcQ',
              thumbnail: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=300',
              duration: '12 min',
              description: 'Practical ways to help during pregnancy journey'
            },
            { 
              title: 'Dad\'s Guide to Labor & Delivery', 
              type: 'video', 
              category: 'preparation',
              youtubeId: 'dQw4w9WgXcQ',
              thumbnail: 'https://images.pexels.com/photos/1556652/pexels-photo-1556652.jpeg?auto=compress&cs=tinysrgb&w=300',
              duration: '18 min',
              description: 'What fathers need to know about the delivery room'
            },
            { 
              title: 'Emotional Support During Pregnancy', 
              type: 'article', 
              category: 'emotional',
              thumbnail: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=300',
              duration: '5 min read',
              description: 'Understanding mood changes and providing emotional support'
            },
            { 
              title: 'Preparing Your Home for Baby', 
              type: 'video', 
              category: 'preparation',
              youtubeId: 'dQw4w9WgXcQ',
              thumbnail: 'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=300',
              duration: '14 min',
              description: 'Essential baby-proofing and nursery setup tips'
            },
          ]
        };
      case 'infancy':
        return {
          articles: [
            { 
              title: 'Complete Breastfeeding Guide', 
              type: 'video', 
              category: 'feeding',
              thumbnail: 'https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=300',
              duration: '25 min',
              description: 'Positioning, latching, and common breastfeeding challenges'
            },
            { 
              title: 'Baby Sleep Training Methods', 
              type: 'article', 
              category: 'sleep',
              thumbnail: 'https://images.pexels.com/photos/1166473/pexels-photo-1166473.jpeg?auto=compress&cs=tinysrgb&w=300',
              duration: '10 min read',
              description: 'Gentle sleep training techniques for better nights'
            },
            { 
              title: 'Understanding Baby Cries & Signals', 
              type: 'video', 
              category: 'behavior',
              thumbnail: 'https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=300',
              duration: '12 min',
              description: 'Decode what your baby is trying to tell you'
            },
            { 
              title: 'Infant Development Milestones', 
              type: 'article', 
              category: 'development',
              thumbnail: 'https://images.pexels.com/photos/1166473/pexels-photo-1166473.jpeg?auto=compress&cs=tinysrgb&w=300',
              duration: '7 min read',
              description: 'Month-by-month development expectations and activities'
            },
          ],
          fatherContent: [
            { 
              title: 'Diaper Changing Masterclass', 
              type: 'video', 
              category: 'care',
              youtubeId: 'dQw4w9WgXcQ',
              thumbnail: 'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=300',
              duration: '8 min',
              description: 'Step-by-step guide to quick and clean diaper changes'
            },
            { 
              title: 'Father-Baby Bonding Activities', 
              type: 'video', 
              category: 'bonding',
              youtubeId: 'dQw4w9WgXcQ',
              thumbnail: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=300',
              duration: '15 min',
              description: 'Special ways for dads to connect with their newborn'
            },
            { 
              title: 'Supporting Night Feeding', 
              type: 'article', 
              category: 'feeding',
              thumbnail: 'https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=300',
              duration: '4 min read',
              description: 'How fathers can help with nighttime feeding routines'
            },
            { 
              title: 'Baby Massage Techniques for Dads', 
              type: 'video', 
              category: 'care',
              youtubeId: 'dQw4w9WgXcQ',
              thumbnail: 'https://images.pexels.com/photos/1166473/pexels-photo-1166473.jpeg?auto=compress&cs=tinysrgb&w=300',
              duration: '10 min',
              description: 'Gentle massage techniques to soothe and bond with baby'
            },
          ]
        };
      case 'toddlerhood':
        return {
          articles: [
            { 
              title: 'Toddler Nutrition & Meal Planning', 
              type: 'article', 
              category: 'nutrition',
              thumbnail: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300',
              duration: '9 min read',
              description: 'Balanced meals and dealing with picky eaters'
            },
            { 
              title: 'Brain Development Activities', 
              type: 'video', 
              category: 'development',
              thumbnail: 'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=300',
              duration: '18 min',
              description: 'Fun activities to boost cognitive development'
            },
            { 
              title: 'Managing Toddler Tantrums', 
              type: 'article', 
              category: 'behavior',
              thumbnail: 'https://images.pexels.com/photos/1166473/pexels-photo-1166473.jpeg?auto=compress&cs=tinysrgb&w=300',
              duration: '6 min read',
              description: 'Effective strategies for handling emotional outbursts'
            },
            { 
              title: 'Complete Childproofing Guide', 
              type: 'video', 
              category: 'safety',
              thumbnail: 'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=300',
              duration: '22 min',
              description: 'Room-by-room safety checklist for active toddlers'
            },
          ],
          fatherContent: [
            { 
              title: 'Active Play Ideas for Toddlers', 
              type: 'video', 
              category: 'play',
              youtubeId: 'dQw4w9WgXcQ',
              thumbnail: 'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=300',
              duration: '16 min',
              description: 'Fun physical activities to tire out energetic toddlers'
            },
            { 
              title: 'Teaching Independence to Toddlers', 
              type: 'video', 
              category: 'development',
              youtubeId: 'dQw4w9WgXcQ',
              thumbnail: 'https://images.pexels.com/photos/1166473/pexels-photo-1166473.jpeg?auto=compress&cs=tinysrgb&w=300',
              duration: '13 min',
              description: 'Age-appropriate self-help skills and encouragement techniques'
            },
            { 
              title: 'Work-Life Balance for Dads', 
              type: 'article', 
              category: 'balance',
              thumbnail: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=300',
              duration: '7 min read',
              description: 'Managing career and quality time with toddlers'
            },
            { 
              title: 'Building Emotional Intelligence', 
              type: 'video', 
              category: 'development',
              youtubeId: 'dQw4w9WgXcQ',
              thumbnail: 'https://images.pexels.com/photos/1166473/pexels-photo-1166473.jpeg?auto=compress&cs=tinysrgb&w=300',
              duration: '19 min',
              description: 'Teaching toddlers to understand and express emotions'
            },
          ]
        };
      default:
        return { articles: [], fatherContent: [] };
    }
  };

  const content = getStageContent();

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <BookOpen className="w-8 h-8 text-blue-500" />
          <h1 className="text-2xl font-bold text-gray-800">Knowledge Center</h1>
        </div>
        <p className="text-gray-600">
          Evidence-based information for {userProfile.stage} stage
        </p>
      </div>

      {/* Content for Mother/Father Toggle */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex bg-gray-100 rounded-lg p-1 mb-4">
          <button
            onClick={() => setSelectedCategory('mother')}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
              selectedCategory === 'mother'
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md'
                : 'text-gray-600'
            }`}
          >
            <Heart className="w-4 h-4 inline mr-2" />
            For Mothers
          </button>
          <button
            onClick={() => setSelectedCategory('father')}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
              selectedCategory === 'father'
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'
                : 'text-gray-600'
            }`}
          >
            <User className="w-4 h-4 inline mr-2" />
            For Fathers
          </button>
        </div>

        <div className="space-y-3">
          {(selectedCategory === 'father' ? content.fatherContent : content.articles).map((item, index) => (
            <div key={index} className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-xl hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer overflow-hidden">
              <div className="flex">
                {/* Thumbnail */}
                <div className="relative w-24 h-24 flex-shrink-0">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  )}
                  {item.youtubeId && (
                    <div className="absolute top-1 right-1 bg-red-600 text-white text-xs px-1 py-0.5 rounded">
                      YouTube
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-1 p-4">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-gray-800 text-sm leading-tight">{item.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ml-2 flex-shrink-0 ${
                        item.type === 'video' 
                          ? 'bg-red-100 text-red-600' 
                          : 'bg-blue-100 text-blue-600'
                      }`}>
                        {item.type === 'video' ? <Video className="w-3 h-3 inline mr-1" /> : <FileText className="w-3 h-3 inline mr-1" />}
                        {item.type}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-500">{item.duration}</span>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded capitalize">{item.category}</span>
                      </div>
                      {item.youtubeId && (
                        <ExternalLink className="w-3 h-3 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Government Schemes */}
      {userProfile.incomeRange !== 'above-8' && (
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Heart className="w-5 h-5 mr-2 text-green-500" />
            Government Schemes
          </h2>
          <div className="space-y-3">
            <div className="p-4 border-l-4 border-green-500 bg-gradient-to-r from-green-50 to-green-100 rounded-r-lg">
              <div>
                <h3 className="font-semibold text-gray-800">Pradhan Mantri Matru Vandana Yojana (PMMVY)</h3>
                <p className="text-sm text-gray-600">₹5,000 cash assistance for first child in 3 installments</p>
                <div className="flex items-center space-x-2 mt-2">
                  <button className="text-green-600 font-semibold text-sm bg-white px-3 py-1 rounded-lg shadow-sm">Learn More</button>
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-xs text-gray-500">4.8/5 rating</span>
                </div>
              </div>
            </div>
            <div className="p-4 border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-blue-100 rounded-r-lg">
              <div>
                <h3 className="font-semibold text-gray-800">Janani Suraksha Yojana (JSY)</h3>
                <p className="text-sm text-gray-600">Cash incentive for institutional delivery - ₹1,400 (rural), ₹1,000 (urban)</p>
                <div className="flex items-center space-x-2 mt-2">
                  <button className="text-blue-600 font-semibold text-sm bg-white px-3 py-1 rounded-lg shadow-sm">Check Eligibility</button>
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-xs text-gray-500">4.6/5 rating</span>
                </div>
              </div>
            </div>
            <div className="p-4 border-l-4 border-purple-500 bg-gradient-to-r from-purple-50 to-purple-100 rounded-r-lg">
              <div>
                <h3 className="font-semibold text-gray-800">Universal Immunization Program (UIP)</h3>
                <p className="text-sm text-gray-600">All vaccines free at government centers - covers 12 diseases</p>
                <div className="flex items-center space-x-2 mt-2">
                  <button className="text-purple-600 font-semibold text-sm bg-white px-3 py-1 rounded-lg shadow-sm">Find Centers</button>
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-xs text-gray-500">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grandma's Tips */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <Heart className="w-5 h-5 mr-2 text-yellow-500" />
          Traditional Wisdom
        </h2>
        <div className="space-y-3">
          <div className="p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border-l-4 border-yellow-500">
            <div>
              <h3 className="font-semibold text-gray-800">Ajwain (Carom Seeds) Water</h3>
              <p className="text-sm text-gray-600">Traditional remedy for baby colic, gas problems, and digestive issues</p>
              <p className="text-xs text-gray-500 mt-2">⚠️ Consult doctor before use</p>
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-l-4 border-green-500">
            <div>
              <h3 className="font-semibold text-gray-800">Coconut Oil Massage</h3>
              <p className="text-sm text-gray-600">Gentle massage for better sleep and skin health</p>
              <p className="text-xs text-gray-500 mt-2">✓ Scientifically proven benefits</p>
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border-l-4 border-orange-500">
            <div>
              <h3 className="font-semibold text-gray-800">Haldi Doodh (Turmeric Milk)</h3>
              <p className="text-sm text-gray-600">Boosts immunity and helps with post-delivery recovery</p>
              <p className="text-xs text-gray-500 mt-2">✓ Rich in antioxidants and anti-inflammatory properties</p>
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg border-l-4 border-pink-500">
            <div>
              <h3 className="font-semibold text-gray-800">Adrak Chai (Ginger Tea)</h3>
              <p className="text-sm text-gray-600">Helps with morning sickness and improves digestion</p>
              <p className="text-xs text-gray-500 mt-2">✓ Natural remedy for nausea and cold symptoms</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Common Questions</h2>
        <div className="space-y-3">
          <div className="p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-all cursor-pointer">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-orange-600 font-bold text-sm">Q</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">
                  {userProfile.stage === 'pregnancy' 
                    ? 'What foods should I avoid during pregnancy?' 
                    : userProfile.stage === 'infancy'
                    ? 'How often should I feed my baby?'
                    : 'When should my toddler start talking?'
                  }
                </p>
                <p className="text-sm text-gray-600 mt-1">Tap to read complete answer with expert advice</p>
              </div>
            </div>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-all cursor-pointer">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-orange-600 font-bold text-sm">Q</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">
                  {userProfile.stage === 'pregnancy' 
                    ? 'How much weight should I gain during pregnancy?' 
                    : userProfile.stage === 'infancy'
                    ? 'When do babies start sleeping through the night?'
                    : 'How to handle toddler tantrums effectively?'
                  }
                </p>
                <p className="text-sm text-gray-600 mt-1">Tap to read complete answer with expert advice</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeView;