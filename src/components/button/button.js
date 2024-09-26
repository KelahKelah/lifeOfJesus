import React from "react";
import "./button.css";

const Button = ({ buttonName, className, imgClass, icon, onClick }) => {
  return (
    <button className={`${className} b-tag`} onClick={onClick}>
      {icon ? (
        <img src={icon} alt="btn-icon" className={`${imgClass} btn-icon`} />
      ) : (
        ""
      )}
      {buttonName}
    </button>
  );
};
export { Button };
