import artists from "../data/artists.json";
import SceneGrid from "../components/SceneGrid";
import { SectionHead } from "../components/ui";
import "./pages.css";

export default function Escena() {
  return (
    <div className="page-escena">
      <header className="page-hero page-hero--ink">
        <div className="container">
          <p className="meta">Directorio</p>
          <h1 className="display">La escena</h1>
          <p className="page-hero__lead editorial">
            CimaRock no solamente contrata artistas: ayuda a construir una
            escena. Este directorio es memoria viva y plataforma.
          </p>
        </div>
      </header>
      <section className="fest-section">
        <div className="container">
          <SectionHead
            eyebrow="Bandas y proyectos"
            title="Territorio sonoro"
          />
          <SceneGrid artists={artists} />
        </div>
      </section>
    </div>
  );
}
