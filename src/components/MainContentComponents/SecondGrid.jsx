import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const SecondGrid = () => {
  let fakeArray2 = [0, 1];
  let fakeArray3 = [0, 1, 2, 3];

  return (
    <div className="second-grid">
      <div className="second-grid-top">
        {fakeArray2.map(() => (
          <>
            <h4>Site Maintenance</h4>
            <p>
              This is just made-up text that is being used to fill a certain
              amount of space for this div.
            </p>
            <hr />
          </>
        ))}
        <h4>Site Maintenance</h4>
        <p>
          This is just made-up text that is being used to fill a certain amount
          of space for this div.
        </p>
      </div>
      <div>
        <h3 className="trending">Trending</h3>
        <div className="second-grid-bottom">
          {fakeArray3.map(() => (
            <div className="row">
              <FontAwesomeIcon
                className="profile-icon-small-2"
                icon={faUserCircle}
              />
              <div className="row-div">
                <h4 className="row-div-h4">@name</h4>
                <p className="row-div-p">The Motto Grotto</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondGrid;
