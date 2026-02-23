import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import img2 from './assets/2.jpg'


function App() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [])

    return (
        <>
            <div className="container">
                <ol>
                    {posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ol>
                <img src={img2} className='side-image' />
            </div>
        </>
    )
}

export default App