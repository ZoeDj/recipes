import React from "react";
import Header from "./Header";
import RecipeDetails from "./RecipeDetails";
import RecipeList from "./RecipeList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }
  componentDidMount() {
    fetch(
      "https://www.food2fork.com/api/search?key=11edeea2a4b3982615f9f20ffa380db5&q=cake"
    )
      .then(res => res.json())
      .then(json => {
        this.setState({ recipes: json.recipes });
      });
  }

  render() {
    const { recipes } = this.state;
    return (
      <div>
        <Header />
        <main style={{ display: "flex" }}>
          <RecipeList recipes={recipes} style={{ flex: 3 }} />
          <RecipeDetails style={{ flex: 5 }} />
        </main>
      </div>
    );
  }
}

export default App;
