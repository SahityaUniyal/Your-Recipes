import { useState, useEffect } from "react";
import appwriteDatabaseService from "../appwrite/database";
import { Container, RecipeCard } from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import { setAllRecipes } from "../store/recipeSlice";
function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  useEffect(() => {
    appwriteDatabaseService.getRecipes().then((recipes) => {
      if (recipes) {
        dispatch(setAllRecipes(recipes.documents));
        setRecipes(recipes.documents);
        setLoading(false);
      }
    });
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (recipes.length === 0) {
    return (
      <div>
        <Container>
          <div>
            <p>
              Are you looking to whip up delicious meals using the ingredients
              you have at home? Look no further! Recipe Finder is your go-to
              destination for discovering mouthwatering recipes tailored to your
              pantry.
            </p>
          </div>
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
        <div className="w-1/2 my-20 m-auto">
          <p className="text-gray-600">
            Are you looking to whip up delicious meals using the ingredients you
            have at home? Look no further! Recipe Finder is your go-to
            destination for discovering mouthwatering recipes tailored to your
            pantry.
          </p>
        </div>
        <h1 className="w-1/2 m-auto p-4 text-2xl font-bold  bg-[#E8F3F3]">
          All Recipes
        </h1>
        <div className="flex flex-wrap gap-8 justify-center p-8">
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
