import React from 'react';

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <li style={{backgroundColor: status=== "DONE" ? "blue" : 'white'}}> 
      <input type="checkbox"
      onChange={(e) => statusChanger(e.target)} />
      <span>{todo.name}</span> 
      <button onClick={() => deleteTodo(todo.id)}>Todo ochir</button>
    </li>
  );
};

export default TodoItem;