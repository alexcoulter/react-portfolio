import React from 'react';
import '../App.css';

 function Header() {

  return(
    <div id="home">
    <header className="header">
    <h1 className="text-center name">Alex Coulter</h1>
  </header>
  
    <p className="text-center shortBio">I'm a <b>Full Stack Developer</b> from <i>Durham, NC</i> with extensive experience in responsive web, database, and API development.</p>
    <div className="social-links text-center soc-links-top">
      <span><a href="https://github.com/alexcoulter"><i className="fa fa-github fa-3x"></i></a></span>
      <span><a href="https://www.linkedin.com/in/alex-coulter/"><i className="fa fa-linkedin fa-2x"></i></a></span>
    </div>
  </div>
  );
 }

export default Header;

