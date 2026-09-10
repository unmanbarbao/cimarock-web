import artists from "../data/artists.json";
import editionsData from "../data/editions.json";
import { PhotoFrame, SectionHead, Button } from "../components/ui";
import ArtistStrip from "../components/ArtistStrip";
import ProgramDay from "../components/ProgramDay";
import "./pages.css";

export default function Festival() {
  const edition = editionsData.editions.find(
    (e) => e.year === editionsData.currentYear
  );
  const lineup = artists.filter((a) => edition.artistSlugs.includes(a.slug));

  return (
    <div className="page-festival">
      <header className="fest-hero texture-brick">
        <div className="container fest-hero__grid">
          <PhotoFrame
            label={edition.poster.label}
            tone={edition.poster.tone}
            src={edition.poster.src}
            aspect="4/5"
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
              <Button href="#programacion" variant="primary">
                Programación
              </Button>
              <Button to="/convocatorias" variant="magenta">
                Quiero tocar
              </Button>
            </div>
          </div>
        </div>
      </header>

      <ArtistStrip artists={lineup} eyebrow="Line-up" title="Artistas" />

      <section id="programacion" className="fest-section">
        <div className="container">
          <SectionHead eyebrow="Agenda" title="Programación" />
          <ProgramDay stages={edition.stages} />
        </div>
      </section>

      <section className="fest-place">
        <div className="container fest-place__grid">
          <div>
            <SectionHead eyebrow="Lugar" title="Dónde suena la cima" light>
              <p>
                {edition.venue}. Un punto de encuentro para la ciudad y para
                quienes llegan desde el departamento.
              </p>
            </SectionHead>
            <ul className="fest-info">
              {edition.attendeeInfo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="fest-map" aria-label="Mapa del venue">
            <p className="meta">Mapa</p>
            <p className="display">YOPAL</p>
            <p>Parque La Esperanza · pin de referencia (mockup)</p>
          </div>
        </div>
      </section>

      <section className="fest-section">
        <div className="container">
          <SectionHead eyebrow="FAQ" title="Preguntas frecuentes" />
          <div className="faq">
            {edition.faq.map((item) => (
              <details key={item.q} className="faq__item">
                <summary className="display">{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
