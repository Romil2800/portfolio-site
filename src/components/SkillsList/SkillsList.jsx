import "./skillsList.scss";

export default function SkillsList({ id, title, active, setSelected }) {
  return (
    <li
       className={active ? "skillList active" : "skillList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}