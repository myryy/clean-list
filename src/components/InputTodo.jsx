import { useState } from "react";

export default function InputTodo() {
  const [todoTitle, setTodoTitle] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && todoTitle !== "") {
      const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
      const newTodo = {
        id: Math.floor(Math.random() * 100000),
        title: todoTitle,
        done: false,
      };
      const updatedTodos = [...existingTodos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setTodoTitle("");
      window.location.reload();
    }
  };

  const handleTitleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Todo Title"
        className="rounded-lg text-sm bg-gray-50 border-b-4 border-stone-200 focus:outline-none p-3 mt-4 mb-2"
        value={todoTitle}
        onChange={handleTitleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
