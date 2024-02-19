import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import appwriteDatabaseService from "../appwrite/database";
import { setUsersRecipes as setUserRecipesInStore } from "../store/recipeSlice";
import { Link, useNavigate } from "react-router-dom";
import { Container, RecipeCard } from "../components";
function MyRecipes() {
  const [userRecipes, setUserRecipes] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    appwriteDatabaseService.getUserRecipes(user.$id).then((data) => {
      if (data) {
        const recipes = data.documents;
        setUserRecipes(recipes);
        dispatch(setUserRecipesInStore({ recipes }));
        setLoading(false);
      } else {
        navigate("/");
      }
    });
  }, [user, navigate]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return userRecipes.length > 0 ? (
    <div>
      <Container>
        <div className="flex flex-wrap gap-8 justify-center p-8">
          {userRecipes.map((recipe) => (
            <div className="relative" key={recipe.$id}>
              <RecipeCard {...recipe} />
              {recipe.status === "inactive" && (
                <h1 className="absolute top-0 rounded-xl p-1 text-white bg-red-500">
                  {recipe.status}
                </h1>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  ) : (
    <div className="p-8">
      Create your Recipies:{" "}
      <Link to="/add-recipe" className="text-gray-500 underline ml-4">
        Add Recipe
      </Link>{" "}
    </div>
  );
}

export default MyRecipes;
