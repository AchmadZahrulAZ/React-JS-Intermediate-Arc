import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    'Tentang Kami',
    'Pusat Penjual',
    'Mobile Apps',
    'Mitra',
    'Karir',
    'Tokopedia Care',
    'B2B Digital'
  ];

  return (
    <footer className="w-full bg-gray-200/100 py-3">
      <div className="max-w-[720px] mx-auto flex justify-between items-center text-sm text-gray-600">
        {/* Copyright */}
        <div>
          © 2009-{currentYear}, PT Tokopedia
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="hover:text-green-500 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;