import { Link } from "react-router-dom";
import { PhotoFrame, Button } from "./ui";
import "./EditionCard.css";

export default function EditionCard({ edition, featured = false }) {
  return (
    <article className={`edition-card ${featured ? "edition-card--featured" : ""}`}>
      <PhotoFrame
        label={edition.poster.label}
        tone={edition.poster.tone}
        src={edition.poster.src}
        aspect={featured ? "4/5" : "3/4"}
        className="edition-card__poster"
      />
      <div className="edition-card__body">
        <p className="meta">
          {edition.status === "upcoming" ? "Próxima edición" : "Archivo"} ·{" "}
          {edition.year}
        </p>
        <h3 className="display">{edition.title}</h3>
        <p>
          {edition.dates}
          {edition.venue ? ` · ${edition.venue}` : ""}
        </p>
        {edition.highlight && <p className="edition-card__hl">{edition.highlight}</p>}
        <Button
          to={edition.status === "upcoming" ? "/festival" : `/memoria/${edition.year}`}
          variant={featured ? "primary" : "ghost"}
        >
          {edition.status === "upcoming" ? "Ver edición" : "Ver memoria"}
        </Button>
      </div>
    </article>
  );
}

export function EditionTeaser({ edition }) {
  return (
    <section className="edition-teaser">
      <div className="container edition-teaser__grid">
        <PhotoFrame
          label={edition.poster.label}
          tone={edition.poster.tone}
          src={edition.poster.src}
          aspect="3/4"
        />
        <div>
          <p className="meta">Próxima edición</p>
          <h2 className="display edition-teaser__title">{edition.title}</h2>
          <p className="edition-teaser__meta">
            {edition.dates} · {edition.venue}
          </p>
          <p className="editorial edition-teaser__tag">{edition.tagline}</p>
          <div className="edition-teaser__ctas">
            <Button to="/festival" variant="primary">
              Ver cartel y programación
            </Button>
            <Button to="/convocatorias" variant="magenta">
              Quiero tocar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
