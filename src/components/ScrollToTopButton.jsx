// src/components/ScrollToTopButton.js
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = ({ targetRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility of the button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Show button after scrolling down 300px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        style={{ zIndex: 1000 }}
      >
        ⬆️
      </button>
    )
  );
};

export default ScrollToTopButton;
