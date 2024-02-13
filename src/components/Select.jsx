import React, { forwardRef, useId } from "react";

function Select(
  { options = ["active", "inactive"], label, className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className={`mr-3 ${className}`}>
          {label}
        </label>
      )}
      <select name="" id={id} className={`p-2 ${className}`} ref={ref}>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default forwardRef(Select);
