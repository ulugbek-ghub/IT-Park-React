import React from "react"
import useFetch from "../Hooks/useFetch"

const App = () => {
  const [data, loading, error] = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  )

  if (loading) return <h2>Loading.....</h2>
  if (error) return <h1>{error.message}</h1>

  return (
    <div>
      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App