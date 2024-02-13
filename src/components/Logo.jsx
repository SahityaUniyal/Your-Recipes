import React from "react";

function Logo({
  bgColor = "bg-[#00AAA1]",
  textColor = "text-white",
  fontSize = "text-24",
  fontWeight = "font-semibold",
}) {
  return (
    <div>
      <p className={`uppercase  text-[24px] ${fontWeight} ${textColor}`}>
        <span className={`px-1 ${bgColor} ${textColor}`}>Your</span>
        <span className="text-black text-[17px]">Recipes</span>
      </p>
    </div>
  );
}

export default Logo;
