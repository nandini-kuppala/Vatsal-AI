import React, { useState } from 'react';
import { UserProfile } from '../../types/user';
import { Users, MessageCircle, MapPin, Calendar, Heart, Plus, Mic, Send, Smile, Paperclip, Phone, Video, MoreHorizontal, Circle } from 'lucide-react';

interface CommunityViewProps {
  userProfile: UserProfile;
}

const CommunityView: React.FC<CommunityViewProps> = ({ userProfile }) => {
  const [activeTab, setActiveTab] = useState('nearby');
  const [chatMessage, setChatMessage] = useState('');
  const [showLiveChat, setShowLiveChat] = useState(true);

  const mockChatMessages = [
    {
      id: 1,
      user: 'Priya M.',
      message: 'Anyone else feeling baby kicks more at night? 😊',
      time: '2 min ago',
      avatar: 'PM',
      online: true
    },
    {
      id: 2,
      user: 'Rahul S.',
      message: 'Yes! Our little one is most active around 10 PM',
      time: '1 min ago',
      avatar: 'RS',
      online: true
    },
    {
      id: 3,
      user: 'Anita K.',
      message: 'That\'s completely normal! They often have different sleep cycles',
      time: 'just now',
      avatar: 'AK',
      online: true
    }
  ];

  const mockPosts = [
    {
      id: 1,
      author: 'Priya M.',
      location: 'Nearby • 2.3 km',
      time: '2 hours ago',
      content: 'First time feeling baby kick! So exciting! Any tips for tracking movements?',
      likes: 12,
      comments: 5,
      stage: 'pregnancy'
    },
    {
      id: 2,
      author: 'Rahul S.',
      location: 'Same area',
      time: '5 hours ago',
      content: 'Looking for a good pediatrician near Jubilee Hills. Any recommendations?',
      likes: 8,
      comments: 11,
      stage: 'infancy'
    },
    {
      id: 3,
      author: 'Anita K.',
      location: 'Nearby • 1.8 km',
      time: '1 day ago',
      content: 'My 15-month-old started walking! Sharing some safety tips for other parents...',
      likes: 24,
      comments: 7,
      stage: 'toddlerhood'
    }
  ];

  const mockExperts = [
    {
      name: 'Dr. Sunita Sharma',
      specialty: 'Pediatrician',
      distance: '1.2 km',
      rating: 4.8,
      experience: '15 years'
    },
    {
      name: 'Dr. Rajesh Kumar',
      specialty: 'Gynecologist',
      distance: '2.5 km',
      rating: 4.9,
      experience: '20 years'
    }
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'pregnancy': return 'bg-orange-100 text-orange-800';
      case 'infancy': return 'bg-green-100 text-green-800';
      case 'toddlerhood': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 shadow-lg text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Users className="w-8 h-8 text-white" />
            <div>
              <h1 className="text-2xl font-bold text-white">Community</h1>
              <p className="text-blue-100">Connect with parents like you</p>
            </div>
          </div>
          <button className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
            <Plus className="w-6 h-6 text-white" />
          </button>
        </div>
        
        <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
          <p className="text-sm text-white font-medium">
            🌍 Connected with {userProfile.stage === 'pregnancy' ? 'expecting parents' : 'parents'} in {userProfile.location} • 247 online now
          </p>
        </div>
      </div>

      {/* Live Chat Section */}
      {showLiveChat && (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
                <h2 className="text-lg font-bold">Live Discussion</h2>
                <span className="text-sm bg-white bg-opacity-20 px-2 py-1 rounded-full">12 active</span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-all">
                  <Phone className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-all">
                  <Video className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setShowLiveChat(false)}
                  className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-all"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Chat Messages */}
          <div className="h-64 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {mockChatMessages.map((msg) => (
              <div key={msg.id} className="flex items-start space-x-3">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-xs">{msg.avatar}</span>
                  </div>
                  {msg.online && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-gray-800 text-sm">{msg.user}</span>
                    <span className="text-xs text-gray-500">{msg.time}</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm text-gray-700">{msg.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Chat Input */}
          <div className="p-4 border-t bg-white">
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all">
                <Paperclip className="w-5 h-5" />
              </button>
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full p-3 pr-12 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-50"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                  <Smile className="w-5 h-5" />
                </button>
              </div>
              <button className="p-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:from-green-600 hover:to-green-700 transition-all shadow-lg">
                <Send className="w-5 h-5" />
              </button>
              <button className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg">
                <Mic className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab Navigation */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-1 mb-6">
          <button
            onClick={() => setActiveTab('nearby')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
              activeTab === 'nearby'
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105'
                : 'text-gray-600 hover:text-blue-600 hover:bg-white hover:bg-opacity-50'
            }`}
          >
            <Users className="w-4 h-4 inline mr-2" />
            Nearby Parents
          </button>
          <button
            onClick={() => setActiveTab('experts')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
              activeTab === 'experts'
                ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg transform scale-105'
                : 'text-gray-600 hover:text-purple-600 hover:bg-white hover:bg-opacity-50'
            }`}
          >
            <Heart className="w-4 h-4 inline mr-2" />
            Local Experts
          </button>
        </div>

        {activeTab === 'nearby' && (
          <div className="space-y-4">
            {mockPosts.map((post) => (
              <div key={post.id} className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-blue-300 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-semibold">
                          {post.author.charAt(0)}
                        </span>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="font-bold text-gray-800">{post.author}</p>
                        <Circle className="w-1 h-1 fill-current text-gray-400" />
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStageColor(post.stage)}`}>
                          {post.stage}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                        <MapPin className="w-3 h-3" />
                        <span>{post.location}</span>
                        <span>•</span>
                        <span>{post.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>
                
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors group">
                      <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors group">
                      <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">{post.comments}</span>
                    </button>
                  </div>
                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg">
                    Reply
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'experts' && (
          <div className="space-y-4">
            {mockExperts.map((expert, index) => (
              <div key={index} className="bg-gradient-to-r from-white to-green-50 border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-green-300 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">
                          {expert.name.split(' ').map(n => n.charAt(0)).join('')}
                        </span>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">{expert.name}</h3>
                      <p className="text-green-600 font-semibold">{expert.specialty}</p>
                      <div className="flex items-center space-x-3 text-sm text-gray-500 mt-1">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{expert.distance}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <span>⭐</span>
                          <span className="font-medium text-yellow-600">{expert.rating}</span>
                        </div>
                        <span>•</span>
                        <span>{expert.experience}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg">
                    Book Consultation
                  </button>
                  <button className="flex-1 border-2 border-green-500 text-green-600 font-semibold py-3 px-4 rounded-lg hover:bg-green-50 transition-all">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Enhanced Post Creation */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <MessageCircle className="w-5 h-5 mr-2 text-blue-500" />
          Share Your Experience
        </h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {userProfile.name.charAt(0)}
                      </span>
                    </div>
            <div className="flex-1">
              <textarea
                placeholder="Share your thoughts, ask questions, or offer advice..."
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 resize-none"
                rows={3}
              />
            </div>
          </div>
          <div className="flex items-center justify-between pl-13">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 bg-blue-50 px-3 py-2 rounded-lg hover:bg-blue-100 transition-all">
                <Mic className="w-4 h-4" />
                <span className="text-sm font-medium">Voice Post</span>
              </button>
              <button className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 bg-purple-50 px-3 py-2 rounded-lg hover:bg-purple-100 transition-all">
                <Paperclip className="w-4 h-4" />
                <span className="text-sm font-medium">Attach</span>
              </button>
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg">
              Post
            </button>
          </div>
        </div>
      </div>

      {/* Support Groups */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <Users className="w-5 h-5 mr-2 text-purple-500" />
          Support Groups
        </h2>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-pink-50 to-pink-100 border-l-4 border-pink-500 rounded-xl p-5 hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">
                    {userProfile.stage === 'pregnancy' ? 'Expecting Mothers Circle' : 
                     userProfile.stage === 'infancy' ? 'New Parents Support' : 
                     'Toddler Parents Network'}
                  </h3>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <span>124 members</span>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>15 online now</span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold py-2 px-6 rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all shadow-md">
                Join
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 rounded-xl p-5 hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{userProfile.location} Parents</h3>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <span>Local community group</span>
                    <span>•</span>
                    <span>89 members</span>
                  </div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-md">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Local Services */}
      {userProfile.stage === 'toddlerhood' && (
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-green-500" />
            Local Services
          </h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-4 hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-800">Rainbow Playschool</h3>
                  <p className="text-sm text-gray-600">0.8 km • ₹3,000/month • Ages 1.5-3 years</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">⭐ 4.5</span>
                    <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full">Montessori</span>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-md">
                  Get Details
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-800">Central Park</h3>
                  <p className="text-sm text-gray-600">1.2 km • Toddler-safe playground equipment</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full">Open 6 AM - 8 PM</span>
                    <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">Free Entry</span>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-md">
                  Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityView;