import GridTodos from "./components/GridTodos";
import InputTodo from "./components/InputTodo";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-jb-mono">
      <h1 className="text-2xl m-2">Clean List</h1>
      <InputTodo />
      <GridTodos />
    </div>
  );
}

export default App;
