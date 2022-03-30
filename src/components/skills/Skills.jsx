import { useEffect, useState } from "react";
import PortfolioList from "../SkillsList/SkillsList";
import "./skills.scss";

import {
  programmingSkills,
  webTechSkills,
  mobileDevSkills,
  databaseSkills,
  otherSkills,
} from "../../data";

export default function Skills() {
  const [selected, setSelected] = useState("programming");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "programming",
      title: "Programming",
    },
    {
      id: "web",
      title: "Web Tech",
    },
    {
      id: "mobile",
      title: "Mobile Development",
    },
    {
      id: "database",
      title: "Database",
    },
    {
      id: "other",
      title: "Others",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "programming":
        setData(programmingSkills);
        break;
      case "web":
        setData(webTechSkills);
        break;
      case "mobile":
        setData(mobileDevSkills);
        break;
      case "database":
        setData(databaseSkills);
        break;
      case "other":
        setData(otherSkills);
        break;
      default:
        setData(programmingSkills);
    }
  }, [selected]);

  return (
 <div className="skills" id="skills">
      <h1>Skills</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}