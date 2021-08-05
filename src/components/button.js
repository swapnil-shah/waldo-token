import React from "react";

const Button = ({ primary, text, url, small }) => {
  return (
    <>
      {primary ? (
        <button className="btn btn-primary">
          <a href={url}>{text}</a>
        </button>
      ) : (
        <button className="btn btn-secondary">
          <a href={url}>{text}</a>
        </button>
      )}
    </>
  );
};

export default Button;
