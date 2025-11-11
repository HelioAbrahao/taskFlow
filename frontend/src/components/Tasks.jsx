import { useState, useEffect } from "react";

export default function Tasks({ user }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) setTasks(JSON.parse(savedTasks));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const clearAll = () => {
    if (window.confirm("Are you sure you want to delete all tasks?"))
      setTasks([]);
  };

  return (
    <div className="container">
      <h2>Welcome, {user.name}! 📝</h2>

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Type a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {tasks.length > 0 ? (
        <>
          <ul>
            {tasks.map((task) => (
              <li key={task.id} className={task.done ? "done" : ""}>
                {task.text}
                <div>
                  <button onClick={() => toggleTask(task.id)}>
                    {task.done ? "Undo" : "Complete"}
                  </button>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={clearAll}>Clear all</button>
        </>
      ) : (
        <p>🎯 No tasks added yet!</p>
      )}
    </div>
  );
}
