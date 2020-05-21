import React from 'react';
import '../App.css';
import meImg from "../assets/images/image1.jpeg";

function About() {

  return (

    <div className="container-fluid" id="aboutSect">
      <div className="row">
        <div className="offset-lg-1 col-lg-10  col-xs-12">
          <div className="main" id="about">
            <h2 className="text-center">About Me</h2>
              <div className="bioText">
                <p> I was born and raised in Durham, NC and went to university down the road at UNC Chapel Hill where I received a BS in Psychology. Currently, I'm completing
              a Certificate in Full Stack Web Development from UNC Chapel Hill and learning best practices for designing mobile-friendly websites and applications.</p>
                <p>I currently am the manager on duty and bartender at a restaraunt in downtown Durham and work part-time as an
                IT Technician for a small business in Chapel Hill. In my spare time I enjoy playing soccer and disc golf with friends, going to the gym, and playing
                the guitar.
            </p></div>
              <img className="me-pic img-fluid float-left" src = {meImg} alt="Me" />
                <div className="skills">
                  <h4><b>Technical Skills:</b></h4>
                  <ul>
                    <li><b>Programming Languages:</b> HTML, CSS, Javascript, Node.js</li>
                    <li><b>Database Management:</b> Mysql, MongoDb</li>
                    <li><b>Libraries / Frameworks: </b>jQuery, Bootstrap, Express, Sequelize,  Materialize, Mongoose, React
              </li>
                  </ul>
                </div>
              </div>
             </div>
          </div>
        </div>
  );
}

export default About;