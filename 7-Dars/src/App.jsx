import React, { useRef, useState } from "react";
import TodoContainer from "./ToDos/TodoContainer";

const App = () => {
  const todonameref = useRef();
  const [todos, setTodos] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    if (!todonameref.current.value.trim()) return; 
    setTodos([{ id: Date.now(), name: todonameref.current.value.trim() }, ...todos]);
    todonameref.current.value = '';
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Status funtion 
  function statusChanger(id, status) {
    const cloneTodos = todos.map((e)=> e)
    const todo = cloneTodos.find((todo) => todo.id === id)

    if (status) {
      todo.status = "DONE"
      setTodos(cloneTodos)
    }else {
      todo.status = "DOING"
      setTodos(cloneTodos);
    }
  }
console.log(todos);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Todo Name" ref={todonameref} />
        <button>Create ToDo</button>
      </form>
      <TodoContainer todos={todos} deleteTodo={deleteTodo} />
      <button onClick={() => statusChanger(todos[2].id, true)}>Status Changer</button>
    </div>
  );
};

export default App;