import Item from './Item'

export default function ToDoItems({ tasks, setTasks }) {
  return (
    tasks.map((task, idx, tasks) => {
      return (
        <Item key={`${idx}${task}`} setTasks={setTasks} idx={idx} tasks={tasks} task={task} />
      )
    })
  )
}