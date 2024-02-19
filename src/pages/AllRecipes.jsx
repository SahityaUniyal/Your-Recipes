import { useEffect, useState } from "react";
import { Container, RecipeCard } from "../components/index";
import appwriteDatabaseService from "../appwrite/database";
import { useDispatch, useSelector } from "react-redux";
import { setAllRecipes as setAllStoreRecipes } from "../store/recipeSlice";
function AllRecipes() {
  const [allRecipes, setAllRecipes] = useState([]);
  const allRecipesStore = useSelector((state) => state.posts.allRecipes);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!allRecipesStore) {
      appwriteDatabaseService
        .getRecipes()
        .then((data) => data.documents)
        .then((recipes) => {
          setAllRecipes(recipes);
          dispatch(setAllStoreRecipes({ recipes }));
        });
    }
  }, []);
  if (allRecipes.length <= 0) {
    return (
      <div>
        <Container>
          <div className="w-full flex justify-center p-8">
            <h1 className="font-bold">No Recipes available</h1>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div>
      <Container>
        <div className="flex flex-wrap gap-8 justify-center p-8">
          {allRecipes.map((recipe) => (
            <div key={recipe.$id}>
              <RecipeCard {...recipe} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllRecipes;
