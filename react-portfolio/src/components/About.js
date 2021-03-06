import React, { useEffect } from 'react';
import '../App.css';
import meImg from "../assets/images/image1.jpeg";
import Resume from "../assets/AlexResume.pdf";

function About() {

  useEffect(() => {
    if (window.screen.width > 681) {
      const skills = document.getElementById("skills");
      const skillsHeight = skills.offsetHeight;
      const mePic = document.getElementById("mePic");
      mePic.style.height = `${skillsHeight}px`;
    }
  }
  );

  return (

    <div className="container-fluid" id="aboutSect">
      <div className="row">
        <div className="offset-lg-1 col-lg-10">
          <div className="main" id="about">
            <h2 className="text-center">About Me</h2>
            <div id="picWrapper">
              <div id="picAndTextContainer">
                <img className="me-pic img-fluid" id="mePic" src={meImg} alt="Me" />
                <div className="skills" id="skills">
                  <p>I'm a Full Stack Developer with extensive experience in information technology and responsive web development.  I Attended the University of North Carolina Chapel Hill where I received a BS in Psychology.  Recently, I completed
                  a Certificate in Full Stack Web Development from UNC Chapel Hill where I learned best practices for designing powerful mobile-friendly websites and applications.  I currently work part-time as an IT Technician for a small real-estate business in Chapel Hill.
                  </p>
                </div>
              </div>
              <div className="bioTextContainer">
                <div className="bioText">
                  <h4><b>Technical Skills:</b></h4>
                  <ul>
                    <li><b>Programming Languages:</b> HTML, CSS, Javascript</li>
                    <li><b>Database Management:</b> Mysql, Sequelize MongoDb, Mongoose</li>
                    <li><b>Libraries / Frameworks: </b>jQuery, React.js, Redux,  Express.js, Bootstrap,  Materialize
              </li>
              <li><b>Other Technologies: </b>Node.js, Passport.js, Handlebars, Git, Heroku, JWT Auth, AJAX, IndexedDB API
              </li>
                  </ul>
                  <a href={Resume} target='_blank' rel="noopener noreferrer" className="resumeLink"><button className="btn"
                    id="aboutResumeBtn" type="submit">Download my resume:
                  <i className="fa fa-download resume"></i></button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;