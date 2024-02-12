import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-[#00AAA1]",
  textColor = "text-white",
  className = "",
  ...props
}) {
  console.log("reached");
  return (
    <button
      type={type}
      className={`w-[101px] h-[41px] rounded-md ${className}${bgColor} ${textColor}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
