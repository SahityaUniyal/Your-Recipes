import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../index";
function Footer() {
  return (
    <footer className="p-10 w-full bg-[#E8F3F3] flex items-center justify-evenly">
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div>
        <p>Thank You for visiting the site</p>
        <p>Hope you enjoyed and found the recipe you were looking for</p>
      </div>
    </footer>
  );
}

export default Footer;
