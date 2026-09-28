import { Link, useParams } from "react-router-dom";
import artists from "../data/artists.json";
import editionsData from "../data/editions.json";
import { PhotoFrame, SectionHead } from "../components/ui";
import ArtistStrip from "../components/ArtistStrip";
import "./pages.css";

export default function Artista() {
  const { slug } = useParams();
  const artist = artists.find((a) => a.slug === slug) || artists[0];
  const related = artists.filter((a) => a.slug !== artist.slug).slice(0, 5);

  return (
    <div className="page-artista">
      <header className="artista-hero">
        <div className="container artista-hero__grid">
          <PhotoFrame
            label={artist.photo.label}
            src={artist.photo.src}
            aspect="4/5"
          />
          <div>
            <p className="meta">
              {artist.genre} · {artist.city}
            </p>
            <h1 className="display artista-hero__name">{artist.name}</h1>
            <p className="artista-hero__bio">{artist.bio}</p>
          </div>
        </div>
      </header>

      {artist.editions.length > 0 && (
        <section className="fest-section">
          <div className="container">
            <SectionHead eyebrow="Trayectoria" title="En el Festival Cimarock" />
            <ul className="artista-editions">
              {artist.editions.map((year) => (
                <li key={year}>
                  <Link
                    to={
                      year === editionsData.currentYear
                        ? "/festival"
                        : `/memoria/${year}`
                    }
                  >
                    <span className="display">{year}</span>
                    <span>Edición Cimarock</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <ArtistStrip
        artists={related}
        eyebrow="Más de la escena"
        title="Sigue explorando"
      />
    </div>
  );
}
