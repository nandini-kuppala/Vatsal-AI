import React, { useState } from 'react';
import { UserProfile } from '../../types/user';
import { BarChart3, TrendingUp, Calendar, Heart, Baby, Activity, Upload, FileText, Camera, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

interface ReportsViewProps {
  userProfile: UserProfile;
}

const ReportsView: React.FC<ReportsViewProps> = ({ userProfile }) => {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const getStageTitle = () => {
    switch (userProfile.stage) {
      case 'pregnancy': return 'Pregnancy Analytics';
      case 'infancy': return 'Baby Development Analytics';
      case 'toddlerhood': return 'Toddler Growth Analytics';
      default: return 'Health Analytics';
    }
  };

  const getUploadDescription = () => {
    if (userProfile.stage === 'pregnancy') {
      return userProfile.role === 'mother' 
        ? 'Upload your medical reports, ultrasound scans, and lab results for AI-powered analysis'
        : 'Upload your wife\'s medical reports, ultrasound scans, and lab results for comprehensive analysis';
    } else {
      return userProfile.role === 'mother'
        ? 'Upload your baby\'s medical reports, growth charts, vaccination records, and any health concerns'
        : 'Upload your baby\'s medical reports, growth charts, vaccination records, and health updates';
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const mockPastReports = {
    pregnancy: [
      {
        id: 1,
        type: 'Ultrasound',
        date: '2024-01-15',
        title: '20-Week Anatomy Scan',
        status: 'normal',
        insights: ['Baby development is on track', 'All organs appear healthy', 'Estimated weight: 350g'],
        file: 'ultrasound_20w.pdf'
      },
      {
        id: 2,
        type: 'Blood Test',
        date: '2024-01-10',
        title: 'Complete Blood Count',
        status: 'attention',
        insights: ['Hemoglobin slightly low: 10.8 g/dL', 'Iron supplementation recommended', 'Follow-up in 4 weeks'],
        file: 'blood_test_jan.pdf'
      },
      {
        id: 3,
        type: 'Glucose Test',
        date: '2024-01-05',
        title: 'Gestational Diabetes Screening',
        status: 'normal',
        insights: ['Blood sugar levels normal', 'No signs of gestational diabetes', 'Continue healthy diet'],
        file: 'glucose_test.pdf'
      }
    ],
    infancy: [
      {
        id: 1,
        type: 'Growth Chart',
        date: '2024-01-20',
        title: '6-Month Growth Assessment',
        status: 'normal',
        insights: ['Weight: 7.2kg (75th percentile)', 'Height: 68cm (80th percentile)', 'Head circumference normal'],
        file: 'growth_6m.pdf'
      },
      {
        id: 2,
        type: 'Fever Report',
        date: '2024-01-12',
        title: 'Fever Episode Analysis',
        status: 'resolved',
        insights: ['Viral fever, lasted 3 days', 'Temperature peaked at 101.5°F', 'Responded well to paracetamol'],
        file: 'fever_jan.pdf'
      },
      {
        id: 3,
        type: 'Vaccination',
        date: '2024-01-08',
        title: 'DPT & Polio Vaccination',
        status: 'completed',
        insights: ['No adverse reactions', 'Next vaccines due at 9 months', 'Immunity building on schedule'],
        file: 'vaccination_6m.pdf'
      }
    ],
    toddlerhood: [
      {
        id: 1,
        type: 'Development',
        date: '2024-01-18',
        title: '15-Month Development Check',
        status: 'excellent',
        insights: ['Walking independently achieved', '8 words vocabulary', 'Social skills developing well'],
        file: 'development_15m.pdf'
      },
      {
        id: 2,
        type: 'Illness Report',
        date: '2024-01-10',
        title: 'Cold & Cough Episode',
        status: 'resolved',
        insights: ['Mild upper respiratory infection', 'Duration: 5 days', 'No complications observed'],
        file: 'cold_jan.pdf'
      },
      {
        id: 3,
        type: 'Nutrition',
        date: '2024-01-05',
        title: 'Dietary Assessment',
        status: 'good',
        insights: ['Eating variety of foods', 'Adequate protein intake', 'Suggest more iron-rich foods'],
        file: 'nutrition_15m.pdf'
      }
    ]
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'normal':
      case 'completed':
      case 'excellent':
      case 'resolved':
      case 'good':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'attention':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal':
      case 'completed':
      case 'excellent':
      case 'resolved':
      case 'good':
        return 'border-green-200 bg-green-50';
      case 'attention':
        return 'border-yellow-200 bg-yellow-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  const currentReports = mockPastReports[userProfile.stage] || [];

  const renderPregnancyCharts = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-orange-500" />
          Weight & Health Trends
        </h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-4 bg-green-50 rounded-lg text-center">
            <p className="text-2xl font-bold text-green-600">+12 kg</p>
            <p className="text-sm text-gray-600">Weight gain</p>
            <div className="w-full bg-green-200 rounded-full h-2 mt-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg text-center">
            <p className="text-2xl font-bold text-blue-600">130/80</p>
            <p className="text-sm text-gray-600">BP (Normal)</p>
            <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
        <div className="p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2">AI Insights</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Weight gain is within healthy range for your stage</li>
            <li>• Blood pressure trending stable - excellent!</li>
            <li>• Iron levels improving with supplementation</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderInfancyCharts = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
          <Baby className="w-5 h-5 mr-2 text-green-500" />
          Growth & Development Charts
        </h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-4 bg-green-50 rounded-lg text-center">
            <p className="text-2xl font-bold text-green-600">7.2 kg</p>
            <p className="text-sm text-gray-600">Weight (75th %ile)</p>
            <div className="w-full bg-green-200 rounded-full h-2 mt-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg text-center">
            <p className="text-2xl font-bold text-blue-600">68 cm</p>
            <p className="text-sm text-gray-600">Height (80th %ile)</p>
            <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
        <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2">AI Health Insights</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Growth trajectory is excellent - above average</li>
            <li>• Recent fever episode handled well, no concerns</li>
            <li>• Vaccination schedule on track</li>
            <li>• Feeding patterns indicate healthy appetite</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Health Episodes Tracking</h3>
        <div className="space-y-3">
          <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-800">Fever Episode - Jan 12</p>
                <p className="text-sm text-gray-600">Peak: 101.5°F, Duration: 3 days</p>
              </div>
              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Resolved</span>
            </div>
          </div>
          <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-800">Vaccination - Jan 8</p>
                <p className="text-sm text-gray-600">DPT & Polio, No reactions</p>
              </div>
              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderToddlerhoodCharts = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
          <Activity className="w-5 h-5 mr-2 text-purple-500" />
          Development & Growth Analytics
        </h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-4 bg-purple-50 rounded-lg text-center">
            <p className="text-2xl font-bold text-purple-600">15</p>
            <p className="text-sm text-gray-600">Words spoken</p>
            <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg text-center">
            <p className="text-2xl font-bold text-orange-600">12.5 kg</p>
            <p className="text-sm text-gray-600">Current weight</p>
            <div className="w-full bg-orange-200 rounded-full h-2 mt-2">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
        <div className="p-4 bg-gradient-to-r from-purple-50 to-orange-50 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2">AI Development Insights</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Language development ahead of schedule - excellent!</li>
            <li>• Motor skills progressing normally</li>
            <li>• Recent cold resolved without complications</li>
            <li>• Nutrition intake is well-balanced</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Health Events</h3>
        <div className="space-y-3">
          <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-800">Development Check - Jan 18</p>
                <p className="text-sm text-gray-600">15-month milestone assessment</p>
              </div>
              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Excellent</span>
            </div>
          </div>
          <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-800">Cold Episode - Jan 10</p>
                <p className="text-sm text-gray-600">Upper respiratory infection, 5 days</p>
              </div>
              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Resolved</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <BarChart3 className="w-8 h-8 text-orange-500" />
          <h1 className="text-2xl font-bold text-gray-800">{getStageTitle()}</h1>
        </div>
        <p className="text-gray-600">
          Track progress and view detailed health insights for optimal care decisions.
        </p>
      </div>

      {/* Upload Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center">
            <Upload className="w-5 h-5 mr-2 text-blue-500" />
            Upload Medical Reports
          </h2>
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:from-blue-600 hover:to-blue-700 transition-all">
            <Camera className="w-4 h-4" />
            <span>Scan Document</span>
          </button>
        </div>
        
        <div className="mb-4">
          <p className="text-gray-600 text-sm mb-3">{getUploadDescription()}</p>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
            <input
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600 font-medium">Click to upload or drag and drop</p>
              <p className="text-sm text-gray-500 mt-1">PDF, JPG, PNG, DOC files up to 10MB</p>
            </label>
          </div>
        </div>

        {uploadedFiles.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-800">Recently Uploaded:</h3>
            {uploadedFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-green-600" />
                  <span className="text-gray-800">{file.name}</span>
                </div>
                <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">Processing...</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
          <button
            onClick={() => setSelectedTab('overview')}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
              selectedTab === 'overview'
                ? 'bg-white text-orange-600 shadow-sm'
                : 'text-gray-600'
            }`}
          >
            Overview & Charts
          </button>
          <button
            onClick={() => setSelectedTab('reports')}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
              selectedTab === 'reports'
                ? 'bg-white text-orange-600 shadow-sm'
                : 'text-gray-600'
            }`}
          >
            Past Reports
          </button>
        </div>

        {selectedTab === 'overview' && (
          <div>
            {/* Health Summary Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white">
                <Heart className="w-6 h-6 mb-2" />
                <p className="text-sm opacity-90">Overall Health</p>
                <p className="text-xl font-bold">Excellent</p>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
                <Calendar className="w-6 h-6 mb-2" />
                <p className="text-sm opacity-90">Next Checkup</p>
                <p className="text-xl font-bold">5 days</p>
              </div>
            </div>

            {/* Stage-specific charts */}
            {userProfile.stage === 'pregnancy' && renderPregnancyCharts()}
            {userProfile.stage === 'infancy' && renderInfancyCharts()}
            {userProfile.stage === 'toddlerhood' && renderToddlerhoodCharts()}
          </div>
        )}

        {selectedTab === 'reports' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">Medical History</h3>
              <span className="text-sm text-gray-500">{currentReports.length} reports</span>
            </div>
            
            {currentReports.map((report) => (
              <div key={report.id} className={`p-4 rounded-lg border-2 ${getStatusColor(report.status)}`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(report.status)}
                    <div>
                      <h4 className="font-semibold text-gray-800">{report.title}</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span>{report.type}</span>
                        <span>•</span>
                        <span>{new Date(report.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View Report
                  </button>
                </div>
                
                <div className="ml-7">
                  <h5 className="font-medium text-gray-800 mb-2">AI Analysis:</h5>
                  <ul className="space-y-1">
                    {report.insights.map((insight, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {insight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-gray-800 mb-4">AI Recommendations</h3>
        <div className="space-y-3">
          <div className="p-3 bg-green-50 rounded-lg">
            <p className="font-semibold text-green-800">Keep up the great work!</p>
            <p className="text-sm text-gray-600">All indicators are positive and on track.</p>
          </div>
          <div className="p-3 bg-blue-50 rounded-lg">
            <p className="font-semibold text-blue-800">Focus Area</p>
            <p className="text-sm text-gray-600">
              {userProfile.stage === 'pregnancy' 
                ? 'Continue regular exercise and maintain iron supplementation' 
                : userProfile.stage === 'infancy'
                ? 'Monitor growth patterns and maintain vaccination schedule'
                : 'Encourage language development and ensure balanced nutrition'
              }
            </p>
          </div>
          <div className="p-3 bg-purple-50 rounded-lg">
            <p className="font-semibold text-purple-800">Next Steps</p>
            <p className="text-sm text-gray-600">
              Upload your next medical reports for continued AI analysis and personalized insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsView;