import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [company, setCompany] = useState("Al-Xorazmiy Vorislari")

//   function changeCompany() {
//     console.log("changeCompany ishladi");
//     setCompany("Yandex Taxi")
//   }

//   return (
//     <>
//       <h1>{company}</h1>
//       <button onClick={changeCompany}>Click</button>
//     </>
//   )
// }

// export default App

// const App = () => {
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count +1)}>Increment atish</button>
//       <br />
//       <br />
//       <button onClick={() => setCount(count -1)}>Decrement atish</button>
//     </div>
//   )
// }


//Matn bor textini koritish va berkitish tugmalari orqali boshqarish
// const App = () => {
//   const [show, setShow] = useState(true)
//   return (
//     <div>
//       {show && <h1>Matn bor</h1>}
//       <button onClick={() => setShow(true)}>Koritish</button>
//       <button onClick={() => setShow(false)}>Berkitish</button>
//     </div>
//   )
// }


//--------------

// UV 

// 1-mashq
// const App = () => {
//   const [text, setText] = useState("")
//   return (
//     <div>
//       <input type="text" onChange={(e) => setText(e.target.value)} />
//       <h1>{text}</h1>
//     </div>
//   )
// }

//2 -mashq
// const App = () => {
//   const [user, setUser] = useState({ name: "Asad", age: "15" })

//   return (
//     <div>
//       <h1>Ismi: {user.name}</h1>
//       <h1>Yoshi: {user.age}</h1>

//       <input 
//         type="text" 
//         placeholder="Ism yozing" 
//         onChange={(e) => setUser({ ...user, name: e.target.value })} 
//       />
//       <br />
//       <input 
//         type="number" 
//         placeholder="Yosh yozing" 
//         onChange={(e) => setUser({ ...user, age: e.target.value })} 
//       />
//     </div>
//   )
// }

//3 mashq
// function App() {
//   const [company, setCompany] = useState("Al-Xorazmiy Vorislari")
//   function changeCompany() {
//     setCompany(company === "Al-Xorazmiy Vorislari" ? "Yandex Taxi" : "Al-Xorazmiy Vorislari")
//   }

//   return (
//     <>
//       <h1>{company}</h1>
//       <button onClick={changeCompany}>Click</button>
//     </>
//   )
// }

//4 mshq
// 4. Inputga yoz → tugma bos → ekranga chiqsin
// const App = () => {
//   const [matn, setmatn] = useState("")
//   function changeMatn() {
//     setmatn(document.getElementById("input").value)
//   }
//   return (
//     <div>
//       <h1>{matn}</h1>
//       <input type="text" id='input' />
//       <br />
//       <button onClick={changeMatn}>Matn chiqarsh</button>
//     </div>
//   )
// }


export default App