// src/pages/HomePage.jsx
import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import TrendingArticle from '../components/TrendingArticle';
import TrendingArticle2 from '../components/TrendingArticle2';
import TrendingArticle3 from '../components/TrendingArticle3';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

const HomePage = () => {
  const topRef = useRef(null); // Ref untuk bagian atas halaman

  return (
    <div>
      {/* Elemen teratas untuk referensi scroll */}
      <div ref={topRef}></div>

      {/* Konten halaman */}
      <Navbar />
      <Header />
      <HeroSection />
      <TrendingArticle />
      <TrendingArticle2 />
      <TrendingArticle3 />
      <Footer />

      {/* Tambahkan tombol ScrollToTopButton */}
      <ScrollToTopButton targetRef={topRef} />
    </div>
  );
};

export default HomePage;
