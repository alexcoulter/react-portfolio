import React, {useState} from 'react';
import '../App.css';
import Card from "./Card";
import empDir from "../assets/images/empDir.jpg";
import quarImg from "../assets/images/main.jpg";
import busImg from "../assets/images/businessSS.jpg";
import empTrack from "../assets/images/usage.gif";
import weatherImg from "../assets/images/weatherSs.jpg";
import petImg from "../assets/images/petSs.jpg";
import healthImg from "../assets/images/homepage.png";

function PortfolioContainer() {

  const [index, setIndex] = useState([0]);
  
  // useEffect(() => {
  //   setIndex(0)
  // }, []);

  var projArr = [{
    id: "healtcareProImg", img: healthImg, name: "Healthcare Pro ", description: "Role-based Full Stack application that allows doctors and patients to log in to separate portals and interact with one another in a multitude of ways.", tech: " Node.js, Express, MongoDB, Mongoose, React, Redux, JWT Tokens, Material-UI", projLink: " https://project3-healthcarepro.herokuapp.com/", ghLink: " https://github.com/gwlee244/project3"
  },
    {
    id: "quaranstreamImg", img: quarImg, name: "Quaranstream", description: "Full-stack application that suggests activities to occupy your time during the Coronavirus quarantine and connects you with other users to discover new media.", tech: " Node.js, Express, Mysql, Sequelize, Jquery, Bootstrap Materialize", projLink: "https://quaranstream.herokuapp.com/", ghLink: "https://github.com/alexcoulter/quaranstream/"
  },
  { id: "businessImg", img: busImg, name: "Business Website",  description:"Built this professional, mobile-friendly website from scratch for a real estate attorney in Durham, NC to advertise his services.", tech: "HTML, CSS, Javascript, PHP, Mobile-Friendly Design",  projLink: "https://rcoulterlaw.com", ghLink: "https://rcoulterlaw.com"
},
  { id: "employeeDirectoryImg", img: empDir, name: "Employee Directory", description:"A React App for organizing and displaying a company's  employee information and ordering or filtering this information in multiple ways.", tech: "React, JQuery, Bootstrap, Randomuser.me API, Mobile-Friendly Design", projLink: "https://alexcoulter.github.io/employee-directory/", ghLink: "https://github.com/alexcoulter/employee-directory"
},
  { id: "employeeTracker", img: empTrack, name: "Employee tracker", description:"A Back-End App that functions as a solution for managing a company's employees.  perform CRUD operations on employees, their role, and department", tech: "Node.js, Inquirer, Mysql", projLink: "https://github.com/alexcoulter/employee-tracker", ghLink: "https://github.com/alexcoulter/employee-tracker"
},
  { id: "weatherImg", img: weatherImg, name: "Weather Dashboard", description:"Weather dashboard to check current and future weather forecasts for anywhere in the world.", tech: "HTML, CSS, Bootstrap, Javascript, Jquery, Moment.js, Openweathermap API, Geolocation API", projLink: "https://alexcoulter.github.io/Weather-Dashboard/", ghLink: "https://github.com/alexcoulter/Weather-Dashboard"
},
  { id: "petImg", img: petImg, name: "Pet Adoption App", description:"Search for adoptable dogs and cats in your area and find information as well as maps and directions to find these needy animals.", tech: "HTML, CSS, Javascript, Jquery, Materialize, Petfinder API, TheDog API, TheCat API, Mapquest API", projLink: "https://alexcoulter.github.io/Furry-Friend-Finder/", ghLink: "https://github.com/alexcoulter/Furry-Friend-Finder"}];


  function lastProject() {
    let newIndex = index;
    if (index < 1) {
      newIndex = 6;
      setIndex(newIndex);
    }
    else { 
      newIndex--;
      setIndex(newIndex);
    }
  }

  function nextProject() {
    let newIndex = index;
    if (index === 6) {
      newIndex = 0;
    }
    else { newIndex++ }
    setIndex(newIndex);
  }


  return (
    <div className="container-fluid" id="portfolio">
      <div className="row">
        <div className="col-md-12 main">
          <h2 className="text-center">My Projects</h2>
          <div id="projButton">
        
          </div>
          <Card
            id={projArr[index].id}
            img={projArr[index].img}
            name={projArr[index].name}
            description={projArr[index].description}
            tech={projArr[index].tech}
            projLink={projArr[index].projLink}
            ghLink={projArr[index].ghLink}
            nextProject={nextProject} 
            lastProject={lastProject}/>

        </div>
      </div>
    </div>
  );
}

export default PortfolioContainer;