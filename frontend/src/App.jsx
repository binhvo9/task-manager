import { useState } from "react";
import TaskItem from "./TaskItem";
import useTasks from "./hooks/useTasks";

export default function App() {
  const [input, setInput] = useState("");

  const {
    tasks,
    loading,
    error,
    editingId,
    editText,
    setEditText,
    addTask,
    deleteTask,
    toggleTask,
    startEdit,
    saveEdit,
    cancelEdit,
  } = useTasks();

  function handleAdd() {
    addTask(input);
    setInput("");
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: 20, maxWidth: 600 }}>
      <h1>Task Manager</h1>

      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New task"
          style={{ flex: 1 }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {editingId && (
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            style={{ flex: 1 }}
          />
          <button onClick={saveEdit}>Save</button>
          <button onClick={cancelEdit}>Cancel</button>
        </div>
      )}

      <ul style={{ paddingLeft: 18 }}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onEdit={() => startEdit(task)}
          />
        ))}
      </ul>
    </div>
  );
}
