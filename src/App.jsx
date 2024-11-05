import React, { useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1730787481212,
      text: "kerjakan praktek react",
      completed: false,
    },
  ]);

  // menambahkan to do
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // menandai to do sebagai selesai
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // menghapus to do
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <LanguageProvider>
      <div className="container mt-5">
        <Navbar />
        <h1 className="text-center mb-4">Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      </div>
    </LanguageProvider>
  );
}

export default App;
