import React from 'react';


export default function Todo({ todo, toggleCompletedTask }) {
    let isCrossedOver = todo.completed;

    const handleCrossOver = () => {
        toggleCompletedTask(todo.id);
        isCrossedOver = !isCrossedOver;
    };

    return (
        <div className={isCrossedOver ? 'crossedOver oneTodo' : 'oneTodo'} onClick={handleCrossOver}>{todo.task}</div>
    );
}
