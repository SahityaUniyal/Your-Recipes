import { useEffect, useState } from "react";
import "./App.css";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import appwriteAuthService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import { clearAllRecipes } from "./store/recipeSlice";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    appwriteAuthService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
          dispatch(clearAllRecipes());
        }
      })
      .catch((error) => {
        console.log("Authentication Error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return !loading ? (
    <>
      <div className="flex flex-col min-h-[100vh]">
        <Header />
        <main className="grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  ) : (
    <h1>Loading...</h1>
  );
}

export default App;
