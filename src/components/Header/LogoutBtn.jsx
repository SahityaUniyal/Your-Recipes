import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import { clearAllRecipes } from "../../store/recipeSlice";
import appwriteAuth from "../../appwrite/auth";
function LogoutBtn() {
  const dispatch = useDispatch();
  const loggedStatus = useSelector((state) => {
    state.auth.status;
  });
  const logoutHandler = (e) => {
    e.preventDefault();
    if (!loggedStatus) {
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
        className="m-10 w-[74px] h-[35px] text-[#666666]  rounded-md border border-[#999999] hover:bg-[#00AAA1] hover:text-white hover:border-none"
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutBtn;
