import React, { useState, useEffect } from 'react';
import { Fingerprint, Check, X, AlertCircle, User, Phone, MapPin } from 'lucide-react';

export default function BiometricDevice() {
  const [mode, setMode] = useState('idle'); // idle, register, verify, success, error
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({ name: '', phone: '', location: 'Ojota Motor Park' });
  const [verifiedUser, setVerifiedUser] = useState(null);

  useEffect(() => {
    if (scanning) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setScanning(false);
            if (mode === 'register') {
              setMode('success');
            } else if (mode === 'verify') {
              setVerifiedUser({
                name: 'Adebayo Oluwaseun',
                tier: 2,
                balance: 5420
              });
              setMode('success');
            }
            return 100;
          }
          return prev + 10;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [scanning, mode]);

  const startScan = () => {
    setProgress(0);
    setScanning(true);
  };

  const resetDevice = () => {
    setMode('idle');
    setScanning(false);
    setProgress(0);
    setFormData({ name: '', phone: '', location: 'Ojota Motor Park' });
    setVerifiedUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        {/* Device Frame */}
        <div className="bg-gray-800 rounded-3xl p-8 shadow-2xl border-4 border-gray-700">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-indigo-600 p-3 rounded-full">
                <Fingerprint className="text-white" size={32} />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white">TYAP Biometric Station</h1>
            <div className="flex items-center justify-center mt-2 text-gray-400">
              <MapPin size={16} className="mr-1" />
              <p className="text-sm">{formData.location}</p>
            </div>
          </div>

          {/* Main Display */}
          <div className="bg-gray-900 rounded-2xl p-6 min-h-96">
            {/* Idle Mode */}
            {mode === 'idle' && (
              <div className="text-center">
                <div className="mb-8">
                  <Fingerprint className="text-indigo-500 mx-auto mb-4" size={80} />
                  <h2 className="text-white text-xl font-semibold mb-2">Welcome to TYAP</h2>
                  <p className="text-gray-400 text-sm">Choose an option to continue</p>
                </div>
                <div className="space-y-3">
                  <button
                    onClick={() => setMode('register')}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-6 rounded-xl font-medium transition-colors"
                  >
                    Register New Account
                  </button>
                  <button
                    onClick={() => setMode('verify')}
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white py-4 px-6 rounded-xl font-medium transition-colors"
                  >
                    Verify Existing Account
                  </button>
                </div>
              </div>
            )}

            {/* Register Mode */}
            {mode === 'register' && !scanning && progress === 0 && (
              <div>
                <h2 className="text-white text-lg font-semibold mb-4">New Registration</h2>
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                </div>
                <div className="bg-yellow-900 bg-opacity-30 border border-yellow-600 rounded-lg p-4 mb-6">
                  <div className="flex items-start">
                    <AlertCircle className="text-yellow-500 mr-2 flex-shrink-0" size={20} />
                    <p className="text-yellow-200 text-sm">
                      This creates a Tier 1 account. Download the TYAP app to upgrade and access more features.
                    </p>
                  </div>
                </div>
                <button
                  onClick={startScan}
                  disabled={!formData.name || !formData.phone}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white py-4 px-6 rounded-xl font-medium transition-colors"
                >
                  Scan Fingerprint
                </button>
                <button
                  onClick={resetDevice}
                  className="w-full mt-3 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-xl font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            )}

            {/* Verify Mode */}
            {mode === 'verify' && !scanning && progress === 0 && (
              <div className="text-center">
                <Fingerprint className="text-indigo-500 mx-auto mb-6" size={80} />
                <h2 className="text-white text-xl font-semibold mb-2">Identity Verification</h2>
                <p className="text-gray-400 mb-8">Place your finger on the scanner</p>
                <button
                  onClick={startScan}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-6 rounded-xl font-medium transition-colors"
                >
                  Start Scan
                </button>
                <button
                  onClick={resetDevice}
                  className="w-full mt-3 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-xl font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            )}

            {/* Scanning Animation */}
            {scanning && (
              <div className="text-center">
                <div className="relative mb-6">
                  <Fingerprint className="text-indigo-500 mx-auto animate-pulse" size={80} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                  </div>
                </div>
                <h2 className="text-white text-xl font-semibold mb-4">Scanning...</h2>
                <div className="bg-gray-800 rounded-full h-3 mb-2 overflow-hidden">
                  <div 
                    className="bg-indigo-500 h-full transition-all duration-200"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-gray-400 text-sm">{progress}%</p>
              </div>
            )}

            {/* Success Mode */}
            {mode === 'success' && (
              <div className="text-center">
                <div className="bg-green-500 bg-opacity-20 rounded-full p-6 w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <Check className="text-green-500" size={64} />
                </div>
                {verifiedUser ? (
                  <div>
                    <h2 className="text-white text-xl font-semibold mb-2">Verified!</h2>
                    <div className="bg-gray-800 rounded-xl p-4 mb-6">
                      <div className="flex items-center justify-center mb-3">
                        <User className="text-indigo-500 mr-2" size={24} />
                        <p className="text-white text-lg font-semibold">{verifiedUser.name}</p>
                      </div>
                      <div className="text-sm text-gray-400 mb-2">Tier {verifiedUser.tier} Account</div>
                      <div className="text-2xl text-indigo-400 font-bold">₦{verifiedUser.balance.toLocaleString()}</div>
                      <div className="text-xs text-gray-500 mt-1">Available Balance</div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-white text-xl font-semibold mb-2">Registration Complete!</h2>
                    <p className="text-gray-400 mb-4">Tier 1 account created successfully</p>
                    <div className="bg-gray-800 rounded-xl p-4 mb-6">
                      <p className="text-white font-medium">{formData.name}</p>
                      <p className="text-gray-400 text-sm">{formData.phone}</p>
                    </div>
                  </div>
                )}
                <button
                  onClick={resetDevice}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-6 rounded-xl font-medium transition-colors"
                >
                  Done
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-xs">Device ID: TYP-OJT-001 | Status: Online</p>
          </div>
        </div>
      </div>
    </div>
  );
}