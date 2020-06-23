import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';


function Navbar() {
  return (
    <div>
     <nav className="navbar navbar-expand-md navbar-dark">
  <h4 className="navbar-brand">Alex Coulter</h4>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
      <Link to={"/"} className="link"><p className="nav-link pt-0 pb-0" id="aboutLink" data-toggle="collapse" data-target=".navbar-collapse.show">Home</p></Link>
      </li> 
      <li className="nav-item">
      <Link to={"/about/"} className="link"><p className="nav-link pt-0 pb-0" id="aboutLink" data-toggle="collapse" data-target=".navbar-collapse.show">About</p></Link>
      </li>
      <li className="nav-item">
      <Link to={"/projects/"}className="link"><p className="nav-link pt-0 pb-0" id="portfolioLink" data-toggle="collapse" data-target=".navbar-collapse.show">Portfolio</p></Link>
      </li>
      <li className="nav-item">
      <Link to={"/contact/"}className="link"><p className="nav-link pt-0 pb-0 lastLink" id="contactLink" data-toggle="collapse" data-target=".navbar-collapse.show">Contact</p></Link>
      </li>    
    </ul>
  </div>  
</nav>


      {/* <nav className="navbar  nav justify-content-center">
      <Link to={"/"} className="link"><p className="nav-link pt-0 pb-0 active" id="aboutLink">Home</p></Link>

        <Link to={"/about/"} className="link"><p className="nav-link pt-0 pb-0" id="aboutLink">About</p></Link>

        <Link to={"/projects/"}className="link"><p className="nav-link pt-0 pb-0" id="portfolioLink">Portfolio</p></Link>

        <Link to={"/contact/"}className="link"><p className="nav-link pt-0 pb-0 lastLink" id="contactLink">Contact</p></Link>
      </nav> */}
    </div>
  );
}

export default Navbar;