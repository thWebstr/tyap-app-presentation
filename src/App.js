import React, { useState } from 'react';
import TYAPDashboard from './TYAPDashboard';
import PassengerApp from './PassengerApp';
import DriverDashboard from './DriverDashboard';
import BiometricDevice from './BiometricDevice';
import PaymentSystem from './PaymentSystem';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const views = {
    dashboard: <TYAPDashboard />,
    passenger: <PassengerApp />,
    driver: <DriverDashboard />,
    biometric: <BiometricDevice />,
    payment: <PaymentSystem />
  };

  return (
    <div>
      {/* Navigation Menu */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white rounded-lg shadow-lg p-2">
          <select
            value={currentView}
            onChange={(e) => setCurrentView(e.target.value)}
            className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="dashboard">Admin Dashboard</option>
            <option value="passenger">Passenger App</option>
            <option value="driver">Driver Dashboard</option>
            <option value="biometric">Biometric Device</option>
            <option value="payment">Payment System</option>
          </select>
        </div>
      </div>

      {/* Current View */}
      {views[currentView]}
    </div>
  );
}

export default App;