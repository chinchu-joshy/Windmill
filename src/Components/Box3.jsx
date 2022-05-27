import React from "react";
import { Row, Col, Container } from "react-bootstrap";
function Box3() {
  return (
    <div className="detail-board">
      <div className="card-1">
        <ul className="sun">
          <li>
            <div>
              <p>
              <img className="image-brand" src="./images/sun.png" alt=""  />
              </p>
              <p className="uv-index">UV INDEX</p>
            </div>
          </li>
          <li>
              <div> <p className="value-number">6</p></div>
           
          </li>
          <li>
            <div>
              <h5 className="status-uv">High</h5>
              <div className="status-bar">
                <div className="inside"></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="card-2">
      <ul className="rain">
          <li>
            <div>
              <p>
              <img className="image-brand" src="./images/rain.png" alt=""  />
              </p>
              <p className="rain">RAIN FALL</p>
            </div>
          </li>
          <li>
              <div> <p className="rain-value">7MM in last 24 hour</p></div>
           
          </li>
          <li>
            <div>
             
              <p className="rain-prediction">8mm expected in next 24 hour</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="card-3">
        <ul>
        <li>
            <div>
              <p>
              <img className="image-brand" src="./images/humidity.png" alt=""  />
              </p>
              <p className="humidity">HUMIDITY</p>
            </div>
          </li>
          <li>
              <div> <p className="humidity-value">81%</p></div>
           
          </li>
          <li>
            <div>
             
              <p className="rain-prediction">The dev point is 25° right now</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="card-4">
        <ul>
        <li>
            <div>
              <p>
              <img className="image-brand" src="./images/visibility.svg" alt=""  />
              </p>
              <p className="visibility">VISIBILITY</p>
            </div>
          </li>
          <li>
              <div> <p className="visibility-value">6KM</p></div>
           
          </li>
          <li>
            <div>
             
              <p className="rain-prediction">Light haze is affecting  visibility</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Box3;
