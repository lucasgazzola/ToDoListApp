import { NotesContext } from './Contexts/NotesContexts';
import { useContext } from 'react';
import styled from 'styled-components';

export default function Item({ idx, task }) {

  const { tasks, setTasks } = useContext(NotesContext);

  const handleDelete = () => {
    const newTasks = tasks.filter((_, i) => i !== idx);
    setTasks(newTasks);
  }

  const ListItem = styled.li`
    display: flex;
    height: 2rem;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  `

  const Name = styled.p`
    min-width: 200px;
  `


  return (
    <ListItem>
      <span>{idx + 1}</span>
      <Name>{task}</Name>
      <button onClick={handleDelete}>Delete</button>
    </ListItem >
  )
}