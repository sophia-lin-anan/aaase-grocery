import React, { useState } from 'react';
import { User, Store, Bell, Shield, LogOut, Edit, Save, X } from 'lucide-react';

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [storeInfo, setStoreInfo] = useState({
    name: 'Green Valley Market',
    location: 'Downtown Location',
    manager: 'John Smith',
    email: 'john.smith@greenvalley.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street, City, State 12345'
  });

  const [settings, setSettings] = useState({
    notifications: true,
    emailAlerts: true,
    wasteThreshold: 5,
    sustainabilityGoal: 'A'
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to a backend
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset any changes
  };

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Profile & Settings</h2>
        {!isEditing ? (
          <button 
            onClick={() => setIsEditing(true)}
            className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Edit className="w-4 h-4" />
            <span>Edit</span>
          </button>
        ) : (
          <div className="flex space-x-2">
            <button 
              onClick={handleSave}
              className="flex items-center space-x-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Save</span>
            </button>
            <button 
              onClick={handleCancel}
              className="flex items-center space-x-2 px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <X className="w-4 h-4" />
              <span>Cancel</span>
            </button>
          </div>
        )}
      </div>

      {/* Store Information */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <Store className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Store Information</h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Store Name</label>
            {isEditing ? (
              <input
                type="text"
                value={storeInfo.name}
                onChange={(e) => setStoreInfo({...storeInfo, name: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900">{storeInfo.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            {isEditing ? (
              <input
                type="text"
                value={storeInfo.location}
                onChange={(e) => setStoreInfo({...storeInfo, location: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900">{storeInfo.location}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Manager</label>
            {isEditing ? (
              <input
                type="text"
                value={storeInfo.manager}
                onChange={(e) => setStoreInfo({...storeInfo, manager: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900">{storeInfo.manager}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            {isEditing ? (
              <input
                type="email"
                value={storeInfo.email}
                onChange={(e) => setStoreInfo({...storeInfo, email: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900">{storeInfo.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            {isEditing ? (
              <input
                type="tel"
                value={storeInfo.phone}
                onChange={(e) => setStoreInfo({...storeInfo, phone: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900">{storeInfo.phone}</p>
            )}
          </div>
        </div>
      </div>

      {/* Sustainability Settings */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <Shield className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Sustainability Settings</h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Waste Threshold Alert (%)</label>
            {isEditing ? (
              <select
                value={settings.wasteThreshold}
                onChange={(e) => setSettings({...settings, wasteThreshold: Number(e.target.value)})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value={3}>3% - Excellent (S Grade)</option>
                <option value={5}>5% - Great (A Grade)</option>
                <option value={10}>10% - Good (B Grade)</option>
                <option value={15}>15% - Fair (C Grade)</option>
              </select>
            ) : (
              <p className="text-gray-900">{settings.wasteThreshold}% - Get alerts when waste exceeds this threshold</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sustainability Goal</label>
            {isEditing ? (
              <select
                value={settings.sustainabilityGoal}
                onChange={(e) => setSettings({...settings, sustainabilityGoal: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="S">S Grade - Less than 3% waste</option>
                <option value="A">A Grade - Less than 5% waste</option>
                <option value="B">B Grade - Less than 10% waste</option>
                <option value="C">C Grade - Less than 15% waste</option>
              </select>
            ) : (
              <p className="text-gray-900">Grade {settings.sustainabilityGoal} - Your current target</p>
            )}
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
            <Bell className="w-5 h-5 text-yellow-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Push Notifications</p>
              <p className="text-sm text-gray-500">Receive alerts about waste predictions</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={(e) => setSettings({...settings, notifications: e.target.checked})}
                className="sr-only peer"
                disabled={!isEditing}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Email Alerts</p>
              <p className="text-sm text-gray-500">Daily summary and weekly reports</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.emailAlerts}
                onChange={(e) => setSettings({...settings, emailAlerts: e.target.checked})}
                className="sr-only peer"
                disabled={!isEditing}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Account Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-gray-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Account</h3>
        </div>

        <div className="space-y-3">
          <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <p className="font-medium text-gray-900">Change Password</p>
            <p className="text-sm text-gray-500">Update your account password</p>
          </button>

          <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <p className="font-medium text-gray-900">Export Data</p>
            <p className="text-sm text-gray-500">Download your sustainability reports</p>
          </button>

          <button className="w-full text-left px-4 py-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors text-red-600">
            <div className="flex items-center space-x-3">
              <LogOut className="w-5 h-5" />
              <div>
                <p className="font-medium">Sign Out</p>
                <p className="text-sm opacity-75">Sign out of your account</p>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* App Information */}
      <div className="bg-gray-50 rounded-xl p-4 text-center">
        <p className="text-sm text-gray-600">FreshTrack Partner Dashboard</p>
        <p className="text-xs text-gray-500 mt-1">Version 2.1.4 • Build 2024.06.15</p>
      </div>
    </div>
  );
};

export default Profile;