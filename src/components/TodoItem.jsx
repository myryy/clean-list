export default function TodoItem({ todo, switchTodo, deleteTodo }) {
  return (
    <div className="flex m-3 items-center">
      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 rounded-lg p-1 w-1 h-1 mr-2"
      ></button>
      <li
        className={
          !todo.done
            ? "cursor-pointer"
            : "line-through text-green-900 cursor-pointer"
        }
        onClick={() => switchTodo(todo.id)}
      >
        {todo.title}
      </li>
    </div>
  );
}
