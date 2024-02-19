import React from "react";
import { Input, Select, RTE, Button } from "../index";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import appwriteFileService from "../../appwrite/file";
import { useSelector } from "react-redux";
import appwriteDatabaseService from "../../appwrite/database";
function PostForm({ recipe }) {
  const {
    register,
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: recipe?.title || "",
      content: recipe?.content || "",
      status: recipe?.status || "active",
    },
  });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const submit = async (data) => {
    if (recipe) {
      const file = data.image[0]
        ? await appwriteFileService.uploadFile(data.image[0])
        : null;
      if (file) {
        appwriteFileService.deleteFile(recipe.featuredImage);
      }
      const dbrecipe = await appwriteDatabaseService.updateRecipe(recipe.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbrecipe) {
        navigate(`/recipe/:${dbrecipe.$id}`);
      }
    } else {
      const file = data.image[0]
        ? await appwriteFileService.uploadFile(data.image[0])
        : null;
      if (file) {
        const dbrecipe = await appwriteDatabaseService.createRecipe({
          ...data,
          featuredImage: file.$id,
          userId: userData.$id,
        });
        if (dbrecipe) {
          navigate(`/post/${dbrecipe.$id}`);
        }
      }
    }
  };
  errors;
  return (
    <form onSubmit={handleSubmit(submit)} className="flex p-5 gap-5">
      {errors.length > 0 && (
        <p className="text-red-500">Please fill the form properly</p>
      )}
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <RTE
          label={"Content :"}
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/2 px-2">
        <Input
          label="Featured Image :"
          type="file"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          className="mb-4 w-fit ml-5"
          {...register("image", { required: !recipe })}
        />
        {recipe && (
          <div className="w-full mb-4">
            <img
              src={appwriteFileService.getFilePreview(recipe.featuredImage)}
              alt={recipe.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-8"
          {...register("status", { required: true })}
        />
        <Button type="submit">{recipe ? "Update" : "Submit"}</Button>
      </div>
    </form>
  );
}

export default PostForm;
