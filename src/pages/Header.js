import React from "react";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <>
      <div className="head-main">
        <div className="head-left">
          <Link className="link" to={"/"}>
            {" "}
            <img className="image-brand-site" src="./images/1.png" alt="" />
          </Link>
        </div>
        <div className="head-middle">
          <ul>
            <li>STATUS</li>
            <li>ANALYSIS</li>
            <li>PREDICTION</li>
            <li>
              <Link className="link" to={"/visualisation"}>
                VISUALISATION
              </Link>
            </li>
          </ul>
        </div>
        <div className="head-right">
          <ul className="icons">
            <li>
              <img className="head-phone" src="./images/headset.png" alt="" />
            </li>
            <li>
              <img className="head-person" src="./images/user.png" alt="" />
            </li>
            <li>
              <img className="head-menu" src="./images/more.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="content">{props.children}</div>
    </>
  );
}

export default Header;
