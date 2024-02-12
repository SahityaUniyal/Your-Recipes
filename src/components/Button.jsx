import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-[#00AAA1]",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`w-20  h-[41px] rounded-md ${className}${bgColor} ${textColor} hover:bg-[#00aaa2ab] hover:border hover:text-black`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
