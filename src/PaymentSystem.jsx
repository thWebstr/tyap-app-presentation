import React, { useState } from 'react';
import { CreditCard, ArrowRight, Check, AlertCircle, Loader, User } from 'lucide-react';

export default function PaymentSystem() {
  const [step, setStep] = useState('select'); // select, processing, success, failed
  const [paymentMethod, setPaymentMethod] = useState('');

  const passengerInfo = {
    name: 'Adebayo Oluwaseun',
    balance: 5420,
    tier: 2
  };

  const tripInfo = {
    from: 'Ikeja',
    to: 'Victoria Island',
    driver: 'Musa Ibrahim',
    driverId: 'DRV-00342',
    vehicle: 'Toyota Hiace ABC-123-XY',
    fare: 500,
    agentFee: 25,
    platformFee: 10
  };

  const handlePayment = () => {
    setStep('processing');
    setTimeout(() => {
      if (paymentMethod === 'wallet' && passengerInfo.balance < (tripInfo.fare + tripInfo.agentFee + tripInfo.platformFee)) {
        setStep('failed');
      } else {
        setStep('success');
      }
    }, 2000);
  };

  const resetPayment = () => {
    setStep('select');
    setPaymentMethod('');
  };

  const totalAmount = tripInfo.fare + tripInfo.agentFee + tripInfo.platformFee;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Payment Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                  <CreditCard size={24} />
                </div>
                <div>
                  <h1 className="text-xl font-bold">TYAP Payment</h1>
                  <p className="text-indigo-100 text-sm">Secure Transaction</p>
                </div>
              </div>
              <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                {step === 'select' && 'Step 1/2'}
                {step === 'processing' && 'Processing...'}
                {step === 'success' && 'Complete'}
                {step === 'failed' && 'Failed'}
              </div>
            </div>

            {/* Trip Summary */}
            <div className="bg-white bg-opacity-10 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="font-medium">{tripInfo.from}</span>
                </div>
                <ArrowRight size={20} />
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full" />
                  <span className="font-medium">{tripInfo.to}</span>
                </div>
              </div>
              <div className="text-indigo-100 text-sm">
                Driver: {tripInfo.driver} • {tripInfo.vehicle}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Payment Selection */}
            {step === 'select' && (
              <div>
                {/* Passenger Info */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-600 mb-3">Passenger Details</h3>
                  <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-indigo-100 p-2 rounded-full">
                        <User size={20} className="text-indigo-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{passengerInfo.name}</p>
                        <p className="text-sm text-gray-500">Tier {passengerInfo.tier} Account</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Wallet Balance</p>
                      <p className="font-semibold text-gray-900">₦{passengerInfo.balance.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                {/* Amount Breakdown */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-600 mb-3">Payment Breakdown</h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Base Fare</span>
                      <span className="font-medium text-gray-900">₦{tripInfo.fare}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Agent Commission</span>
                      <span className="text-gray-700">₦{tripInfo.agentFee}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Platform Fee</span>
                      <span className="text-gray-700">₦{tripInfo.platformFee}</span>
                    </div>
                    <div className="pt-3 border-t border-gray-200 flex justify-between">
                      <span className="font-semibold text-gray-900">Total Amount</span>
                      <span className="font-bold text-indigo-600 text-lg">₦{totalAmount}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-600 mb-3">Select Payment Method</h3>
                  <div className="space-y-3">
                    <PaymentOption
                      id="wallet"
                      label="TYAP Wallet"
                      description={`Balance: ₦${passengerInfo.balance.toLocaleString()}`}
                      icon="💳"
                      selected={paymentMethod === 'wallet'}
                      onClick={() => setPaymentMethod('wallet')}
                    />
                    <PaymentOption
                      id="card"
                      label="Debit/Credit Card"
                      description="Pay with your bank card"
                      icon="💰"
                      selected={paymentMethod === 'card'}
                      onClick={() => setPaymentMethod('card')}
                    />
                    <PaymentOption
                      id="bank"
                      label="Bank Transfer"
                      description="Direct bank transfer"
                      icon="🏦"
                      selected={paymentMethod === 'bank'}
                      onClick={() => setPaymentMethod('bank')}
                    />
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={!paymentMethod}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold transition-colors"
                >
                  Pay ₦{totalAmount}
                </button>
              </div>
            )}

            {/* Processing */}
            {step === 'processing' && (
              <div className="text-center py-12">
                <div className="bg-indigo-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Loader className="text-indigo-600 animate-spin" size={48} />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Processing Payment</h2>
                <p className="text-gray-500">Please wait while we process your transaction...</p>
              </div>
            )}

            {/* Success */}
            {step === 'success' && (
              <div className="text-center py-12">
                <div className="bg-green-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Check className="text-green-600" size={48} />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Payment Successful!</h2>
                <p className="text-gray-500 mb-6">Your trip has been paid</p>
                
                <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">Transaction ID</span>
                    <span className="font-mono text-sm">TXN-{Date.now().toString().slice(-8)}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">Amount Paid</span>
                    <span className="font-semibold">₦{totalAmount}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">Driver Receives</span>
                    <span className="font-semibold text-green-600">₦{tripInfo.fare}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Payment Method</span>
                    <span className="capitalize">{paymentMethod}</span>
                  </div>
                </div>

                <button
                  onClick={resetPayment}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-semibold transition-colors"
                >
                  Done
                </button>
              </div>
            )}

            {/* Failed */}
            {step === 'failed' && (
              <div className="text-center py-12">
                <div className="bg-red-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <AlertCircle className="text-red-600" size={48} />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Payment Failed</h2>
                <p className="text-gray-500 mb-6">Insufficient wallet balance. Please add funds or choose another payment method.</p>
                
                <div className="space-y-3">
                  <button
                    onClick={resetPayment}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-semibold transition-colors"
                  >
                    Try Another Method
                  </button>
                  <button
                    onClick={() => alert('Add funds feature would open here')}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-xl font-semibold transition-colors"
                  >
                    Add Funds to Wallet
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-4 text-center text-sm text-gray-500">
          🔒 Secured by TYAP • All transactions are encrypted
        </div>
      </div>
    </div>
  );
}

function PaymentOption({ id, label, description, icon, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 rounded-xl border-2 transition-all ${
        selected
          ? 'border-indigo-500 bg-indigo-50'
          : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{icon}</span>
          <div className="text-left">
            <p className={`font-medium ${selected ? 'text-indigo-900' : 'text-gray-900'}`}>{label}</p>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
          selected ? 'border-indigo-500 bg-indigo-500' : 'border-gray-300'
        }`}>
          {selected && <Check size={14} className="text-white" />}
        </div>
      </div>
    </button>
  );
}