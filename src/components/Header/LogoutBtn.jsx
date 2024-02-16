import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import { clearAllRecipes } from "../../store/recipeSlice";
import appwriteAuth from "../../appwrite/auth";
function LogoutBtn() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const logoutHandler = (e) => {
    e.preventDefault();
    if (!user.status) {
      console.log("No user to logout");
      return null;
    }
    appwriteAuth
      .logout()
      .then(() => {
        dispatch(logout());
        dispatch(clearAllRecipes());
      })
      .catch((err) => {
        console.log("Logout Error :: ", err);
      });
  };
  return (
    <div>
      <button
        onClick={logoutHandler}
        className="w-20  h-[41px] text-[#666666]  rounded-md border border-[#999999] hover:bg-[#00AAA1] hover:text-white hover:border-none"
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutBtn;
