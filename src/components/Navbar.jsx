import React from "react";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="navbar navbar-light bg-light mb-4">
      <div className="container">
        <span className="navbar-brand">Todo List App</span>
        <button onClick={toggleLanguage} className="btn btn-outline-primary">
          {language === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
