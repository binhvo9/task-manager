import axios from "axios";

const API = "http://localhost:5000/tasks";

export async function fetchTasks() {
    const res = await axios.get(API);
    return res.data;
}

export async function createTask(title) {
    const res = await axios.post(API, { title });
    return res.data;
}

export async function updateTask(id, updates) {
    await axios.put(`${API}/${id}`, updates);
}

export async function deleteTaskAPI(id) {
    await axios.delete(`${API}/${id}`);
}
