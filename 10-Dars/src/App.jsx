import React, { useReducer, useState } from 'react'

// function reducerFn(state, action) {
//   switch (action.type) {
//     case 'INC':
//       return {
//         ...state,
//         count: state.count + 1,
//         even: (state.count + 1) % 2 === 0 && state.count + 1 !== 0
//       }
//     case 'DEC':
//       return {
//         ...state,
//         count: state.count - 1,
//         even: (state.count - 1) % 2 === 0 && state.count - 1 !== 0
//       }
//     case 'Restart':
//       return {
//         ...state,
//         count: 0,
//         even: false
//       }
//     default:
//       return state
//   }
// }

// const App = () => {
//   const [state, dispatch] = useReducer(reducerFn, { count: 0, even: false })

//   return (
//     <>
//       <div>
//         <button onClick={() => dispatch({ type: 'DEC' })}>-</button>
//         <span>
//           {state.count} || Juftmi: {state.even ? 'Ha' : 'Yoq'}
//         </span>
//         <button onClick={() => dispatch({ type: 'INC' })}>+</button>
//       </div>
//       <br />
//       <button onClick={() => dispatch({ type: 'Restart' })}>Restart</button>
//     </>
//   )
// }

// useMemo --- hisoblash natijasini xotiraga saqlaydi va faqat uni dependencylari o'zgarganda qayta hisoblaydi

// import { useMemo } from 'react'

// const App = () => {
//   const calc = 1883 * 78888
//   console.log(calc);

//     const [number, setNumber] = useState('')

//     const kvadratNumber = useMemo(() => {
//         return number * number * number
//     }, [number])

//   return (
//     <div>
//       <input type="number" value={number} onChange={e => setNumber(e.target.value)} placeholder='Kub qilish uchun sonni kriiting'/>

//       <h2>
//         Kub: {kvadratNumber}
//       </h2>
//     </div>
//   )
// }



function reducerFn(state, action) {
  switch (action.type) {
    case 'SET_USERS':
      return { users: action.users }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducerFn, { users: [] })

  function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => dispatch({ type: 'SET_USERS', users: data }))
  }

  return (
    <>
      <button onClick={loadUsers}>Load Users</button>
      <ul>
        {state.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}




export default App
