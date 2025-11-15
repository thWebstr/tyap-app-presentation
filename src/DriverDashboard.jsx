import React, { useState } from 'react';
import { Car, DollarSign, Users, Clock, TrendingUp, Calendar, Navigation, CheckCircle } from 'lucide-react';

export default function DriverDashboard() {
  const [activeTab, setActiveTab] = useState('today');
  const [isOnline, setIsOnline] = useState(true);

  const driverInfo = {
    name: 'Musa Ibrahim',
    id: 'DRV-00342',
    vehicle: 'Toyota Hiace',
    plate: 'ABC-123-XY',
    rating: 4.8,
    totalTrips: 1247
  };

  const todayStats = {
    earnings: 8500,
    trips: 12,
    passengers: 47,
    hours: 6.5
  };

  const recentTrips = [
    { id: 1, from: 'Ikeja', to: 'VI', passengers: 4, fare: 2000, time: '2:30 PM', status: 'completed' },
    { id: 2, from: 'Yaba', to: 'Surulere', passengers: 3, fare: 1200, time: '1:45 PM', status: 'completed' },
    { id: 3, from: 'Lekki', to: 'Ajah', passengers: 5, fare: 2500, time: '12:20 PM', status: 'completed' },
    { id: 4, from: 'Ikeja', to: 'Maryland', passengers: 3, fare: 900, time: '11:00 AM', status: 'completed' }
  ];

  const weeklyEarnings = [
    { day: 'Mon', amount: 12500 },
    { day: 'Tue', amount: 15000 },
    { day: 'Wed', amount: 11000 },
    { day: 'Thu', amount: 13500 },
    { day: 'Fri', amount: 16000 },
    { day: 'Sat', amount: 8500 }
  ];

  const maxEarning = Math.max(...weeklyEarnings.map(d => d.amount));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-green-500 p-3 rounded-full">
                <Car className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{driverInfo.name}</h1>
                <p className="text-sm text-gray-500">{driverInfo.vehicle} • {driverInfo.plate}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-500">Driver ID</p>
                <p className="font-semibold text-gray-900">{driverInfo.id}</p>
              </div>
              <button
                onClick={() => setIsOnline(!isOnline)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  isOnline 
                    ? 'bg-green-500 hover:bg-green-600 text-white' 
                    : 'bg-gray-300 hover:bg-gray-400 text-gray-700'
                }`}
              >
                {isOnline ? 'Online' : 'Offline'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Today's Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<DollarSign size={24} />}
            label="Today's Earnings"
            value={`₦${todayStats.earnings.toLocaleString()}`}
            color="green"
          />
          <StatCard
            icon={<Navigation size={24} />}
            label="Trips Completed"
            value={todayStats.trips}
            color="blue"
          />
          <StatCard
            icon={<Users size={24} />}
            label="Passengers"
            value={todayStats.passengers}
            color="purple"
          />
          <StatCard
            icon={<Clock size={24} />}
            label="Hours Online"
            value={`${todayStats.hours}h`}
            color="orange"
          />
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-6 border-b border-gray-200">
          {['today', 'week', 'history'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-2 font-medium text-sm capitalize transition-colors ${
                activeTab === tab
                  ? 'border-b-2 border-green-500 text-green-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab === 'today' && 'Today'}
              {tab === 'week' && 'This Week'}
              {tab === 'history' && 'Trip History'}
            </button>
          ))}
        </div>

        {/* Today Tab */}
        {activeTab === 'today' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Trips */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Today's Trips</h2>
              <div className="space-y-3">
                {recentTrips.map((trip) => (
                  <div key={trip.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <CheckCircle size={20} className="text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{trip.from} → {trip.to}</p>
                        <p className="text-sm text-gray-500">{trip.passengers} passengers • {trip.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600">₦{trip.fare.toLocaleString()}</p>
                      <span className="text-xs text-gray-500 capitalize">{trip.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <ActionButton label="Request Payout" color="green" />
                <ActionButton label="Report Issue" color="red" />
                <ActionButton label="View Schedule" color="blue" />
                <ActionButton label="Driver Support" color="gray" />
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm font-medium text-blue-900 mb-1">Rating</p>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-blue-600">{driverInfo.rating}</span>
                  <span className="text-sm text-blue-600">/ 5.0</span>
                </div>
                <p className="text-xs text-blue-700 mt-1">{driverInfo.totalTrips} total trips</p>
              </div>
            </div>
          </div>
        )}

        {/* Week Tab */}
        {activeTab === 'week' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Weekly Earnings</h2>
            <div className="flex items-end justify-between space-x-4 h-64">
              {weeklyEarnings.map((day) => (
                <div key={day.day} className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-gray-100 rounded-t-lg overflow-hidden flex items-end" style={{ height: '200px' }}>
                    <div 
                      className="w-full bg-green-500 rounded-t-lg transition-all duration-500 hover:bg-green-600"
                      style={{ height: `${(day.amount / maxEarning) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs font-medium text-gray-600 mt-2">{day.day}</p>
                  <p className="text-xs text-gray-500">₦{(day.amount / 1000).toFixed(1)}k</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Weekly Earnings</p>
                  <p className="text-2xl font-bold text-green-600">
                    ₦{weeklyEarnings.reduce((sum, d) => sum + d.amount, 0).toLocaleString()}
                  </p>
                </div>
                <TrendingUp className="text-green-500" size={32} />
              </div>
            </div>
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Trip History</h2>
              <div className="flex items-center space-x-2">
                <Calendar size={18} className="text-gray-500" />
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 3 months</option>
                </select>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Date</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Route</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Passengers</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Fare</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTrips.map((trip) => (
                    <tr key={trip.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-900">{trip.time}</td>
                      <td className="py-3 px-4 text-sm text-gray-900">{trip.from} → {trip.to}</td>
                      <td className="py-3 px-4 text-sm text-gray-900">{trip.passengers}</td>
                      <td className="py-3 px-4 text-sm font-medium text-green-600">₦{trip.fare.toLocaleString()}</td>
                      <td className="py-3 px-4">
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full capitalize">
                          {trip.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function StatCard({ icon, label, value, color }) {
  const colorClasses = {
    green: 'bg-green-100 text-green-600',
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600'
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className={`p-3 rounded-lg inline-block mb-3 ${colorClasses[color]}`}>
        {icon}
      </div>
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

function ActionButton({ label, color }) {
  const colorClasses = {
    green: 'bg-green-50 text-green-700 hover:bg-green-100',
    red: 'bg-red-50 text-red-700 hover:bg-red-100',
    blue: 'bg-blue-50 text-blue-700 hover:bg-blue-100',
    gray: 'bg-gray-50 text-gray-700 hover:bg-gray-100'
  };

  return (
    <button className={`w-full py-3 px-4 rounded-lg font-medium text-sm transition-colors ${colorClasses[color]}`}>
      {label}
    </button>
  );
}