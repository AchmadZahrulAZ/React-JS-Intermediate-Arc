import React from 'react';

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';  // Import ikon sosial media

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-1 px-20">
      <div className="container mx-auto flex justify-between items-center pr-10 pl-20 ml-40">
        {/* Bagian Kiri (Teks) */}
        <div className="text-sm">
          <span className='mx-2'>Jual Beli Online</span>
          <span className='mx-2'>Official Store</span>
          <span className='mx-2'>Produk Digital</span>
          <span className='mx-2'>Tiket Kereta</span>
          <span className='mx-2'>Tiket Pesawat</span>
          <span className='mx-2'>Donasi</span>
          <span className='mx-2'>Layanan Finansial</span>
          <span className='mx-2'>Bantuan</span>
        </div>
        
        {/* Bagian Kanan (Ikon Sosial Media) */}
        <div className="flex space-x-1 pr-20 mr-60">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
