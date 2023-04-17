import TodoItem from "./TodoItem";
import { useState } from "react";

export default function GridTodos() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const switchTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };

  return (
    <ul className="mt-5">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          switchTodo={switchTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
