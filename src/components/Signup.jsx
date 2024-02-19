import { Input, Button } from "./index";
import { useForm } from "react-hook-form";
import appwriteAuthService from "../appwrite/auth";
import appwriteDatabaseService from "../appwrite/database";
import { useState } from "react";
import { login as authLogin } from "../store/authSlice";
import { setAllRecipes, setUsersRecipes } from "../store/recipeSlice";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
function Signup() {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      let user = await appwriteAuthService.createAccount(data);
      if (user) {
        user = await appwriteAuthService.getCurrentUser();
        if (user) {
          const allRecipe = await appwriteDatabaseService.getRecipes();
          const usersRecipe = await appwriteDatabaseService.getUserRecipes(
            user.$id
          );
          dispatch(authLogin({ user }));
          dispatch(setAllRecipes({ allRecipe }));
          dispatch(setUsersRecipes({ usersRecipe }));
        }
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <div className="m-auto my-10 shadow p-10 flex flex-col w-1/3 gap-3">
        <h2 className="text-center text-2xl font-bold leading-tight">
          Signup for an account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have a account?&nbsp;
          <Link
            to="/signin"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            SignIn
          </Link>
        </p>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5">
            <div>
              {errors?.username && (
                <p className="text-red-500">{errors.username?.message}</p>
              )}
              <Input
                {...register("username", {
                  required: "Please Enter Username",
                })}
                label={"Username"}
                placeholder={"Enter Username"}
              />
            </div>
            <div>
              {errors?.email && (
                <p className="text-red-500">{errors.email?.message}</p>
              )}
              <Input
                {...register("email", {
                  required: "Email Address is required",
                  validate: {
                    matchPattern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid address",
                  },
                })}
                label={"Email"}
                placeholder={"Enter Your Email"}
              />
            </div>
            <div>
              {errors?.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
              <Input
                {...register("password", {
                  required: "Please Enter a Password",
                  minLength: {
                    value: 8,
                    message: "Password must be 8 characters or more",
                  },
                })}
                type="password"
                label={"Password"}
                placeholder={"Enter Your Password"}
              />
            </div>
            <Button type="submit" className="w-full tracking-widest">
              SignUp
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
