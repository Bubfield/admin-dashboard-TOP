import React from "react";
import Buttons from "./Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const BottomHalfHeader = () => {
  return (
    <div className="bottom-half-header">
      <div className="hi-there">
        <div className="hi-there-icon">
          <FontAwesomeIcon
            className="profile-icon-larger"
            icon={faUserCircle}
          />
        </div>
        <div className="hi-there-text">
          <p>Hi there,</p>
          <h2>Morgan Oakley (@morgan)</h2>
        </div>
      </div>
      <Buttons />
    </div>
  );
};

export default BottomHalfHeader;
