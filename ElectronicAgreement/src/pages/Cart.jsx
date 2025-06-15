import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/agreement');
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6 md:px-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-black text-xl md:text-2xl font-semibold mb-6">Checkout Bill</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left section */}
          <div className="md:col-span-2 space-y-6">
            {/* Shipping Address */}
            <div className="border rounded-lg p-4 md:p-6">
              <h2 className="font-semibold text-black mb-2 text-base md:text-lg">Shipping Address</h2>
              <p className="text-sm text-black font-medium">📍 My House</p>
              <p className="text-sm text-black">Mike Wazowski</p>
              <p className="text-sm text-black">Jl. Mawar Merah No. 10, RT 03/RW 05, Menteng, Jakarta Pusat, DKI Jakarta 10310</p>
              <p className="text-sm text-black">+621234567890</p>
              <button className="mt-3 text-white bg-green-700 px-4 py-1 rounded hover:bg-green-600 transition text-sm">Change Address</button>
            </div>

            {/* Order */}
            <div className="border rounded-lg p-4 md:p-6 space-y-4">
              <h2 className="font-semibold text-black mb-2 text-base md:text-lg">Your Order</h2>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <img src="Rectangle 73.png" alt="product" className="w-24 h-24 object-cover" />
                <div>
                  <p className="text-black font-medium">TerraNest Dining Table</p>
                  <p className="text-sm text-gray-600">72 x 36 x 30 cm</p>
                  <p className="text-sm text-black mt-1">1 item</p>
                  <p className="text-sm text-black mt-1">Rp 1.115.000</p>
                </div>
              </div>

              <div>
                <p className="text-black font-semibold mt-4 mb-2 text-sm md:text-base">Choose Your Shipping Method</p>
                <div className="text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {['JNE', 'TIKI', 'POS Indonesia', 'J&T Express', 'SiCepat', 'Wahana'].map((provider, i) => (
                    <label key={i} className="flex items-center border p-2 rounded cursor-pointer space-x-2 text-sm">
                      <input type="radio" name="shipping" className="form-radio text-green-700" defaultChecked={i === 0} />
                      <span>{provider}</span>
                      <span className="ml-auto">Rp 12.000</span>
                    </label>
                  ))}
                  <div className="col-span-full text-xs text-gray-400 italic">Same day delivery not available (distance exceeds limit)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="border rounded-lg p-4 md:p-6 space-y-4">
            <div>
              <h2 className="text-black font-semibold mb-2 text-base md:text-lg">Payment Method</h2>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <img src="BCA.png" alt="BCA" className="h-6" />
                  <span className="text-sm">BCA</span>
                </div>
                <button className="text-sm text-white bg-green-700 px-3 py-1 rounded hover:bg-green-600 transition">Change</button>
              </div>
              <p className="text-sm text-gray-600 mt-1">ATM / Transfer bank, Debit/Credit Card, Mobile Banking</p>
            </div>

            {/* Order Summary */}
            <div>
              <h2 className="text-black font-semibold mb-2 text-base md:text-lg">Order Summary</h2>
              <ul className="text-black text-sm space-y-1">
                <li>Sub Total (1 item): <span className="float-right">Rp 1.115.000</span></li>
                <li>Voucher Applied: <span className="float-right text-green-700">- Rp 100.000</span></li>
                <li>Shipping Cost: <span className="float-right">Rp 12.000</span></li>
                <li>Sales Tax: <span className="float-right">Rp 2.000</span></li>
                <li className="font-semibold mt-2">Total: <span className="float-right">Rp 1.029.000</span></li>
              </ul>
            </div>

            {/* Proceed button */}
            <button
              onClick={handleProceed}
              className="w-full bg-green-900 text-white py-2 rounded hover:bg-green-800 transition text-sm md:text-base">
              Proceed to terms and agreement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
