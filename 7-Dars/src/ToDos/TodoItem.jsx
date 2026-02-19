import React, { useState } from 'react';

const TodoItem = ({ todo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);

  function handleEdit() {
    if (isEditing) {
      todo.name = editValue;
    }
    setIsEditing(!isEditing);
  }

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
      ) : (
        <span>{todo.name}</span>
      )}

      <button onClick={handleEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>

      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;