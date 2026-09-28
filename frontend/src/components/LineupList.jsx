import { Link } from "react-router-dom";
import "./LineupList.css";

const ROLE_LABELS = {
  headliner: "Cabeza de cartel",
  invitado: "Artista invitado",
};

export default function LineupList({ lineup }) {
  return (
    <ul className="lineup-list">
      {lineup.map((act) => (
        <li
          key={act.name}
          className={`lineup-list__item ${act.role ? `lineup-list__item--${act.role}` : ""}`}
        >
          {act.slug ? (
            <Link to={`/escena/${act.slug}`} className="display">
              {act.name}
            </Link>
          ) : (
            <span className="display">{act.name}</span>
          )}
          {act.role && <span className="meta">{ROLE_LABELS[act.role]}</span>}
        </li>
      ))}
    </ul>
  );
}
