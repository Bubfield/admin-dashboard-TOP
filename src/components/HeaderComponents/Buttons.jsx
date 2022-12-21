import React from "react";

const Buttons = () => {
  let buttonText = ["New", "Upload", "Share"];
  return (
    <div className="three-buttons">
      {buttonText.map((text) => (
        <button>{text}</button>
      ))}
    </div>
  );
};

export default Buttons;
