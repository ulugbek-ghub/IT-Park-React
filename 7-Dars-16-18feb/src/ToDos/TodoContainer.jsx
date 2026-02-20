import React from 'react';
import TodoItem from './TodoItem';

const TodoContainer = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoContainer;