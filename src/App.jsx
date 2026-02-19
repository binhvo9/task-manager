import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React" },
    { id: 2, title: "Build Task Manager" },
  ]);

  const [input, setInput] = useState("");

  function handleAdd() {
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: input,
    };

    setTasks([...tasks, newTask]);
    setInput("");
  }

  return (
    <div>
      <h1>Task Manager</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New task"
      />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {t.title}{" "}
            <button onClick={() => setTasks(tasks.filter((x) => x.id !== t.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}
