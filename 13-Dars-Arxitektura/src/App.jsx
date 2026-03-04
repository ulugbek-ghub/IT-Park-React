import React from 'react'
import usefetch from '../components/RecipeDetails'

const RecipeDatalist = () => {
    const [data, loading] = usefetch("https://dummyjson.com/recipes")
    if(loading){
        return <h1>Loading...</h1>
    }
  return (
    <div className="container">
      {data?.recipes?.map((recipe) => (
        <RecipeDatalist key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}

export default RecipeDatalist
