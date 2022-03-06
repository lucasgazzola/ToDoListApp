import './Item.css';

export default function Item({ idx, tasks, setTasks, task }) {
  const handleDelete = () => {
    const newTasks = tasks.filter((_, i) => i !== idx);
    setTasks(newTasks);
  }

  return (
    <li className="to-do-list-item">
      <span>{idx + 1}</span>
      <p className='task-name'>{task}</p>
      <button onClick={handleDelete}>Delete</button>
    </li >
  )
}