import './App.css';
import ToDoList from './ToDoList';
import { NotesContext } from './Contexts/NotesContexts';
import { useState } from 'react';

export default function App() {

  const [tasks, setTasks] = useState([]);

  return (

    <div className="app">
      <NotesContext.Provider value={{ tasks, setTasks }}>
        <ToDoList />
      </NotesContext.Provider>
    </div>

  );
}