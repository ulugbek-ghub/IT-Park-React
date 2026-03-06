import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const controller = new AbortController()

        fetch(url, { signal: controller.signal })
            .then(res => res.json())
            .then(json => {
                setData(json)
                setLoading(false)
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    console.error("Fetch error:", err)
                    setLoading(false)
                }
            })

        return () => controller.abort()
    }, [url])

    return [data, loading]
}

export default useFetch