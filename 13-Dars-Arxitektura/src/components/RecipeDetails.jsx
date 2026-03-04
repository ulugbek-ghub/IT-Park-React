import RecipeDetails from "./components/RecipeDetails"

const RecipeDetails = ({ recipe }) => {
    return (
        <div>
            <img src="{recipe.name}" alt="recipe.name" />
            <h2>{recipe.name}</h2>
            {recipe.ingredients.map((ingredient, index) => (
                <p key={index}>{ingredient}</p>
            ))}
        </div>
    )
}

export default RecipeDetails