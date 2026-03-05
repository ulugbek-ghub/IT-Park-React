import React, { useState } from 'react'
import './RecipeDetails.css'

const RecipeDetails = ({ recipe }) => {
    const [fullscreen, setFullscreen] = useState(false)

    return (
        <div className="recipe-card">
            {fullscreen && (
                <div className="fullscreen-overlay" onClick={() => setFullscreen(false)}>
                    <img src={recipe.image || ""} alt={recipe.name} />
                </div>
            )}
            <img src={recipe.image || ""} alt={recipe.name} />
            <div className="recipe-card-body">
                <div className="recipe-card-title-row">
                    <h2>{recipe.name}</h2>
                    <button className="btn-save" onClick={() => setFullscreen(true)}>Save</button>
                </div>
                <p>{recipe.instructions || recipe.description}</p>
                <p className="recipe-cook-time">
                    Cooking Time: (in minutes) {recipe.cookTimeMinutes} minutes
                </p>
            </div>
        </div>
    )
}

export default RecipeDetails