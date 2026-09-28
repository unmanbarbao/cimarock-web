import { Link } from "react-router-dom";
import "./TimelineRail.css";

export default function TimelineRail({ editions, milestones = [] }) {
  const sorted = [...editions, ...milestones].sort((a, b) => b.year - a.year);
  return (
    <ol className="timeline-rail">
      {sorted.map((ed) => (
        <li key={`${ed.year}-${ed.title}`} className="timeline-rail__item">
          <div className="timeline-rail__year display">{ed.year}</div>
          <div className="timeline-rail__card">
            <h3 className="display">{ed.title}</h3>
            <p>{ed.highlight || ed.text}</p>
            {ed.status && (
              <div className="timeline-rail__links">
                {ed.status === "current" ? (
                  <Link to="/festival">Ver edición actual</Link>
                ) : (
                  <Link to={`/memoria/${ed.year}`}>Memoria</Link>
                )}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
