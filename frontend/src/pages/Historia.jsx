import editionsData from "../data/editions.json";
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
            Desde 2019, CimaRock convierte trayectoria en memoria colectiva. Cada
            edición es un capítulo del rock que nace en el llano.
          </p>
        </div>
      </header>
      <section className="fest-section">
        <div className="container">
          <TimelineRail editions={editionsData.editions} />
        </div>
      </section>
    </div>
  );
}
