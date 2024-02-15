import { useState, useEffect } from "react";
import appwriteDatabaseService from "../appwrite/database";
import { Container, RecipeCard } from "../components/index";
import { useDispatch } from "react-redux";
import { allRecipes } from "../store/recipeSlice";
function Home() {
  const [recipes, setRecipes] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    appwriteDatabaseService.getRecipes().then((recipes) => {
      if (recipes) {
        dispatch(allRecipes(recipes.documents));
        setRecipes(recipes.documents);
      }
    });
  }, []);
  if (recipes.length === 0) {
    return (
      <div>
        <Container>
          <div>
            <h1>No Recipes available</h1>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div>
      <Container>
        <div>
          {recipes.map((recipe) => (
            <div key={recipe.$id}>
              <RecipeCard {...recipe} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
