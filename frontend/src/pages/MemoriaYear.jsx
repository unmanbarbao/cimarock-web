import { Link, Navigate, useParams } from "react-router-dom";
import artists from "../data/artists.json";
import editionsData from "../data/editions.json";
import ArtistStrip from "../components/ArtistStrip";
import LineupList from "../components/LineupList";
import { Button, PhotoFrame, SectionHead } from "../components/ui";
import "./pages.css";

export default function MemoriaYear() {
  const { year } = useParams();
  const edition = editionsData.editions.find((e) => e.year === Number(year));

  if (!edition) return <Navigate to="/memoria" replace />;

  const slugs = edition.lineup.map((a) => a.slug).filter(Boolean);
  const localArtists = artists.filter((a) => slugs.includes(a.slug));

  return (
    <div className="page-memoria-year">
      <header className="page-hero page-hero--ink scrape">
        <div className="container">
          <p className="meta">Memoria · {edition.year}</p>
          <h1 className="display">Así se vivió {edition.title}</h1>
          <p className="page-hero__lead editorial">{edition.highlight}</p>
          <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Button to="/memoria" variant="ghost">
              Todas las memorias
            </Button>
            <Button to="/historia" variant="magenta">
              Historia
            </Button>
          </div>
        </div>
      </header>

      <section className="fest-section">
        <div className="container memoria-index__item">
          <PhotoFrame
            label={edition.poster.label}
            src={edition.poster.src}
            aspect="3/4"
          />
          <div>
            <p className="meta">
              {edition.dates} · {edition.venue}
            </p>
            <SectionHead eyebrow="Line-up" title="Cartel" />
            <LineupList lineup={edition.lineup} />
            {edition.allies?.length > 0 && (
              <p className="meta" style={{ marginTop: "1.5rem" }}>
                Con el apoyo de {edition.allies.join(" · ")}
              </p>
            )}
          </div>
        </div>
      </section>

      {localArtists.length > 0 && (
        <ArtistStrip
          artists={localArtists}
          eyebrow="Escena local en el cartel"
          title="Artistas de Casanare"
        />
      )}

      <section className="home-closer texture-brick">
        <div className="container">
          <p className="editorial home-closer__quote">
            El archivo no es nostalgia: es prueba de que la escena existe.
          </p>
          <Link to="/escena" className="meta">
            Volver a la escena →
          </Link>
        </div>
      </section>
    </div>
  );
}
