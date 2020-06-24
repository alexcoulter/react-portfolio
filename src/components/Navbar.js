import React from "react";
import { NavLink } from 'react-router-dom';
import '../App.css';


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark">
        <h4 className="navbar-brand my-name">Alex Coulter</h4>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={"/"} className="link" exact activeClassName="active"><p className="nav-link pt-0 pb-0" id="aboutLink" data-toggle="collapse" data-target=".navbar-collapse.show">Home</p></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/about/"} className="link" activeClassName="active"><p className="nav-link pt-0 pb-0" id="aboutLink" data-toggle="collapse" data-target=".navbar-collapse.show">About</p></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/projects/"} className="link" activeClassName="active"><p className="nav-link pt-0 pb-0" id="portfolioLink" data-toggle="collapse" data-target=".navbar-collapse.show">Portfolio</p></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/contact/"} className="link" activeClassName="active"><p className="nav-link pt-0 pb-0 lastLink" id="contactLink" data-toggle="collapse" data-target=".navbar-collapse.show">Contact</p></NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;