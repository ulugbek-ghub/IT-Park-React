import { useEffect } from 'react'
import useFetch from './useFetch'

function App() {
  const [data, loading] = useFetch("https://fakestoreapi.com/products")
  console.log(data, loading);

    // if (data) {
    //   console.log(data)
    // }
  

  if (loading) return <p>Loading...</p>
}

export default App