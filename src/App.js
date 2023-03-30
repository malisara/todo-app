import TodoList from './TodoList';
import React, { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

const LSKEY = 'localStorageKey';
const savedTodos = localStorage.getItem(LSKEY)
  ? JSON.parse(localStorage.getItem(LSKEY)) : [];


function App() {
  const [todos, setTodos] = useState(savedTodos);

  useEffect(() => {
    localStorage.setItem(LSKEY, JSON.stringify(todos));
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();
    const inputText = e.target.inputText.value;

    if (inputText.trim().length > 0) {
      setTodos([...todos, { task: inputText, id: uuidv4(), completed: false }]);
      e.target.inputText.value = '';
    }
  }

  function toggleCompletedTask(id) {
    const toCrossOver = [...todos].find(todo => todo.id === id);
    toCrossOver.completed = !toCrossOver.completed;
    setTodos([...todos]);
  }


  return (
    <div className='app'>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a new task" name="inputText" />
        <button id='addTaskButton'>+</button>
      </form>

      <button id='deleteTasksButton' onClick={() => setTodos(todos.filter(todo => !todo.completed))}>
        delete completed tasks</button>
      <TodoList toggleCompletedTask={toggleCompletedTask} todos={todos} />
    </div >
  );
}



export default App;
