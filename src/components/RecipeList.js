import React from "react";

const RecipeList = props => (
  <div style={props.style}>
    <h2>Recipes</h2>
    <ul>
      {props.recipes.map(recipe => (
        <li key={recipe.recipe_id}>
          <span>{recipe.title}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default RecipeList;
