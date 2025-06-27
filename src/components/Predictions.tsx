import React, { useState } from 'react';
import { Package, Clock, AlertTriangle, TrendingDown, Send } from 'lucide-react';

const Predictions: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const sections = [
    {
      id: 'bakery',
      name: 'Bakery',
      icon: '🥖',
      items: [
        { id: 1, name: 'Artisan Bread', inventory: 24, predicted: 18, waste: 6, expiry: 2, price: 4.99 },
        { id: 2, name: 'Croissants', inventory: 16, predicted: 12, waste: 4, expiry: 1, price: 2.49 },
        { id: 3, name: 'Muffins', inventory: 32, predicted: 28, waste: 4, expiry: 3, price: 3.99 },
      ]
    },
    {
      id: 'dairy',
      name: 'Dairy',
      icon: '🥛',
      items: [
        { id: 4, name: 'Organic Milk', inventory: 45, predicted: 38, waste: 7, expiry: 4, price: 5.99 },
        { id: 5, name: 'Greek Yogurt', inventory: 28, predicted: 22, waste: 6, expiry: 6, price: 4.49 },
        { id: 6, name: 'Cheese Blocks', inventory: 18, predicted: 15, waste: 3, expiry: 8, price: 7.99 },
      ]
    },
    {
      id: 'produce',
      name: 'Fresh Produce',
      icon: '🥬',
      items: [
        { id: 7, name: 'Organic Spinach', inventory: 36, predicted: 28, waste: 8, expiry: 2, price: 3.49 },
        { id: 8, name: 'Bananas', inventory: 52, predicted: 45, waste: 7, expiry: 4, price: 2.99 },
        { id: 9, name: 'Tomatoes', inventory: 64, predicted: 58, waste: 6, expiry: 5, price: 4.99 },
      ]
    },
    {
      id: 'canned',
      name: 'Canned Foods',
      icon: '🥫',
      items: [
        { id: 10, name: 'Tomato Sauce', inventory: 48, predicted: 42, waste: 6, expiry: 12, price: 1.99 },
        { id: 11, name: 'Black Beans', inventory: 36, predicted: 30, waste: 6, expiry: 15, price: 2.49 },
      ]
    },
  ];

  const getExpiryColor = (days: number) => {
    if (days <= 3) return 'bg-red-500';
    if (days <= 5) return 'bg-orange-500';
    if (days <= 7) return 'bg-yellow-500';
    return 'bg-gray-300';
  };

  const getExpiryText = (days: number) => {
    if (days <= 3) return 'Expires in 3 days';
    if (days <= 5) return 'Expires in 5 days';
    if (days <= 7) return 'Expires in 1 week';
    return `Expires in ${days} days`;
  };

  const calculateDiscount = (waste: number, price: number) => {
    const discountPercentage = Math.min(waste * 5, 40);
    return Math.round(discountPercentage);
  };

  const calculateDonation = (waste: number) => {
    return Math.max(1, Math.floor(waste * 0.7));
  };

  if (selectedItem) {
    return (
      <div className="p-4 space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <button 
            onClick={() => setSelectedItem(null)}
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
          >
            ←
          </button>
          <h2 className="text-xl font-bold text-gray-900">Item Details</h2>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">{selectedItem.name}</h3>
            <div className={`px-3 py-1 rounded-full text-white text-sm ${getExpiryColor(selectedItem.expiry)}`}>
              {getExpiryText(selectedItem.expiry)}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{selectedItem.inventory}</div>
              <div className="text-sm text-gray-500">Current Inventory</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{selectedItem.predicted}</div>
              <div className="text-sm text-gray-500">Predicted Sales</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{selectedItem.waste}</div>
              <div className="text-sm text-gray-500">Potential Waste</div>
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div className="flex h-3 rounded-full overflow-hidden">
              <div 
                className="bg-green-500" 
                style={{ width: `${(selectedItem.predicted / selectedItem.inventory) * 100}%` }}
              ></div>
              <div 
                className="bg-red-500" 
                style={{ width: `${(selectedItem.waste / selectedItem.inventory) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>Will Sell</span>
            <span>Will Waste</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommendations</h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingDown className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-blue-900">Discount Strategy</span>
              </div>
              <p className="text-sm text-blue-800 mb-2">
                Apply a <span className="font-bold">{calculateDiscount(selectedItem.waste, selectedItem.price)}% discount</span> starting tomorrow
              </p>
              <p className="text-xs text-blue-700">
                New price: ${(selectedItem.price * (1 - calculateDiscount(selectedItem.waste, selectedItem.price) / 100)).toFixed(2)}
              </p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Package className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-900">Donation Opportunity</span>
              </div>
              <p className="text-sm text-green-800 mb-3">
                Donate <span className="font-bold">{calculateDonation(selectedItem.waste)} units</span> to local food banks
              </p>
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-green-700 transition-colors">
                <Send className="w-4 h-4" />
                <span>Contact Food Banks</span>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Impact Forecast</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Potential Revenue Loss</span>
              <span className="font-semibold text-red-600">-${(selectedItem.waste * selectedItem.price).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">With Discount Revenue</span>
              <span className="font-semibold text-green-600">+${((selectedItem.waste * 0.6) * selectedItem.price * 0.7).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax Benefit (Donation)</span>
              <span className="font-semibold text-green-600">+${(calculateDonation(selectedItem.waste) * selectedItem.price * 0.3).toFixed(2)}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold">
              <span className="text-gray-900">Net Impact</span>
              <span className="text-green-600">+${(((selectedItem.waste * 0.6) * selectedItem.price * 0.7) + (calculateDonation(selectedItem.waste) * selectedItem.price * 0.3)).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedSection) {
    const section = sections.find(s => s.id === selectedSection);
    if (!section) return null;

    return (
      <div className="p-4 space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <button 
            onClick={() => setSelectedSection(null)}
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
          >
            ←
          </button>
          <span className="text-2xl">{section.icon}</span>
          <h2 className="text-xl font-bold text-gray-900">{section.name}</h2>
        </div>

        <div className="space-y-3">
          {section.items.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-white rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <div className={`w-3 h-3 rounded-full ${getExpiryColor(item.expiry)}`}></div>
              </div>
              
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Inventory: {item.inventory}</span>
                <span>Will sell: {item.predicted}</span>
                <span className="text-red-600">Waste: {item.waste}</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="flex h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-green-500" 
                    style={{ width: `${(item.predicted / item.inventory) * 100}%` }}
                  ></div>
                  <div 
                    className="bg-red-500" 
                    style={{ width: `${(item.waste / item.inventory) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-3">
                <span className="text-sm text-gray-500">{getExpiryText(item.expiry)}</span>
                <span className="text-sm font-medium text-gray-900">${item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Inventory Predictions</h2>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-600">Live Data</span>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Priority Alerts</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <div className="flex-1">
              <p className="text-sm font-medium text-red-900">3 items expire in 24 hours</p>
              <p className="text-xs text-red-700">Immediate action required</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
            <Clock className="w-5 h-5 text-orange-600" />
            <div className="flex-1">
              <p className="text-sm font-medium text-orange-900">7 items expire this week</p>
              <p className="text-xs text-orange-700">Consider discounting</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {sections.map((section) => {
          const criticalItems = section.items.filter(item => item.expiry <= 3).length;
          const warningItems = section.items.filter(item => item.expiry <= 7 && item.expiry > 3).length;
          
          return (
            <div 
              key={section.id}
              onClick={() => setSelectedSection(section.id)}
              className="bg-white rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">{section.icon}</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{section.name}</h3>
                  <p className="text-sm text-gray-500">{section.items.length} items</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {criticalItems > 0 && (
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-red-600">{criticalItems} critical</span>
                  </div>
                )}
                {warningItems > 0 && (
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-orange-600">{warningItems} warning</span>
                  </div>
                )}
                {criticalItems === 0 && warningItems === 0 && (
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600">All good</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Predictions;