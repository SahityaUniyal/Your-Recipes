import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import AuthLayout from "./components/AuthLayout.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  AddRecipe,
  AllRecipes,
  Home,
  Login,
  Signup,
  Recipe,
} from "./pages/index.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/all-recipes",
        element: (
          <AuthLayout authentication={false}>
            <AllRecipes />
          </AuthLayout>
        ),
      },
      {
        path: "/add-recipe",
        element: (
          <AuthLayout authentication={true}>
            <AddRecipe />
          </AuthLayout>
        ),
      },
      {
        path: "/recipe/:recipeId",
        element: (
          <AuthLayout authentication={true}>
            <Recipe />
          </AuthLayout>
        ),
      },
      // {
      //   path: "/edit-recipe/:recipeId",
      //   element: (
      //     <AuthLayout authentication={true}>
      //       < />
      //     </AuthLayout>
      //   ),
      // },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
