import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Agreement() {
  const navigate = useNavigate();

  const handleAgree = () => {
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-white px-4 py-8 md:py-12 flex flex-col items-center">
      {/* Header + Logo */}
      <div className="text-center mb-6">
        <img
          src="Vector.png"
          alt="Earthnest Logo"
          className="mx-auto w-28 md:w-32"
        />
        <h1 className="text-xl md:text-2xl font-semibold mt-4 text-black">
          Perjanjian Elektronik Pengguna Earthnest
        </h1>
      </div>

      {/* Agreement Box */}
      <div className="bg-green-950 text-white rounded-lg shadow-lg px-6 py-6 md:px-10 md:py-8 max-w-3xl w-full space-y-5 text-sm md:text-base leading-relaxed">
        <div>
          <h2 className="font-bold mb-1">1. Ketentuan Umum</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Anda adalah pengguna yang sah dan berusia minimal 18 tahun.</li>
            <li>Anda menyetujui untuk memberikan informasi pribadi yang akurat.</li>
            <li>Seluruh transaksi tunduk pada hukum perlindungan konsumen Indonesia.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-1">2. Kebijakan Pembelian dan Pengiriman</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Pesanan akan diproses dalam waktu maksimal 2x24 jam setelah pembayaran diterima.</li>
            <li>Estimasi pengiriman 2–5 hari kerja tergantung lokasi tujuan.</li>
            <li>Resi akan dikirim melalui email atau notifikasi aplikasi.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-1">3. Kebijakan Pengembalian Barang</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Pengembalian hanya berlaku untuk produk cacat produksi dan dikirim maksimal 7 hari setelah diterima.</li>
            <li>Produk harus dalam kondisi belum dipakai dan lengkap dengan label.</li>
            <li>Biaya pengiriman kembali ditanggung oleh pelanggan kecuali jika kesalahan dari pihak kami.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-1">4. Kebijakan Privasi</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Data pribadi Anda akan dijaga kerahasiaannya.</li>
            <li>Kami hanya menggunakan data untuk keperluan transaksi dan promosi internal.</li>
            <li>Tidak ada data yang dijual kepada pihak ketiga tanpa persetujuan.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-1">5. Layanan Konsumen</h2>
          <p>Jika Anda memiliki pertanyaan, silakan hubungi kami di:</p>
          <p>📧 <span className="underline">support@earthnest.id</span></p>
          <p>📞 0800-123-4567 (Senin–Jumat, 08.00–17.00 WIB)</p>
        </div>
      </div>

      {/* Agree Button */}
      <button
        onClick={handleAgree}
        className="mt-8 bg-green-950 text-white px-6 py-3 rounded-full hover:bg-green-800 transition text-sm md:text-base w-full max-w-xs"
      >
        Saya telah membaca dan menyetujui Perjanjian Earthnest
      </button>
    </div>
  );
}
