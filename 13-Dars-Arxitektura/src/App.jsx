import React from 'react'
import useFetch from './hooks/useFetch'
import RecipeDetails from './components/RecipeDetails'
import './App.css'

const App = () => {
    const [data, loading] = useFetch("https://dummyjson.com/recipes")

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <nav className="navbar">
                <a className="navbar-brand" href="#">Recipe App</a>
                <ul className="navbar-links">
                    <li><a href="#">Create Recipes</a></li>
                    <li><a href="#">Saved Recipes</a></li>
                    <li><a href="#">Authentication</a></li>
                </ul>
            </nav>
            <div className="container">
                {data?.recipes?.map((recipe) => (
                    <RecipeDetails key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </>
    )
}

export default App