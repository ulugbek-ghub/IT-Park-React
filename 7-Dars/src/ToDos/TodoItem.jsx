import React from 'react';

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <li>
      <span>{todo.name}</span> 
      <button onClick={() => deleteTodo(todo.id)}>Todo ochir</button>
    </li>
  );
};

export default TodoItem;