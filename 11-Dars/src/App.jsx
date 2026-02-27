import { useReducer } from 'react'
import Child from './Hooks/topshiriq'
import React from 'react'

// const App = () => {
//   const calc = useMemo(() => {
//     return 1883 * 78888
// }, [])


//    const callbackHook = useMemo(() => {
//     return () => {
//         console.log('Callback Hook ishladi');
//     }
//    }, [])

//    console.log(callbackHook);


// function App() {
//   const [state, dispatch] = useReducer(reducerFn, { users: [] })

//   function loadUsers() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(data => dispatch({ type: 'SET_USERS', users: data }))
//   }

//   return (
//     <>
//       <button onClick={loadUsers}>Load Users</button>
//       <ul>
//         {state.users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

// }

// export default App



import React from 'react'

const User = React.memo({ name }) => {
  console.log('User render');
  return <h2>{name}</h2>

  export default function App()
  const App = () => {
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('Asad')


    return (
      <div>
        <button onclick={c => c + 1}>
          {count}
        </button>
        <User name={name} />
      </div>
    )
  }

  export default App