import React from "react";
import {
  faSpaghettiMonsterFlying,
  faComment,
  faGasPump,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThirdRowIcons = () => {
  let thirdRowIcons = [
    {
      icon: faSpaghettiMonsterFlying,
      text: "Settings",
    },
    {
      icon: faGasPump,
      text: "Support",
    },
    {
      icon: faComment,
      text: "Privacy",
    },
  ];

  return (
    <div>
      {thirdRowIcons.map((item) => (
        <div className="sidebar-icons-flex">
          <FontAwesomeIcon icon={item.icon} className="sidebar-icons-smaller" />
          <h3>{item.text}</h3>
        </div>
      ))}
    </div>
  );
};

export default ThirdRowIcons;
