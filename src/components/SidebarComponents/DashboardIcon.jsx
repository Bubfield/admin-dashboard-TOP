import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesSquare } from "@fortawesome/free-solid-svg-icons";

const DashboardIcon = () => {
  return (
    <div className="sidebar-icons-flex">
      <FontAwesomeIcon icon={faTimesSquare} className="dashboard-icon" />
      <h2>Dashboard</h2>
    </div>
  );
};

export default DashboardIcon;
