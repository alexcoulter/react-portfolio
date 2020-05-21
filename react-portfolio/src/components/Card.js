import React from 'react';
import '../App.css';

function Card({id, img, name, description, tech, projLink, ghLink, lastProject, nextProject}) {
  return(
    <div class="col-md-12 col-sm-12 text-center" id="projDiv">
    <div class="picContainer">
      <div class="picTextTop">
        <p>{name}</p>
      </div>
      <div class="portfolioImg" id={id}>
      <i onClick={lastProject} class="fa fa-arrow-left arrow-left"></i>
      <i onClick={nextProject} class="fa fa-arrow-right arrow-right"></i>
        <a href={projLink} target="_blank" rel="noopener noreferrer"><img
          src={img} alt={name} class="img-fluid portfolioImg" /><div class="projectText"><p>{description}<br /><br />
         {tech}</p></div>
          <div class="picTextBottom">
        <a href={projLink} target="_blank" rel="noopener noreferrer">View Project</a>
        <a href={ghLink} target="_blank" rel="noopener noreferrer">Github</a>
      </div></a>
      </div>
    </div>
  </div>
  );
}

export default Card;