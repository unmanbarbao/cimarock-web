import { Link } from "react-router-dom";
import { PhotoFrame } from "./ui";
import "./ArtistStrip.css";

export default function ArtistStrip({ artists, title, eyebrow }) {
  return (
    <section className="artist-strip">
      <div className="container">
        {(eyebrow || title) && (
          <header className="artist-strip__head">
            {eyebrow && <p className="meta">{eyebrow}</p>}
            {title && <h2 className="display">{title}</h2>}
          </header>
        )}
      </div>
      <div className="artist-strip__row">
        {artists.map((artist) => (
          <Link
            key={artist.slug}
            to={`/escena/${artist.slug}`}
            className="artist-strip__item"
          >
            <PhotoFrame
              label={artist.photo.label}
              tone={artist.photo.tone}
              src={artist.photo.src}
              aspect="3/4"
            />
            <div className="artist-strip__meta">
              <h3 className="display">{artist.name}</h3>
              <p>
                {artist.genre} · {artist.city}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
