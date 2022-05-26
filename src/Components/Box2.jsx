import React from "react";
import { Card } from "react-bootstrap";
function Box2() {
  return (
    <>
      <div className="card-top">
        {" "}
        <div className="title-card">
          <ul>
            <li>Temperature</li>
            <li>
            <div className="ll">
            <div className="yy"></div>
          </div> 
            </li>
            <li>Pressure</li>
            <li>Wind speed</li>
          </ul>
        </div>
        <div className="progress-bar">
          <div className="main-bar">
            <div className="inside"></div>
          </div>
          <div className="main-bar">
            <div className="inside"></div>
          </div>
          <div className="main-bar">
            <div className="inside"></div>
          </div>
        </div>
        <div className="values">
          <ul>
            <li>42 °C</li>
            <li>1003 hpa</li>
            <li>80km/hr</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Box2;
