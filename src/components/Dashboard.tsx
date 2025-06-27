import React from 'react';
import { TrendingUp, Award, DollarSign, MessageCircle, Star } from 'lucide-react';

const Dashboard: React.FC = () => {
  const sustainabilityGrade = 'A';
  const wastePercentage = 4.2;
  const monthlyProfit = 2847;
  const customerRating = 4.8;

  const wasteData = [
    { month: 'Jan', waste: 6.2 },
    { month: 'Feb', waste: 5.8 },
    { month: 'Mar', waste: 5.1 },
    { month: 'Apr', waste: 4.9 },
    { month: 'May', waste: 4.5 },
    { month: 'Jun', waste: 4.2 },
  ];

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'S': return 'bg-emerald-500';
      case 'A': return 'bg-green-500';
      case 'B': return 'bg-yellow-500';
      case 'C': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const getGradeText = (percentage: number) => {
    if (percentage < 3) return 'S';
    if (percentage < 5) return 'A';
    if (percentage < 10) return 'B';
    if (percentage < 15) return 'C';
    return 'Not Rated';
  };

  const maxWaste = Math.max(...wasteData.map(d => d.waste));

  return (
    <div className="p-4 space-y-6">
      {/* Store Info */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Green Valley Market</h2>
            <p className="text-sm text-gray-500">Downtown Location</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">Today</div>
            <div className="text-sm text-gray-500">June 15, 2024</div>
          </div>
        </div>
      </div>

      {/* Sustainability Grade */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Sustainability Grade</h3>
          <div className={`w-12 h-12 rounded-full ${getGradeColor(sustainabilityGrade)} flex items-center justify-center`}>
            <span className="text-white font-bold text-xl">{sustainabilityGrade}</span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Current Waste Rate</span>
            <span className="font-semibold text-gray-900">{wastePercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.max(20, 100 - (wastePercentage * 6))}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500">Excellent! You're in the top 15% of sustainable stores.</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-sm text-gray-500">Monthly Profit</div>
          </div>
          <div className="text-xl font-bold text-gray-900">${monthlyProfit.toLocaleString()}</div>
          <div className="text-xs text-green-600 flex items-center mt-1">
            <TrendingUp className="w-3 h-3 mr-1" />
            +12% from last month
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Star className="w-4 h-4 text-yellow-600" />
            </div>
            <div className="text-sm text-gray-500">Customer Rating</div>
          </div>
          <div className="text-xl font-bold text-gray-900">{customerRating}</div>
          <div className="text-xs text-gray-500">Based on 247 reviews</div>
        </div>
      </div>

      {/* Waste Trend Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Waste Reduction Trend</h3>
        <div className="space-y-4">
          {wasteData.map((data, index) => (
            <div key={data.month} className="flex items-center space-x-4">
              <div className="w-8 text-sm text-gray-500 font-medium">{data.month}</div>
              <div className="flex-1">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-red-400 to-green-400 h-3 rounded-full transition-all duration-700"
                    style={{ 
                      width: `${(data.waste / maxWaste) * 100}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  ></div>
                </div>
              </div>
              <div className="w-12 text-sm font-semibold text-gray-900 text-right">{data.waste}%</div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-green-50 rounded-lg">
          <p className="text-sm text-green-800">
            <strong>Great progress!</strong> You've reduced waste by 32% since January.
          </p>
        </div>
      </div>

      {/* Customer Feedback */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Customer Feedback</h3>
        <div className="space-y-4">
          <div className="flex space-x-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-green-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-medium text-gray-900">Sarah M.</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600">"Love shopping here knowing they donate excess food instead of wasting it!"</p>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-medium text-gray-900">Mike R.</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600">"Great discounts on items near expiration. Smart and sustainable!"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;