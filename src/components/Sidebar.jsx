import React from "react";
import ThirdRowIcons from "./SidebarComponents/ThirdRowIcons";
import SecondRowIcons from "./SidebarComponents/SecondRowIcons";
import DashboardIcon from "./SidebarComponents/DashboardIcon";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <DashboardIcon />
      <SecondRowIcons />
      <ThirdRowIcons />
    </div>
  );
};

export default Sidebar;
