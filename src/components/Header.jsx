import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Menggunakan react-icons untuk ikon pencarian

const Header = () => {
  return (
    <header className="bg-white">
      {/* Baris Pertama: Logo TOKOPEDIA */}
      <div className="container mx-60 px-20 py-4">
        <h1 className="text-3xl font-bold text-green-500">tokopedia</h1>
      </div>

      {/* Baris Kedua: Kategori dan Ikon Pencarian */}
      <div className="container text-base flex justify-between mx-60 pl-20 pr-10 py-4 border-b">
        {/* Kategori */}
        <div className="flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-green-500">
            HOME
          </a>
          <a href="#" className="text-gray-700 hover:text-green-500">
            COMPANY
          </a>

          {/* Dropdown Menu */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-green-500 flex items-center">
              <span>COMMUNITY</span>
              <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {/* Dropdown Menu Content */}
            <div className="z-50 absolute left-0 w-48 mt-0 bg-white border border-gray-200 shadow-lg rounded-lg hidden group-hover:block">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Seller Story
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Life at Tokopedia
              </a>
            </div>
          </div>

          {/* Repeat for other dropdowns */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-green-500 flex items-center">
              <span>STORIES</span>
              <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {/* Dropdown Menu Content */}
            <div className="z-50 absolute left-0 w-48 mt-0 bg-white border border-gray-200 shadow-lg rounded-lg hidden group-hover:block">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Behind The Scene
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Innovation
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Milestone
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Operation
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Product
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Social Impact
              </a>
            </div>
          </div>

          <div className="relative group">
            <button className="text-gray-700 hover:text-green-500 flex items-center">
              <span>INSIGHT</span>
              <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {/* Dropdown Menu Content */}
            <div className="z-50 absolute left-0 w-48 mt-0 bg-white border border-gray-200 shadow-lg rounded-lg hidden group-hover:block">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Fashion Wanita
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Toys & Gaming
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Komputer & Laptop
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Otomotif
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Edukasi
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Elektronik
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Kerja
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Perawatan Hewan
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Sports & Football
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Salam
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Travel dan Kuliner
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Topik Seru Lainnya
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Top List
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Relationship
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Kids and Parenting
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Keuangan
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Kesehatan
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Kecantikan
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Home and Living
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Hobi dan Gaya Hidup
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Gaya dan Fashion Pria
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Gadget dan Teknologi
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Entertainment
              </a>
            </div>
          </div>
          <a href="#" className="text-gray-700 hover:text-green-500">
            TOP LIST
          </a>
          <div className="relative group">
            <button className="text-gray-700 hover:text-green-500 flex items-center">
              <span>NEWSROOM</span>
              <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {/* Dropdown Menu Content */}
            <div className="z-50 absolute left-0 w-48 mt-0 bg-white border border-gray-200 shadow-lg rounded-lg hidden group-hover:block">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Press Release
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Siaran Pers
              </a>
            </div>
          </div>
          <div className="relative group">
            <button className="text-gray-700 hover:text-green-500 flex items-center">
              <span>KALKUPEDIA</span>
              <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {/* Dropdown Menu Content */}
            <div className="z-50 absolute left-0 w-48 mt-0 bg-white border border-gray-200 shadow-lg rounded-lg hidden group-hover:block">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Kalkulator BMI
              </a>
            </div>
          </div>
        </div>

        {/* Ikon Pencarian di Kanan */}
        <div className="flex items-center mr-40 pr-20">
          <FaSearch className="text-gray-700 hover:text-green-500 cursor-pointer" size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;
