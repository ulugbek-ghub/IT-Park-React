import { useEffect, useState } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error, 'errorrrrrrr')
        setError(error)
        setLoading(false)
      })
  }, [url])

  return { data, loading, error }
}

export default useFetch
