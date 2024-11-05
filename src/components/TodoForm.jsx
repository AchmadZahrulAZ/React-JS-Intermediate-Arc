import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");
  const { language } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input); // Memanggil fungsi addTodo dengan input sebagai argumen
      setInput(""); // Mengosongkan input setelah menambahkan todo
    }
  }

  return (
    <form className="d-flex mb-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control me-2"
        placeholder={language === "id" ? "Tambah todo..." : "Add todo..."}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        {language === "id" ? "Tambah" : "Add"}
      </button>
    </form>
  );
}

export default TodoForm;
