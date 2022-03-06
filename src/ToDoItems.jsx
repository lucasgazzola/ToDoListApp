import Item from './Item'
import { NotesContext } from './Contexts/NotesContexts';
import { useContext } from 'react';

export default function ToDoItems() {


  const { tasks } = useContext(NotesContext);

  return (
    tasks.map((task, idx) => {
      return (
        <Item idx={idx} task={task} />
      )
    })
  )
}