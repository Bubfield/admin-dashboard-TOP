import React from "react";
import { faEye, faShareNodes, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FirstGrid = () => {
  let fakeArray = [0, 1, 2, 3, 4, 5];

  return (
    <div className="first-grid">
      {fakeArray.map(() => (
        <div className="first-grid-div">
          <h3 className="first-grid-h3">Super Cool Project</h3>
          <p className="first-grid-paragraph">
            This is just some random text that I'm using to fill in this div and
            make it look better but it's not really going to say anything
            sensical. So yeah that's just what I'm doing, don't mind all this
            text here!
          </p>
          <div className="first-grid-h4-div">
            <FontAwesomeIcon icon={faStar} className="first-grid-icons" />
            <FontAwesomeIcon icon={faEye} className="first-grid-icons" />
            <FontAwesomeIcon icon={faShareNodes} className="first-grid-icons" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FirstGrid;
