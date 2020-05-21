import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';


function Navbar() {
  return (
    <div>
     
      <nav className="navbar  nav justify-content-center">
      <Link to={"/"} class="link"><p className="nav-link pt-0 pb-0 active" id="aboutLink">Home</p></Link>

        <Link to={"/about/"} class="link"><p className="nav-link pt-0 pb-0" id="aboutLink">About</p></Link>

        <Link to={"/projects/"}class="link"><p className="nav-link pt-0 pb-0" id="portfolioLink">Portfolio</p></Link>

        <Link to={"/contact/"}class="link"><p className="nav-link pt-0 pb-0 lastLink" id="contactLink">Contact</p></Link>
      </nav>
    </div>
  );
}

export default Navbar;