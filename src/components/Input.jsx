import React, { useId } from "react";
import { forwardRef } from "react";

function Input({ type = "text", label, className = "", ...props }, ref) {
  const id = useId();
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        id={id}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-[#94D7D3] focus:bg-gray-50 duration-200 border border-[#94D7D3] w-full ${className}`}
        {...props}
        ref={ref}
      />
    </div>
  );
}

export default forwardRef(Input);
