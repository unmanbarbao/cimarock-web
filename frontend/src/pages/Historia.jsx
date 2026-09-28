import editionsData from "../data/editions.json";
import corporation from "../data/corporation.json";
import TimelineRail from "../components/TimelineRail";
import "./pages.css";

export default function Historia() {
  return (
    <div className="page-historia">
      <header className="page-hero page-hero--ink">
        <div className="container">
          <p className="meta">Patrimonio</p>
          <h1 className="display">Historia</h1>
          <p className="page-hero__lead editorial">
            {corporation.history.headline}
          </p>
          {corporation.history.body.map((p) => (
            <p key={p} className="page-hero__body">
              {p}
            </p>
          ))}
        </div>
      </header>
      <section className="fest-section">
        <div className="container">
          <TimelineRail
            editions={editionsData.editions}
            milestones={editionsData.milestones}
          />
        </div>
      </section>
    </div>
  );
}
