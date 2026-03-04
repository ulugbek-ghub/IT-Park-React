import React from 'react'
import './RecipeDetails.css'

const RecipeDetails = ({ recipe }) => {
    return (
        <div className="recipe-card">
            <img src={recipe.image || ""} alt={recipe.name} />
            <div className="recipe-card-body">
                <div className="recipe-card-title-row">
                    <h2>{recipe.name}</h2>
                    <button className="btn-save">Save</button>
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