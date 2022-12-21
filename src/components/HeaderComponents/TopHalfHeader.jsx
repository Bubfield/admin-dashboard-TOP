import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const TopHalfHeader = () => {
  return (
    <div className="top-half-header">
      <div className="searchbar-and-icon">
        <FontAwesomeIcon className="search-icon" icon={faSearch} />
        <input type="text" className="searchbar" />
      </div>
      <div className="icons-and-name">
        <FontAwesomeIcon className="bell-icon" icon={faBell} />
        <FontAwesomeIcon className="profile-icon-small" icon={faUserCircle} />
        <h3>Morgan Oakley</h3>
      </div>
    </div>
  );
};

export default TopHalfHeader;
