import React from "react";
import Threescene from "../threejs/Threescene";
import Header from "./Header";
import { Container, Row, Col, Button } from "react-bootstrap";
import Box2 from "../Components/Box2";
import Box3 from "../Components/Box3";
import Box4 from "../Components/Box4";
import Box6 from "../Components/Box6";
import Box7 from "../Components/Box7";

function Home() {
  return (
    <Header>
     
        <div className="outer-container">
          <div className="left-section">
            <div className="date-box">
              <div className="date">
                 
            <h1>01</h1>
                <h4> June 2022 wednesday</h4>
              </div>
              <div className="status">
                  <p>Weather status</p>
           
              </div>
            </div>
<div className="indicator">
    <Box2/>
    <Box3/>
</div>

          </div>
          <div className="middle-section">
          <div className="selection-tab">
              
              <div className="data">
                  <p>Turbins machine status</p>
           
              </div>
            </div>
            <Box4/>
          </div>
          <div className="right-section">
            <Box6/>
           
            <Box7/>
          </div>
        </div>
        <div id="three">

        <Threescene />
        </div>
    
    </Header>
  );
}

export default Home;
