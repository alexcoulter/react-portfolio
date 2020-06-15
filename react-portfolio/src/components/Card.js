import React from 'react';
import '../App.css';

function Card({ id, img, name, description, tech, projLink, ghLink, lastProject, nextProject }) {
  return (
    <div className="col-md-12 col-sm-12 text-center" id="projDiv">
      <div className="picContainer">
        <div className="picTextTop">
          <p>{name}</p>
        </div>
        <div className="portfolioImg" id={id}>
          <i onClick={lastProject} className="fa fa-arrow-left arrow-left"></i>
          <i onClick={nextProject} className="fa fa-arrow-right arrow-right"></i>
          <img
            src={img} alt={name} className="img-fluid portfolioImg" />
        </div>
        <div className="projectText"><p>{description}<br /><br />
              {tech}</p></div>
        <div className="picTextBottom">
            <a href={projLink} target="_blank" rel="noopener noreferrer">View Project</a>
            <a href={ghLink} target="_blank" rel="noopener noreferrer">Github</a>
          </div>
      </div>
    </div>
  );
}

export default Card;