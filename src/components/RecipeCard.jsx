import React from "react";
import { Link } from "react-router-dom";
import appwriteFileService from "../appwrite/file";
function RecipeCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/recipe/${$id}`}>
      <div className="bg-[#E8F3F3] p-4 rounded-xl shadow-xl">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteFileService.getFilePreview(featuredImage)}
            alt={title}
            className="w-[200px] aspect-square rounded-xl"
          />
        </div>
        <h2 className="text-base font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default RecipeCard;
