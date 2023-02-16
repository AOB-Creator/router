import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
function Navbar() {
  let [active, SetActive] = useState("a");

  return (
    <div className="navbar">
      <div className="container">
        <div className="nav">
          <div className="logo">LogoBakery</div>
          <ul>
            <li
              className={active === "a" ? "active" : ""}
              onClick={() => {
                SetActive("a");
              }}
            >
              <Link to={"/"}>Home</Link>
            </li>
            <li
              className={active === "b" ? "active" : ""}
              onClick={() => {
                SetActive("b");
              }}
            >
              <Link to={"/blogs"}>Blogs</Link>
            </li>
            <li
              className={active === "c" ? "active" : ""}
              onClick={() => {
                SetActive("c");
              }}
            >
              <Link to={"/services"}>Services</Link>
            </li>
            <li
              className={active === "d" ? "active" : ""}
              onClick={() => {
                SetActive("d");
              }}
            >
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
