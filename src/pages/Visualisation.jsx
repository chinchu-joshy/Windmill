import React from "react";
import ThreeVisualisation from "../threejs/ThreeVisualisation";

import Header from "./Header";

function Visualisation() {
  return (
    <Header>
      <div className="main-visualisation">
        <div className="left-visualisation"></div>
        <div className="middle-visualistion">
          <ThreeVisualisation />
        </div>
        <div className="right-visualistion"></div>
      </div>
    </Header>
  );
}

export default Visualisation;
