import { useNavigate, useParams, Link } from "react-router-dom";
import appwriteDatabaseService from "../appwrite/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Container } from "../components/index";
import appwriteFileService from "../appwrite/file";
import parse from "html-react-parser";
function Recipe() {
  const [loading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState(null);
  const { recipeId } = useParams();
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();
  const isAuthor = recipe && userData ? recipe.userId === userData.$id : false;
  useEffect(() => {
    if (recipeId) {
      appwriteDatabaseService.getRecipe(recipeId).then((data) => {
        if (data) {
          appwriteFileService.getFile(data.featuredImage).then((image) => {
            data.imageId = data.featuredImage;
            data.featuredImage = image.href;
          });
          setRecipe(data);
          setLoading(false);
        } else {
          navigate("/");
        }
      });
    } else {
      navigate("/");
    }
  }, [recipeId, navigate]);
  const deleteRecipe = () => {
    appwriteDatabaseService.deleteRecipe(recipe.$id);
    appwriteFileService.deleteFile(recipe.imageId);
    navigate("/");
  };
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return recipe ? (
    <Container>
      <div className="p-10 w-1/2 mx-auto flex flex-col justify-center">
        <div className="relative z-0">
          <img className="w-full h-[400px]" src={recipe.featuredImage} alt="" />
          {isAuthor && (
            <div className="absolute top-2 right-0">
              <Link to={`/edit-recipe/${recipe.$id}`}>
                <Button className="bg-blue-300 hover:bg-blue-400">Edit</Button>
              </Link>
              <Button
                className="bg-red-400 hover:bg-red-600"
                onClick={deleteRecipe}
              >
                Delete
              </Button>
            </div>
          )}
        </div>
        <div>
          <h1 className="mt-5 text-3xl text-center capitalize">
            {recipe.title}
          </h1>
          <div>{parse(recipe.content)}</div>
        </div>
      </div>
    </Container>
  ) : null;
}

export default Recipe;
