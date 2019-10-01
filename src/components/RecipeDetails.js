import React from "react";

const RecipeDetails = props => (
  <div style={props.style}>
    <h2>Cheesecake Cupcakes</h2>
    <img
      src="https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg?cs=srgb&dl=baked-berry-cake-1055270.jpg&fm=jpg/"
      width="200px"
      alt="cupcake"
    />
    <div>
      <span>Dessert</span>
      <span>1200 cal</span>
    </div>
    <h3>Ingredience</h3>
    <ul>
      <li>14 graham crackers, crushed </li>
      <li>4 tbsp. melted butter</li>
      <li>1/4 tsp. kosher salt</li>
      <li>2 (8-oz.) blocks cream cheese, softened</li>
      <li>2 large eggs</li>
      <li>1/2 c. sour cream</li>
      <li>1/2 c. granulated sugar</li>
      <li>1 tsp. pure vanilla extract</li>
      <li>Pinch kosher salt</li>
      <li>Fresh berries, for garnish</li>
      <li>2 tbsp. orange marmalade or apricot jam</li>
    </ul>
    <h3>Steps</h3>
    <ol>
      <li>
        Preheat oven to 325º and line two 12-cup muffin tin with 16 paper
        liners. Spray liners with cooking spray.{" "}
      </li>
      <li>
        Make crust: In a large bowl, combine crushed graham crackers, melted
        butter, and salt and stir until combined. Press graham mixture into
        paper liners.
      </li>
      <li>
        In a large bowl, beat cream cheese until light and fluffy. Add eggs,
        sour cream, sugar, vanilla, and salt and beat until combined. Pour
        filling over graham crusts.
      </li>
      <li>
        Bake until center is slightly jiggly, 20 minutes. Let cool in muffin
        tin, then refrigerate at least 2 hours.
      </li>
      <li>
        To serve: top with desired fruit. Combine jam with 1 tablespoon water
        and microwave on medium power for 15 seconds. Brush jam mixture over
        fruit before serving.
      </li>
    </ol>
  </div>
);

export default RecipeDetails;
