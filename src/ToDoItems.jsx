

export default function ToDoItems({ tasks }) {
  return (
    tasks.map((task, index) => {
      return (
        <li key={index}>{task}</li>
      )
    })
  )
}