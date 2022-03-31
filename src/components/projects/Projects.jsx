import "./projects.scss"

export default function Projects({img,link,name}) {
  return (
   <div className="p">
      
      <h2 className="project_title">{name }</h2>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
}