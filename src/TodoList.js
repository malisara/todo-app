import React from 'react';
import Todo from './Todo';


export default function TodoList({ todos, toggleCompletedTask }) {
    const reversedTodos = todos.slice().reverse();
    return (
        reversedTodos.map(todo => {
            return <Todo toggleCompletedTask={toggleCompletedTask} key={todo.id} todo={todo} />;
        })
    );
}
