import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

// Hooks - useState, useEffect, useRef, useContext, useReducer, useMemo, useCallback

// useEffect --- 1- argument, callback funtion, asosiy function, 2- argument, array dependencies, har safar component render bo'lganda ishlaydi


// function App() {
//   const [todos, setTodos] = useState([])
//   // console.log(users);
  

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => setTodos(json))
      
//   }, [])

//   return (
//     <>
//       <ol>
//         {todos.map((todo) => (
//           <li key={todo.id}>{todo.title}</li>
//         ))}
//       </ol>
//     </>
//   )
// }

// function App() {
//   const [users, setUsers] = useState([]);

//   const [count, setCount] = useState(0);

//   function dec() {
//     setCount((c) => --c);
//   }

//   function inc() {
//     setCount((c) => ++c);
//   }

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => setUsers(json))
//       console.log(users);
//   }, [count]);
//   return (
//     <>
//       <h1>Users</h1>
//       <ol>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ol>
//       <button onClick={dec}>-</button><span>{count}</span><button onClick={inc}>+</button>
//     </>
// )
// }


// const App = () => {
//   const [text, setText] = useState('')

//   useEffect(() => {
//     document.title = text || 'React Vite'
//   }, [text])
//   return (
//     <div>
//       <input type="text" value={text} onChange={e => setText(e.target.value)}
//       placeholder='Title ozgartir'/>
//     </div>
//   )
// }


export default App
