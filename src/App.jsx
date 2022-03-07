import styled from 'styled-components';
import ToDoList from './ToDoList';
import { NotesContext } from './Contexts/NotesContexts';
import { useState } from 'react';

export default function App() {

  const [tasks, setTasks] = useState([]);

  const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
  `

  return (
    <AppContainer>
      <NotesContext.Provider value={{ tasks, setTasks }}>
        <ToDoList />
      </NotesContext.Provider>
    </AppContainer>

  );
}