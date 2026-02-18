import React from 'react';
import TodoItem from './TodoItem';

const TodoContainer = ({ todos, deleteTodo, statusChanger }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          deleteTodo={deleteTodo} 
          status={todo.status}
          statusChanger={status}
        />
      ))}
    </ul>
  );
};

export default TodoContainer;