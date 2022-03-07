import ToDoItems from './ToDoItems';
import { useContext } from "react";
import { NotesContext } from './Contexts/NotesContexts';
import styled from 'styled-components';

export default function ToDoList() {
  const { tasks, setTasks } = useContext(NotesContext);

  const randomColours = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#8bc34a',
    '#cddc39'
  ];

  const randomColour = Math.floor(Math.random() * randomColours.length)

  const Title = styled.h1`
    font-size: 2em;
    text-align: center;
    color: ${randomColours[randomColour]};
    `

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  `

  const handleSumbit = (event) => {
    event.preventDefault();
    const task = document.getElementById("task");
    if (!task.value) return;
    setTasks([...tasks, task.value]);
    task.value = "";
  }

  return (
    <Container>
      <Title>To Do List</Title>
      <form onSubmit={handleSumbit}>
        <input id='task' type="text" placeholder='Add new task...' />
        <button type="submit">Add</button>
      </form>
      <ul>
        <ToDoItems />
      </ul>
    </Container>
  )
}