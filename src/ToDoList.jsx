import ToDoItems from './ToDoItems';
import { useState } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const handleSumbit = (e) => {
    e.preventDefault();
    const task = document.getElementById("task");
    if (!task.value) return;
    setTasks([...tasks, task.value]);
    task.value = "";
  }
  return (
    <div>
      <h1>ToDoList</h1>
      <ul>
        <ToDoItems tasks={tasks} />
      </ul>
      <form onSubmit={handleSumbit}>
        <input id='task' type="text" placeholder='Add new task...' />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}