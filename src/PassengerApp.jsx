import React, { useState } from 'react';
import { Fingerprint, Wallet, History, CreditCard, Zap, Home, User, ArrowRight } from 'lucide-react';

export default function PassengerApp() {
  const [screen, setScreen] = useState('home');
  const [balance, setBalance] = useState(5420);
  const [tier, setTier] = useState(2);

  const recentTrips = [
    { id: 1, from: 'Ikeja', to: 'Victoria Island', amount: 500, date: 'Today, 2:30 PM', driver: 'Musa Ibrahim' },
    { id: 2, from: 'Yaba', to: 'Surulere', amount: 300, date: 'Yesterday, 9:15 AM', driver: 'Chidi Obi' },
    { id: 3, from: 'Lekki', to: 'Ajah', amount: 800, date: 'Nov 13, 5:45 PM', driver: 'Tunde Hassan' }
  ];

  const quickActions = [
    { name: 'Buy Airtime', icon: <Zap size={24} />, color: 'blue' },
    { name: 'Pay Bills', icon: <CreditCard size={24} />, color: 'green' },
    { name: 'Bank Transfer', icon: <ArrowRight size={24} />, color: 'purple' }
  ];

  return (
    <div className="max-w-md mx-auto min-h-screen bg-gradient-to-b from-indigo-600 to-indigo-800">
      {/* Header Section */}
      <div className="p-6 text-white">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">TYAP</h1>
            <p className="text-indigo-200 text-sm">Welcome back!</p>
          </div>
          <div className="flex items-center space-x-2 bg-indigo-500 bg-opacity-50 px-3 py-1 rounded-full">
            <Fingerprint size={16} />
            <span className="text-sm font-medium">Tier {tier}</span>
          </div>
        </div>

        {/* Balance Card */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 mb-6">
          <p className="text-indigo-200 text-sm mb-2">Wallet Balance</p>
          <p className="text-4xl font-bold mb-4">₦{balance.toLocaleString()}</p>
          <div className="flex space-x-3">
            <button className="flex-1 bg-white text-indigo-600 py-2 px-4 rounded-lg font-medium text-sm hover:bg-indigo-50 transition-colors">
              Add Money
            </button>
            <button className="flex-1 bg-indigo-500 bg-opacity-50 text-white py-2 px-4 rounded-lg font-medium text-sm hover:bg-opacity-70 transition-colors">
              Send Money
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-t-3xl min-h-screen p-6">
        {/* Tab Navigation */}
        <div className="flex space-x-2 mb-6 bg-gray-100 p-1 rounded-lg">
          {['home', 'history', 'profile'].map((tab) => (
            <button
              key={tab}
              onClick={() => setScreen(tab)}
              className={`flex-1 py-2 px-4 rounded-md font-medium text-sm capitalize transition-colors ${
                screen === tab
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              {tab === 'home' && <Home size={16} className="inline mr-1" />}
              {tab === 'history' && <History size={16} className="inline mr-1" />}
              {tab === 'profile' && <User size={16} className="inline mr-1" />}
              {tab}
            </button>
          ))}
        </div>

        {/* Home Screen */}
        {screen === 'home' && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {quickActions.map((action, idx) => (
                <button
                  key={idx}
                  className="bg-gray-50 hover:bg-gray-100 p-4 rounded-xl flex flex-col items-center transition-colors"
                >
                  <div className={`p-3 rounded-full mb-2 ${
                    action.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                    action.color === 'green' ? 'bg-green-100 text-green-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    {action.icon}
                  </div>
                  <span className="text-xs text-gray-700 text-center">{action.name}</span>
                </button>
              ))}
            </div>

            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Trips</h2>
            <div className="space-y-3">
              {recentTrips.slice(0, 2).map((trip) => (
                <div key={trip.id} className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="font-medium text-gray-900">{trip.from}</span>
                      <ArrowRight size={16} className="text-gray-400" />
                      <span className="font-medium text-gray-900">{trip.to}</span>
                    </div>
                    <span className="font-semibold text-gray-900">₦{trip.amount}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Driver: {trip.driver}</span>
                    <span>{trip.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* History Screen */}
        {screen === 'history' && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Transaction History</h2>
            <div className="space-y-3">
              {recentTrips.map((trip) => (
                <div key={trip.id} className="border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-medium text-gray-900">{trip.from} → {trip.to}</p>
                      <p className="text-sm text-gray-500">{trip.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-red-600">-₦{trip.amount}</p>
                      <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">Completed</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Driver: {trip.driver}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Profile Screen */}
        {screen === 'profile' && (
          <div>
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <User size={40} className="text-indigo-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Adebayo Oluwaseun</h2>
              <p className="text-sm text-gray-500">+234 801 234 5678</p>
              <div className="inline-flex items-center mt-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                <Fingerprint size={14} className="mr-1" />
                Tier {tier} Account
              </div>
            </div>

            <div className="space-y-3">
              <ProfileOption label="Account Information" />
              <ProfileOption label="Security Settings" />
              <ProfileOption label="Biometric Management" />
              <ProfileOption label="Payment Methods" />
              {tier < 3 && (
                <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-indigo-700 transition-colors">
                  Upgrade to Tier 3
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ProfileOption({ label }) {
  return (
    <button className="w-full bg-gray-50 hover:bg-gray-100 p-4 rounded-xl flex items-center justify-between transition-colors">
      <span className="text-gray-900 font-medium">{label}</span>
      <ArrowRight size={20} className="text-gray-400" />
    </button>
  );
}