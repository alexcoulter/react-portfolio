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
                  <p>Dedicated Software Engineer with a passion for problem solving and a strong drive to learn. AWS certified developer with over 3 years of hands-on experience at a leading tech company, seeking new challenges to apply my skills and expertise.
                  </p>
                </div>
              </div>
              <div className="bioTextContainer">
                <div className="bioText">
                  <h4><b>Technical Skills:</b></h4>
                  <ul>
                    <li><b>Programming Languages:</b>  Java, C#, HTML, CSS, JavaScript, Node.js</li>
                    <li><b>Database Management:</b> Oracle, MySQL, Cassandra, MongoDB,  Amazon S3</li>
                    <li><b>Libraries / Frameworks: </b> Spring, Spring Boot, React, jQuery, Express, Maven, Cloud Foundry
              </li>
              <li><b>Other Technologies: </b>Passport.js, Handlebars, Git, Heroku, JWT Auth, AJAX, IndexedDB API
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
