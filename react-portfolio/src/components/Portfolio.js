import React from 'react';
import '../App.css';

function Portfolio() {

  return (

    <div>
      <div class="row">
        <div class="col-md-6 col-sm-12 text-center">
          <div class="picContainer">
            <div class="picTextTop">
              <p>Quaranstream Full-Stack App</p>
            </div>
            <div class="portfolioImg" id="quaranstreamImg">
              <a href="https://limitless-chamber-20765.herokuapp.com/" target="_blank"><img
                src="assets/images/main.jpg" alt="Quaranstream App" class="img-fluid portfolioImg" /></a>
            </div>
            <div class="picTextBottom">
              <a href="https://limitless-chamber-20765.herokuapp.com/" target="_blank">View Project</a>
              <a href="https://github.com/alexcoulter/quaranstream/" target="_blank">Github</a>
            </div>
          </div>

        </div>
        <div class="col-md-6 col-sm-12 text-center" id="projDiv">
          <div class="picContainer">
            <div class="portfolioImg" id="businessImg">
              <a href="https://rcoulterlaw.com" target="_blank"><img src="assets/images/businessSS.jpg" alt="world"
                class="img-fluid portfolioImg" /></a>
            </div>
            <div class="picTextTop text-white">
              <p>Business Website</p>
            </div>
            <div class="picTextBottom">
              <a href="https://rcoulterlaw.com" target="_blank">View Project</a>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 col-sm-12 text-center">
          <div class="picContainer">
            <div class="portfolioImg" id="quizImg">
              <a href="https://alexcoulter.github.io/Code-Quiz/" target="_blank"><img src="assets/images/quizSs.jpg"
                alt="Coding Quiz" class="img-fluid portfolioImg" /></a>
            </div>
            <div class="picTextTop text-white">
              <p>Coding Quiz</p>
            </div>
            <div class="picTextBottom">
              <a href="https://alexcoulter.github.io/Code-Quiz/" target="_blank">View Project</a>
              <a href="https://github.com/alexcoulter/Code-Quiz" target="_blank">Github</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 text-center">
          <div class="picContainer">
            <div class="portfolioImg" id="workdayImg">
              <a href="https://github.com/alexcoulter/employee-tracker" target="_blank"><img
                src="assets/images/usage.gif" alt="Planner" class="img-fluid portfolioImg" /></a>
            </div>
            <div class="picTextTop text-white">
              <p>Employee tracker</p>
            </div>
            <div class="picTextBottom">
              <a href="https://github.com/alexcoulter/employee-tracker" target="_blank">Github</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-12 text-center">
          <div class="picContainer">
            <div class="portfolioImg" id="weatherImg">
              <a href="https://alexcoulter.github.io/Weather-Dashboard/" target="_blank"><img
                src="assets/images/weatherSs.jpg" alt="sun and clouds" class="img-fluid portfolioImg" /></a>
            </div>
            <div class="picTextTop text-white">
              <p>Weather Dashboard</p>
            </div>
            <div class="picTextBottom">
              <a href="https://alexcoulter.github.io/Weather-Dashboard/" target="_blank">View Project</a>
              <a href="https://github.com/alexcoulter/Weather-Dashboard" target="_blank">Github</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 text-center">
          <div class="picContainer">
            <div class="portfolioImg" id="petImg">
              <a href="https://alexcoulter.github.io/Pet-Adoption-App/" target="_blank"><img
                src="assets/images/petSs.jpg" alt="dog and cat" class="img-fluid portfolioImg" /></a>
            </div>
            <div class="picTextTop text-white">
              <p>Pet Adoption App</p>
            </div>
            <div class="picTextBottom">
              <a href="https://alexcoulter.github.io/Pet-Adoption-App/" target="_blank">View Project</a>
              <a href="https://github.com/alexcoulter/Pet-Adoption-App" target="_blank">Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Portfolio;
