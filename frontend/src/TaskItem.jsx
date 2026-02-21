export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
    return (
        <li style={{ marginBottom: 8 }}>
            <span
                style={{
                    textDecoration: task.done ? "line-through" : "none",
                }}
            >
                {task.title}
            </span>{" "}
            <button onClick={() => onToggle(task.id)}>
                {task.done ? "Undo" : "Done"}
            </button>{" "}
            <button onClick={onEdit}>Edit</button>{" "}
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
    );
}
