import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHistory,
  faHome,
  faMessage,
  faPersonFalling,
  faPersonRifle,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";

const SecondRowIcons = () => {
  let iconsAndText = [
    {
      icon: faHome,
      text: "Home",
    },
    {
      icon: faPersonFalling,
      text: "Profile",
    },
    {
      icon: faMessage,
      text: "Messages",
    },
    {
      icon: faHistory,
      text: "History",
    },
    {
      icon: faTasks,
      text: "Tasks",
    },
    {
      icon: faPersonRifle,
      text: "Communities",
    },
  ];

  return (
    <div className="second-row-sidebar">
      {iconsAndText.map((item) => (
        <div className="sidebar-icons-flex">
          <FontAwesomeIcon icon={item.icon} className="sidebar-icons-smaller" />
          <h3>{item.text}</h3>
        </div>
      ))}
    </div>
  );
};

export default SecondRowIcons;
