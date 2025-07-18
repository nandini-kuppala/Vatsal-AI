import React, { useState } from 'react';
import { UserProfile } from '../../types/user';
import { Mic, Camera, Volume2, Brain, Shield, MessageCircle, Play, Pause } from 'lucide-react';

interface AssistantViewProps {
  userProfile: UserProfile;
}

const AssistantView: React.FC<AssistantViewProps> = ({ userProfile }) => {
  const [isListening, setIsListening] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);

  const getStageFeatures = () => {
    switch (userProfile.stage) {
      case 'pregnancy':
        return [
          { icon: Camera, title: 'Food Safety Check', desc: 'Take a photo to check if food is safe during pregnancy' },
          { icon: Mic, title: 'Voice Queries', desc: 'Ask any pregnancy-related questions in your language' },
          { icon: MessageCircle, title: 'Chat Assistant', desc: 'Get instant answers about symptoms and concerns' },
        ];
      case 'infancy':
        return [
          { icon: Volume2, title: 'Cry Analysis', desc: 'AI identifies why your baby is crying' },
          { icon: Shield, title: 'Baby Monitor', desc: 'AI safety monitoring when you\'re not around' },
          { icon: Camera, title: 'Safety Check', desc: 'Check if toys and foods are safe for baby' },
        ];
      case 'toddlerhood':
        return [
          { icon: Brain, title: 'Behavior Analysis', desc: 'Understand toddler behavior patterns' },
          { icon: Camera, title: 'Safety Scanner', desc: 'Check environment safety for active toddlers' },
          { icon: Volume2, title: 'Entertainment AI', desc: 'Interactive games and songs for brain development' },
        ];
      default:
        return [];
    }
  };

  const features = getStageFeatures();

  const mockConversations = {
    pregnancy: [
      {
        id: 4,
        type: 'photo',
        question: 'Is this pizza safe during pregnancy?',
        answer: 'This pizza has soft cheese on top which should be avoided during pregnancy. Soft cheeses like brie, camembert, feta, and blue cheese should be avoided unless cooked to a high temperature as they may contain listeria...',
        time: '30 minutes ago',
        imageUrl: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
      },
      {
        id: 5,
        type: 'voice',
        question: 'Can I eat sushi during pregnancy?',
        answer: 'Raw fish in sushi should be avoided during pregnancy due to risk of foodborne illness. Cooked sushi rolls like California rolls or tempura rolls are safer options...',
        time: '4 hours ago',
        duration: '1m 5s'
      },
      {
        id: 6,
        type: 'photo',
        question: 'Are these herbs safe for cooking?',
        answer: 'Fresh basil and oregano are safe in cooking amounts during pregnancy. However, avoid large medicinal amounts of herbs. These look fresh and perfect for cooking...',
        time: '6 hours ago',
        imageUrl: 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
      },
      {
        id: 1,
        type: 'voice',
        question: 'Is it safe to eat papaya during pregnancy?',
        answer: 'Ripe papaya in moderation is safe, but avoid unripe papaya as it contains latex which can trigger contractions...',
        time: '2 hours ago',
        duration: '45s'
      },
      {
        id: 2,
        type: 'photo',
        question: 'Food safety check (Photo)',
        answer: 'This appears to be cooked chicken curry which is safe during pregnancy. Make sure it\'s well-cooked and hot...',
        time: 'Yesterday',
        imageUrl: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
      },
      {
        id: 3,
        type: 'voice',
        question: 'What exercises are safe in second trimester?',
        answer: 'Prenatal yoga, swimming, and walking are excellent choices. Avoid contact sports and exercises lying flat on your back...',
        time: '3 days ago',
        duration: '1m 20s'
      }
    ],
    infancy: [
      {
        id: 4,
        type: 'photo',
        question: 'Is this rice dish safe for my 8-month baby?',
        answer: 'Yes, this rice dish looks safe for your 8-month-old baby! Rice is an excellent first food. Make sure to mash it well or cut into very small pieces to prevent choking. Avoid adding salt or spices for babies under 1 year...',
        time: '45 minutes ago',
        imageUrl: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
      },
      {
        id: 5,
        type: 'audio',
        question: 'Sleep pattern analysis',
        answer: 'Based on the sleep sounds, your baby seems to be in light sleep phase. The occasional stirring is normal. Try to keep the room quiet for deeper sleep...',
        time: '2 hours ago',
        duration: '1m 10s'
      },
      {
        id: 6,
        type: 'photo',
        question: 'Are these banana pieces the right size?',
        answer: 'Perfect! These banana pieces are cut to the ideal size for baby-led weaning. Soft, finger-sized pieces that baby can grasp easily. Bananas are excellent for 6+ month babies...',
        time: '5 hours ago',
        imageUrl: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
      },
      {
        id: 7,
        type: 'voice',
        question: 'When can I introduce eggs to my baby?',
        answer: 'You can introduce eggs from 6 months old. Start with well-cooked egg yolk first, then gradually introduce egg white. Watch for any allergic reactions...',
        time: '8 hours ago',
        duration: '50s'
      },
      {
        id: 1,
        type: 'audio',
        question: 'Baby crying pattern analysis',
        answer: 'Based on the cry pattern, your baby might be hungry. The rhythmic, demanding cry suggests feeding time...',
        time: '1 hour ago',
        duration: '30s'
      },
      {
        id: 2,
        type: 'photo',
        question: 'Baby rash identification',
        answer: 'This appears to be mild diaper rash. Keep the area clean and dry, use barrier cream, and it should improve in 2-3 days...',
        time: '2 days ago',
        imageUrl: 'https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
      },
      {
        id: 3,
        type: 'voice',
        question: 'How often should I feed my 6-month-old?',
        answer: 'At 6 months, babies typically need 4-6 feeds per day plus 2-3 solid meals. Follow your baby\'s hunger cues...',
        time: '4 days ago',
        duration: '55s'
      }
    ],
    toddlerhood: [
      {
        id: 4,
        type: 'photo',
        question: 'Is this toy safe if my toddler puts it in mouth?',
        answer: 'This wooden toy appears safe but check for small parts that could break off. At 15+ months, most toddlers explore with their mouth. Ensure it\'s larger than a toilet paper roll to prevent choking...',
        time: '1 hour ago',
        imageUrl: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
      },
      {
        id: 5,
        type: 'voice',
        question: 'My toddler refuses to eat vegetables, what should I do?',
        answer: 'This is very common! Try mixing vegetables into favorite foods, make them fun with different shapes, and keep offering without pressure. It can take 10+ exposures before acceptance...',
        time: '2 hours ago',
        duration: '1m 30s'
      },
      {
        id: 6,
        type: 'photo',
        question: 'Are these strawberries cut safely for my 18-month-old?',
        answer: 'These strawberries are cut perfectly! Quartered lengthwise is the safest way for toddlers. Whole strawberries can be a choking hazard. Great job on the preparation!',
        time: '4 hours ago',
        imageUrl: 'https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
      },
      {
        id: 7,
        type: 'photo',
        question: 'Is this playground equipment age-appropriate?',
        answer: 'This slide looks perfect for toddlers! The height is appropriate and it has safety rails. Always supervise and check that the surface underneath is soft for safe landing...',
        time: '6 hours ago',
        imageUrl: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
      },
      {
        id: 1,
        type: 'photo',
        question: 'Food safety check (Photo)',
        answer: 'These grapes look fresh and safe, but remember to cut them into quarters lengthwise to prevent choking for toddlers...',
        time: '3 hours ago',
        imageUrl: 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
      },
      {
        id: 2,
        type: 'voice',
        question: 'How to handle toddler tantrums?',
        answer: 'Stay calm, acknowledge their feelings, offer choices when possible, and maintain consistent boundaries. This phase will pass...',
        time: '1 day ago',
        duration: '1m 15s'
      },
      {
        id: 3,
        type: 'photo',
        question: 'Playground safety assessment',
        answer: 'This playground equipment looks age-appropriate for toddlers. Check for sharp edges and ensure soft landing surfaces...',
        time: '2 days ago',
        imageUrl: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
      }
    ]
  };

  const currentConversations = mockConversations[userProfile.stage] || [];

  const toggleAudioPlayback = (conversationId: string) => {
    if (playingAudio === conversationId) {
      setPlayingAudio(null);
    } else {
      setPlayingAudio(conversationId);
      // Simulate audio ending after 3 seconds
      setTimeout(() => setPlayingAudio(null), 3000);
    }
  };

  const getConversationIcon = (type: string, conversationId: string) => {
    switch (type) {
      case 'voice':
        return <Mic className="w-4 h-4 text-blue-600" />;
      case 'audio':
        const isPlaying = playingAudio === conversationId;
        return isPlaying ? 
          <Pause className="w-4 h-4 text-green-600" /> : 
          <Play className="w-4 h-4 text-green-600" />;
      case 'photo':
        return <Camera className="w-4 h-4 text-purple-600" />;
      default:
        return <MessageCircle className="w-4 h-4 text-gray-600" />;
    }
  };

  const getBorderColor = (type: string) => {
    switch (type) {
      case 'voice': return 'border-blue-500';
      case 'audio': return 'border-green-500';
      case 'photo': return 'border-purple-500';
      default: return 'border-gray-500';
    }
  };

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case 'voice': return 'bg-blue-100';
      case 'audio': return 'bg-green-100';
      case 'photo': return 'bg-purple-100';
      default: return 'bg-gray-100';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'voice': return 'Voice';
      case 'audio': return 'Audio';
      case 'photo': return 'Photo';
      default: return 'Text';
    }
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">AI Care Assistant</h1>
            <p className="text-gray-600">Smart help for {userProfile.stage} stage</p>
          </div>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-4">
          <p className="text-sm text-purple-800 font-medium">
            🤖 Vatsal AI - Your personal assistant trained on medical guidelines and Indian parenting practices
          </p>
        </div>
      </div>

      {/* Voice & Visual Assistants */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Smart Assistants</h2>
        
        <div className="grid grid-cols-2 gap-6">
          {/* Voice Assistant */}
          <div className="text-center">
            <button
              onClick={() => setIsListening(!isListening)}
              className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-300 shadow-lg relative ${
                isListening 
                  ? 'bg-gradient-to-r from-red-500 to-red-600 scale-110' 
                  : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:scale-105'
              }`}
            >
              <Mic className={`w-8 h-8 text-white ${isListening ? 'animate-pulse' : ''}`} />
              {isListening && (
                <div className="absolute inset-0 rounded-full border-4 border-red-300 animate-ping"></div>
              )}
            </button>
            <h3 className="font-bold text-gray-800 mt-3 mb-1">Voice Assistant</h3>
            <p className="text-sm text-gray-600 mb-2">
              {isListening ? 'Listening...' : 'Tap to speak anything'}
            </p>
            <p className="text-xs text-gray-500">
              Any language supported
            </p>
          </div>

          {/* Visual Assistant */}
          <div className="text-center">
            <button
              onClick={() => setIsCameraActive(!isCameraActive)}
              className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-300 shadow-lg relative ${
                isCameraActive 
                  ? 'bg-gradient-to-r from-green-500 to-green-600 scale-110' 
                  : 'bg-gradient-to-r from-purple-500 to-purple-600 hover:scale-105'
              }`}
            >
              <Camera className={`w-8 h-8 text-white ${isCameraActive ? 'animate-pulse' : ''}`} />
              {isCameraActive && (
                <div className="absolute inset-0 rounded-full border-4 border-green-300 animate-ping"></div>
              )}
            </button>
            <h3 className="font-bold text-gray-800 mt-3 mb-1">Visual Assistant</h3>
            <p className="text-sm text-gray-600 mb-2">
              {isCameraActive ? 'Camera active' : 'Tap to take photo'}
            </p>
            <p className="text-xs text-gray-500">
              Get instant answers
            </p>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-green-50 rounded-lg">
          <p className="text-sm text-gray-700 text-center">
            <span className="font-semibold">💡 Pro Tip:</span> Ask questions like "Is this food safe?" or "Why is my baby crying?" in your preferred language
          </p>
        </div>
      </div>

      {/* AI Features */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Specialized AI Features</h2>
        <div className="space-y-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <button
                key={index}
                className="w-full p-4 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all text-left hover:shadow-md"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Recent Conversations */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">Recent Conversations</h2>
          <button className="text-orange-600 font-semibold text-sm">View All</button>
        </div>
        <div className="space-y-3">
          {currentConversations.map((conversation) => (
            <div key={conversation.id} className={`p-4 bg-gray-50 rounded-xl border-l-4 ${getBorderColor(conversation.type)}`}>
              <div className="flex items-start space-x-3">
                {conversation.type === 'photo' && conversation.imageUrl && (
                  <div className="flex-shrink-0">
                    <img 
                      src={conversation.imageUrl} 
                      alt="Conversation thumbnail"
                      className="w-12 h-12 rounded-lg object-cover border-2 border-purple-200"
                    />
                  </div>
                )}
                {(conversation.type === 'audio' || conversation.type === 'voice') && (
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => toggleAudioPlayback(conversation.id)}
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${getBackgroundColor(conversation.type)} border-2 ${getBorderColor(conversation.type)} hover:scale-105 transition-transform`}
                    >
                      {getConversationIcon(conversation.type, conversation.id)}
                      {playingAudio === conversation.id && (
                        <div className="absolute inset-0 rounded-lg border-2 border-current animate-pulse"></div>
                      )}
                    </button>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800 text-sm">Q: {conversation.question}</p>
                  <p className="text-sm text-gray-600 mt-1">A: {conversation.answer}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center space-x-2">
                      <p className="text-xs text-gray-500">{conversation.time}</p>
                      {conversation.duration && (
                        <>
                          <span className="text-xs text-gray-400">•</span>
                          <p className="text-xs text-gray-500">{conversation.duration}</p>
                        </>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs px-2 py-1 rounded ${getBackgroundColor(conversation.type)} ${conversation.type === 'voice' ? 'text-blue-600' : conversation.type === 'audio' ? 'text-green-600' : 'text-purple-600'}`}>
                        {getTypeLabel(conversation.type)}
                      </span>
                      {playingAudio === conversation.id && (
                        <div className="flex space-x-1">
                          <div className="w-1 h-4 bg-green-500 rounded animate-pulse"></div>
                          <div className="w-1 h-3 bg-green-400 rounded animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-1 h-5 bg-green-500 rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-1 h-2 bg-green-400 rounded animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                          <div className="w-1 h-4 bg-green-500 rounded animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Features */}
      {userProfile.stage === 'infancy' && (
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-white" />
            <h2 className="text-xl font-bold text-white">Safety Monitoring</h2>
          </div>
          <p className="text-red-100 mb-4 text-sm">
            AI-powered baby monitoring with instant alerts for safety concerns
          </p>
          <button className="w-full bg-white text-red-600 font-semibold py-3 px-4 rounded-lg">
            Activate Baby Monitor
          </button>
        </div>
      )}
    </div>
  );
};

export default AssistantView;