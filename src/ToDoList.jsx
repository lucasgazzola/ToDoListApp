import ToDoItems from './ToDoItems';
import './ToDoList.css';
import { useState } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);

  const handleSumbit = (event) => {
    event.preventDefault();
    const task = document.getElementById("task");
    if (!task.value) return;
    setTasks([...tasks, task.value]);
    task.value = "";
  }
  return (
    <div className='to-do-list-container'>
      <h1>To Do List</h1>
      <form onSubmit={handleSumbit}>
        <input id='task' type="text" placeholder='Add new task...' />
        <button type="submit">Add</button>
      </form>
      <ul>
        <ToDoItems setTasks={setTasks} tasks={tasks} />
      </ul>
    </div>
  )
}