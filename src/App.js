import TodoList from './TodoList';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const inputText = e.target.inputName.value;

    if (inputText.trim().length > 0) {
      setTodos([...todos, { task: inputText, id: uuidv4(), completed: false }]);
      e.target.inputName.value = '';
      // TODO save to LS
    }

  }


  return (
    <div className='app'>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="new TODO" name="inputName" />
        <button className='addTaskButton' type="submit"> Add new</button>
      </form>

      <TodoList todos={todos} />
      <button>delete completed tasks</button>
    </div>
  );
}



export default App;
