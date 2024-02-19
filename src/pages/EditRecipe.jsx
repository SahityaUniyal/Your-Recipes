import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, PostForm } from "../components/index";
import appwriteDatabaseService from "../appwrite/database";
function EditRecipe() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const { recipeId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (recipeId) {
      appwriteDatabaseService.getRecipe(recipeId).then((data) => {
        data && setRecipe(data);
        setLoading(false);
      });
    } else {
      navigate("/");
    }
  }, [recipeId, navigate]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <Container>
        <PostForm recipe={recipe} />
      </Container>
    </div>
  );
}

export default EditRecipe;
