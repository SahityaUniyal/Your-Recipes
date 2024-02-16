import { useState, useEffect } from "react";
import appwriteDatabaseService from "../appwrite/database";
import { Container, RecipeCard } from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import { setAllRecipes } from "../store/recipeSlice";
function Home() {
  const [recipes, setRecipes] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  useEffect(() => {
    appwriteDatabaseService.getRecipes().then((recipes) => {
      if (recipes) {
        dispatch(setAllRecipes(recipes.documents));
        setRecipes(recipes.documents);
      }
    });
  }, []);
  if (recipes.length === 0) {
    return (
      <div>
        <Container>
          <div className="w-full p-8">
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
