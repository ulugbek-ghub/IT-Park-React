import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [user, setUser] = useState(null)
//   function logIn() {
//     setUser({name:"Jorj",role:"admin"})
//   }
//   if(!user) {
//     return (
//       <div>
//         <h1>User royhatdan otgan</h1>
//         <button onClick={logIn}>Lgin</button>
//       </div>
//     )
//   }
//   return <h1>User bor,User name {user.name}</h1>
// }


// function App() {
//   const [user, setUser] = useState(null)
//   function logIn() {
//     setUser({name:"Trump",role:"admin"})
//   }
//   if(!user) {
//     return (
//       <div>
//         <h1>Siz Prezidentmisiz</h1>
//         <button onClick={logIn}>Albatta, hov Amerikani prezidentiman</button>
//       </div>aaa
//   }
//   return <h1>Xush kelibsiz, oga{user.name}</h1>
// }

// function App() {
//   const [age, setAge] = useState(16)
//   function yosh() {
//     setAge(18)
//   }

//   if(age < 18) {
//     return (
//       <div>
//         <h1>Siz 18 yosh emassiz</h1>
//         <button onClick={yosh}>Yoshimni ostir</button>
//       </div>
//     )
//   }
//   return <h1>Siz endi 18 yosh</h1>
// }

//UV

// 1mashq
// function App() {
//   const [parol, setParol] = useState("")

//   if(parol === "1234") {
//     return <div>Togri parol</div>
//   }
  
//   return (
//     <div>
//       <input 
//         type="password" 
//         value={parol}
//         onChange={(e) => setParol(e.target.value)}
//         placeholder="Parol kiriting"
//       />
//       <div>Notogri parol</div>
//     </div>
//   )
// }


//2 mshq

// function App() {
//     const [role, setRole] = useState("Guest")
//     if(role === "Admin") {
//         return <div>Admin panel</div>
//     }
//     if(role === "User") {
//         return <div>User Panel</div>
//     }
//     return (
//         <div>
//             <h1>Guest</h1>
//             <button onClick={() => setRole("Admin")}>Admin</button>
//             <button onClick={() => setRole("User")}>User</button>
//         </div>
//     )
// }

export default App