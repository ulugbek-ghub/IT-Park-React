import React, { useRef, useState } from "react";
import TodoContainer from "./ToDos/TodoContainer";

const App = () => {
  const todonameref = useRef();
  const [todos, setTodos] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    if (!todonameref.current.value) return;
    setTodos([{ id: Date.now(), name: todonameref.current.value }, ...todos]);
    todonameref.current.value = '';
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Todo Name" ref={todonameref} />
        <button>Create ToDo</button>
      </form>
      {/* Pass the function down */}
      <TodoContainer todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;