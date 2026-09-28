import artists from "../data/artists.json";
import editionsData from "../data/editions.json";
import corporation from "../data/corporation.json";
import { PhotoFrame, SectionHead, Button } from "../components/ui";
import ArtistStrip from "../components/ArtistStrip";
import LineupList from "../components/LineupList";
import "./pages.css";

export default function Festival() {
  const edition = editionsData.editions.find(
    (e) => e.year === editionsData.currentYear
  );
  const slugs = edition.lineup.map((a) => a.slug).filter(Boolean);
  const localArtists = artists.filter((a) => slugs.includes(a.slug));
  const festival = corporation.activities.find(
    (a) => a.title === "Festival Cimarock"
  );

  return (
    <div className="page-festival">
      <header className="fest-hero texture-brick">
        <div className="container fest-hero__grid">
          <PhotoFrame
            label={edition.poster.label}
            src={edition.poster.src}
            aspect="3/4"
            className="fest-hero__poster"
          />
          <div className="fest-hero__copy">
            <p className="meta">Edición actual</p>
            <h1 className="display">{edition.title}</h1>
            <p className="fest-hero__meta">
              {edition.dates}
              <br />
              {edition.venue}
            </p>
            <p className="editorial fest-hero__tag">{edition.tagline}</p>
            <div className="fest-hero__ctas">
              <Button href="#cartel" variant="primary">
                Cartel
              </Button>
              <Button to="/memoria" variant="magenta">
                Ediciones anteriores
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section id="cartel" className="fest-section">
        <div className="container">
          <SectionHead eyebrow="Line-up" title="Cartel" />
          <LineupList lineup={edition.lineup} />
        </div>
      </section>

      {localArtists.length > 0 && (
        <ArtistStrip
          artists={localArtists}
          eyebrow="Desde la escena local"
          title="Artistas de Casanare"
        />
      )}

      <section className="fest-place">
        <div className="container fest-place__grid">
          <div>
            <SectionHead eyebrow="El festival" title={festival.title} light>
              <p>{festival.text}</p>
            </SectionHead>
          </div>
          <div className="fest-map" aria-label="Lugar del festival">
            <p className="meta">Lugar</p>
            <p className="display">YOPAL</p>
            <p>{edition.venue}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
