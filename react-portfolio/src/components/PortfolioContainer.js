import React, {useState} from 'react';
import '../App.css';
import Card from "./Card";
import empDir from "../assets/images/empDir.jpg";

function PortfolioContainer() {

  const [index, setIndex] = useState([0]);
  
  // useEffect(() => {
  //   setIndex(0)
  // }, []);

  var projArr = [{
    id: "quaranstreamImg", img: "../assets/images/main.jpg", name: "Quaranstream Full-Stack App", description: "This full-stack application supplies users with activities to occupy their time during the Coronavirus quarantine and connects you with other users to view media they are interested in.", tech: " Node.js, Express, Mysql, Sequelize, Jquery, Bootstrap Materialize", projLink: "https://quaranstream.herokuapp.com/", ghLink: "https://github.com/alexcoulter/quaranstream/"
  },
  { id: "businessImg", img: "../assets/images/businessSS.jpg", name: "Business Website",  description:"Built this professional website from scratch for a real estate attorney in Durham, NC", tech: "HTML, CSS, Javascript, PHP, Mobile-Friendly Design",  projLink: "https://rcoulterlaw.com", ghLink: "https://rcoulterlaw.com"
},
  { id: "employeeDirectoryImg", img: empDir, name: "Employee Directory", description:"A React App for showing employees' information and ordering or filtering this information in multiple ways.", tech: "React, JQuery, Bootstrap, Randomuser.me API, Mobile-Friendly Design", projLink: "https://alexcoulter.github.io/employee-directory/", ghLink: "https://github.com/alexcoulter/employee-directory"
},
  { id: "employeeTracker", img: "../assets/images/usage.gif", name: "Employee tracker", description:"A Back-End App that functions as a solution for managing a company's employees.  perform CRUD operations on employees, their role, department, and salary", tech: "Node.js, Inquirer, Mysql", projLink: "https://github.com/alexcoulter/employee-tracker", ghLink: "https://github.com/alexcoulter/employee-tracker"
},
  { id: "weatherImg", img: "../assets/images/weatherSs.jpg", name: "Weather Dashboard", description:"Weather dashboard to check current and future weather forecasts for anywhere in the world.", tech: "HTML, CSS, Bootstrap, Javascript, Jquery, Moment.js, Openweathermap API, Geolocation API", projLink: "https://alexcoulter.github.io/Weather-Dashboard/", ghLink: "https://github.com/alexcoulter/Weather-Dashboard"
},
  { id: "petImg", img: "../assets/images/petSs.jpg", name: "Pet Adoption App", description:"Search for adoptable dogs and cats in your area and find information as well as maps and directions to find these needy animals.", tech: "HTML, CSS, Javascript, Jquery, Materialize, Petfinder API, TheDog API, TheCat API, Mapquest API", projLink: "https://alexcoulter.github.io/Furry-Friend-Finder/", ghLink: "https://github.com/alexcoulter/Furry-Friend-Finder"}];


  function lastProject() {
    let newIndex = index;
    if (index < 1) {
      newIndex = 5;
      setIndex(newIndex);
    }
    else { 
      newIndex--;
      setIndex(newIndex);
    }
  }

  function nextProject() {
    let newIndex = index;
    if (index === 5) {
      newIndex = 0;
    }
    else { newIndex++ }
    setIndex(newIndex);
  }


  return (
    <div class="container-fluid" id="portfolio">
      <div class="row">
        <div class="col-md-12 main">
          <h2 class="text-center">My Projects</h2>
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