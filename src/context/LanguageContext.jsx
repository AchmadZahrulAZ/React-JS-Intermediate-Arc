import React, { createContext, useState, useContext } from "react";

// Buat konteks bahasa
const LanguageContext = createContext();

// Custom hook untuk menggunakan konteks bahasa dengan mudah
export const useLanguage = () => useContext(LanguageContext);

// LanguageProvider yang membungkus seluruh aplikasi
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("id");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "id" ? "en" : "id"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
