import React from "react";

const Input = ({ label, value, name, type = "text", onChange }) => {
  return (
    <div className="mb-5">
      <label htmlFor="eventName">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className="
            bg-purple-secondary-2
            md:p-3
            xl:p-4
            md:text-lg
            text-base
            first-letter
            rounded-[10px]
            flex
            justify-center
            items-center
            p-3
            w-full
            text-grey-600
            hover:bg-purple-secondary-1
            outline-none
        "
      />
    </div>
  );
};

export default Input;
