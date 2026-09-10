import { Link } from "react-router-dom";
import "./TimelineRail.css";

export default function TimelineRail({ editions }) {
  const sorted = [...editions].sort((a, b) => b.year - a.year);
  return (
    <ol className="timeline-rail">
      {sorted.map((ed) => (
        <li key={ed.year} className="timeline-rail__item">
          <div className="timeline-rail__year display">{ed.year}</div>
          <div className="timeline-rail__card">
            <h3 className="display">{ed.title}</h3>
            <p>{ed.highlight}</p>
            <div className="timeline-rail__links">
              {ed.status === "upcoming" ? (
                <Link to="/festival">Ver edición actual</Link>
              ) : (
                <>
                  <Link to={`/memoria/${ed.year}`}>Memoria</Link>
                  <Link to="/historia">Detalle</Link>
                </>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
