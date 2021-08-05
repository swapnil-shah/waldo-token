import React from "react";

const Button = ({ primary, text }) => {
  return (
    <>
      <button className="px-3 py-2 font-semibold text-white transform rounded-lg shadow-sm bg-primary capitalize hover:shadow-lg hover:bg-primary-hover">
        <a href="">{text}</a>
      </button>
    </>
  );
};

export default Button;
