import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 flex flex-col items-center">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-semibold mb-2">Hooray! Your order is confirmed.</h1>
        <p className="text-sm text-gray-600 mb-6">
          <span className="text-green-900 font-medium">Earthnest</span> will start working on this right away. <br />
          We'll email you as soon as it ships.
        </p>

        <div className="flex items-center justify-center gap-8 mb-6">
          <div className="text-green-800 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full border-2 border-green-800 flex items-center justify-center">
              ✓
            </div>
            <p className="mt-2 text-sm">Ordered<br /><span className="text-xs text-gray-500">On Sep 02</span></p>
          </div>
          <div className="text-gray-400 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center" />
            <p className="mt-2 text-sm">Ready to ship</p>
          </div>
          <div className="text-gray-400 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center" />
            <p className="mt-2 text-sm">Arrived<br /><span className="text-xs text-red-500">Estimated Sep 09–12</span></p>
          </div>
        </div>

        <button
          onClick={handleGoBack}
          className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-800 transition">
          Go back
        </button>
      </div>

      {/* Order Detail */}
      <div className="max-w-xl w-full border rounded-lg p-6 bg-green-50 text-sm space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold">Order Details</h2>
          <p className="text-xs text-gray-500">Confirmation number = <a href="#" className="underline">7789006</a></p>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="https://cdn.discordapp.com/attachments/1140949961794633859/1249337903169732658/image.png"
            alt="product"
            className="w-24 h-24 object-cover"
          />
          <div>
            <p className="font-medium">TerraNest Dining Table</p>
            <p className="text-xs text-gray-600">Transaction ID: #448230076</p>
            <p className="text-xs text-gray-600">Variation: Natural Terranest</p>
            <p className="text-xs text-gray-600">Quantity: 1</p>
            <p className="text-sm font-semibold mt-1">Rp 1.115.000</p>
          </div>
        </div>

        <div className="border-t pt-4 space-y-1">
          <p><strong>Shipping Address:</strong></p>
          <p>Mike Wazowski</p>
          <p>Jl. Mawar Merah No. 10, RT 03/RW 05, Menteng, Jakarta Pusat, DKI Jakarta 10310</p>
          <p>+621234567890</p>
        </div>

        <div className="border-t pt-4 space-y-1">
          <p><strong>Paid with:</strong> Debit Card</p>
          <p>Sub Total: Rp 1.115.000</p>
          <p>Discount: -Rp 100.000</p>
          <p>Shipping Cost: Rp 12.000</p>
          <p>Sales Tax: Rp 2.000</p>
          <p className="font-semibold mt-2">Total (1 Item): Rp 1.029.000</p>
        </div>
      </div>
    </div>
  );
}
