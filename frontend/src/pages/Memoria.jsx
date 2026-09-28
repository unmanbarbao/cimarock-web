import { Link } from "react-router-dom";
import editionsData from "../data/editions.json";
import { PhotoFrame, Button } from "../components/ui";
import "./pages.css";

export default function Memoria() {
  const archives = editionsData.editions.filter((e) => e.status === "archive");

  return (
    <div className="page-memoria">
      <header className="page-hero page-hero--ink">
        <div className="container">
          <p className="meta">Archivo vivo</p>
          <h1 className="display">Memoria</h1>
          <p className="page-hero__lead editorial">
            Cada edición del Festival Cimarock es un capítulo de la escena
            alternativa de Casanare: sus afiches, sus carteles y sus escenarios.
          </p>
        </div>
      </header>
      <section className="fest-section">
        <div className="container memoria-index">
          {archives.map((ed) => (
            <article key={ed.year} className="memoria-index__item">
              <PhotoFrame
                label={ed.poster.label}
                src={ed.poster.src}
                aspect="3/4"
              />
              <div>
                <p className="meta">
                  {ed.dates} · {ed.venue}
                </p>
                <h2 className="display">Así se vivió {ed.title}</h2>
                <p>{ed.highlight}</p>
                <Button to={`/memoria/${ed.year}`} variant="ghost">
                  Abrir memoria
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <div className="container" style={{ paddingBottom: "3rem" }}>
        <Link className="meta" to="/historia">
          Ver línea de tiempo completa →
        </Link>
      </div>
    </div>
  );
}
