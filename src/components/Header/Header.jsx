import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Logo, Container } from "../index";
import LogoutBtn from "./LogoutBtn";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      class: "w-20  h-[41px]",
      active: true,
    },
    {
      name: "All Recipes",
      slug: "all-recipes",
      class: "w-20  h-[41px]",
      active: true,
    },
    {
      name: "My Recipies",
      slug: "my-recipes",
      class: "w-20  h-[41px]",
      active: authStatus,
    },
    {
      name: "Add Recipe",
      slug: "add-recipe",
      class: "w-20  h-[41px]",
      active: authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      class:
        "w-20  h-[41px] rounded-md bg-[#00AAA1] text-white hover:bg-[#00aaa2ab] hover:border hover:text-black",
      active: !authStatus,
    },
    {
      name: "SignUp",
      slug: "/signup",
      class:
        "w-20  h-[41px] rounded-md bg-[#00AAA1] text-white hover:bg-[#00aaa2ab] hover:border hover:text-black",
      active: !authStatus,
    },
  ];
  return (
    <header className="w-full bg-[#E8F3F3] sticky top-0">
      <nav className=" h-16 flex justify-around gap-8 items-center ">
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="">
          <ul className="flex gap-8">
            {navItems?.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    className={`${item?.class} `}
                    onClick={(e) => {
                      navigate(item.slug);
                    }}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && <LogoutBtn />}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
