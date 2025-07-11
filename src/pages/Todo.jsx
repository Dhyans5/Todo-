import Todoitem from "../components/Todoitem.jsx";
import { useState } from "react";
function ToDo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const addTodo = () => {
    if (inputValue.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
    };
    const onToggled = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
}
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100 overflow-y-auto top-0">
      <h1
        className="text-6xl font-bold"
        style={{ "text-shadow": "2px 2px red" }}
      >
        Todo List
      </h1>
      <div className="flex flex-row items-center mt-10">
        <input
          type="text"
          value={inputValue}
          placeholder="add new task.."
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 mr-4 w-full max-w-md"
        />
        <button onClick={addTodo} className="px-4 py-2 bg-green-500 rounded-xl ">Add</button>
      </div>
      <div className="w-full max-w-md mt-5">
        {todos.map((todo) => (
            <Todoitem
            key={todo.id}
            todo={todo}
            onToggle={onToggled}
            onDelete={(id) => {
              setTodos(todos.filter(t => t.id !== id));
            }}
          />
        ))}
      </div>
    </div>
  );
}
export default ToDo;
