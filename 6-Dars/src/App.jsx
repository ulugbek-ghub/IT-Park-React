import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// const App = () => {
//   const [user, setUser] = useState({name: 'Jorj', role: 'admin'})

//   function logIn() {
//     setUser({name: 'Jorj', role: 'admin'})
//   }
//   return user && <h1>User bor, username {user.name}</h1>
// }

// List Rendering (map()) - royxatni render qilish uchun ishlatiladi

// const App = () => {
//   const [cars, setCars] = useState(["BMW", "Audi", "Mercedes", "KIA", "Zeekr"])
//   return (
//     <div>
//       <h1>Cars</h1>
//       <ul>
//         {cars.map((car, index) => (
//           <li key={index}>{car}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }


const App = () => {
  const [users, setUsers] = useState([
    {id: 1, name: 'Ali'},
    {id: 2, name: 'Vali'},
    {id: 3, name: 'Asad'},
    {id: 4, name: 'Tesha'},
    {id: 5, name: 'Bolta'}
  ])

  const deleteUser = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h1>IELTSi yoq studentla ina</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}  <button onClick={() => deleteUser(user.id)}>Delete</button> </li>
        ))}
      </ul>
    </div>
  )
}

export default App