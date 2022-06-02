import React from "react";

function Box7() {
  return (
    <div className="circle-indicator-box">
      <div className="left">
        <ul>
          <li>
            Excellent: <span className="excellent">60%</span>
          </li>
          <li>
            Good:<span className="good">30%</span>{" "}
          </li>
          <li>
            Bad:<span className="bad">10%</span>{" "}
          </li>

          <li>
            <div className="maintenance-status">
              <p className="maintenance">Maintenance</p>
              <div>
                <div className="yellow-box">
                  <p>30%</p>
                </div>
                <div className="red-box">
                  <p>10%</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="right">
        <img
          src="images/group.png"
          alt="image of graph"
          className="image-indicating-circle-graph"
        />
      </div>
    </div>
  );
}

export default Box7;
