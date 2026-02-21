import { useState, useEffect } from "react";
import {
    fetchTasks,
    createTask,
    updateTask,
    deleteTaskAPI,
} from "../services/taskService";

export default function useTasks() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");

    useEffect(() => {
        async function load() {
            try {
                const data = await fetchTasks();
                setTasks(data);
            } catch {
                setError("Failed to load tasks");
            } finally {
                setLoading(false);
            }
        }
        load();
    }, []);

    async function addTask(title) {
        if (!title.trim()) return;

        try {
            const newTask = await createTask(title);
            setTasks((prev) => [...prev, newTask]);
        } catch {
            setError("Failed to add task");
        }
    }

    async function deleteTask(id) {
        try {
            await deleteTaskAPI(id);
            setTasks((prev) => prev.filter((t) => t.id !== id));
        } catch {
            setError("Failed to delete task");
        }
    }

    async function toggleTask(id) {
        const task = tasks.find((t) => t.id === id);
        const updated = { ...task, done: !task.done };

        try {
            await updateTask(id, updated);
            setTasks((prev) =>
                prev.map((t) =>
                    t.id === id ? updated : t
                )
            );
        } catch {
            setError("Failed to update task");
        }
    }

    async function saveEdit() {
        if (!editText.trim()) return;

        try {
            await updateTask(editingId, { title: editText });

            setTasks((prev) =>
                prev.map((t) =>
                    t.id === editingId
                        ? { ...t, title: editText }
                        : t
                )
            );

            setEditingId(null);
            setEditText("");
        } catch {
            setError("Failed to edit task");
        }
    }

    function startEdit(task) {
        setEditingId(task.id);
        setEditText(task.title);
    }

    function cancelEdit() {
        setEditingId(null);
        setEditText("");
    }

    return {
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
    };
}
