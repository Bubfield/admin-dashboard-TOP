import React from "react";
import Grid from "./MainContentComponents/Grid";
import GridHeaders from "./MainContentComponents/GridHeaders";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="bottom-row">
        <GridHeaders />
        <Grid />
      </div>
    </div>
  );
};

export default MainContent;
