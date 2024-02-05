import PropTypes from "prop-types";
import React from "react";
import './Navbar.css'
export default function Navbar(props) {
  return (
    <>
      <nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} text-bg-${props.mode}`} id="navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Text-Manipulation
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#footer">
                  Contact
                </a>
              </li>   
            </ul>
            <div className="mode-button">
              <button className={`btn btn-primary text-bg-${props.mode}`} onClick={props.toggleMode}>{props.mode==='light'?'Dark':'Light'} Mode</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.PropsTypes = { navname: PropTypes.string.isRequired };
Navbar.defaultProps = {
  navname: "Ram Ram",
};
