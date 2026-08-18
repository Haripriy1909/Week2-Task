import { useState } from "react";
import styles from "./TodoApp.module.css";

function TodoApp() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React props and state" },
    { id: 2, title: "Build a To-Do app" },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    const trimmed = newTask.trim();
    if (!trimmed) return;

    setTasks((prev) => [...prev, { id: Date.now(), title: trimmed }]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.container}>
      <h2>To-Do List</h2>

      <form className={styles.form} onSubmit={addTask}>
        <input
          type="text"
          className={styles.input}
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit" className={styles.addButton}>
          Add
        </button>
      </form>

      {tasks.length === 0 ? (
        <p className={styles.empty}>No tasks yet. Add one above!</p>
      ) : (
        <ul className={styles.list}>
          {tasks.map((task) => (
            <li key={task.id} className={styles.item}>
              <span>{task.title}</span>
              <button className={styles.deleteButton} onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoApp;
