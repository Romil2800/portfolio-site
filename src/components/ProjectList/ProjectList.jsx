import "./projectList.scss";
import Project from "../projects/Projects";
import { ProjectLists } from "../../projectsList";

const ProjectList = () => {
  return (
    <div className="pl" id="projects">
      <div className="pl-title">
        <h1>Projects</h1>
      </div>
      <div className="listContainer">
      <div className="pl-list">
        {ProjectLists.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} name={item.name} />
        ))}
      </div>
      </div>      
    </div>
  );
};

export default ProjectList;