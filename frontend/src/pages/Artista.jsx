import { Link, useParams } from "react-router-dom";
import artists from "../data/artists.json";
import { PhotoFrame, Button, SectionHead } from "../components/ui";
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
            tone={artist.photo.tone}
            src={artist.photo.src}
            aspect="4/5"
          />
          <div>
            <p className="meta">
              {artist.genre} · {artist.city}
            </p>
            <h1 className="display artista-hero__name">{artist.name}</h1>
            <p className="artista-hero__bio">{artist.bio}</p>
            <div className="artista-hero__links">
              <Button href={artist.spotify} variant="primary">
                Spotify
              </Button>
              <Button href={artist.youtube} variant="ghost">
                YouTube
              </Button>
              <Button href="#" variant="magenta">
                {artist.instagram}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="fest-section">
        <div className="container">
          <SectionHead eyebrow="Trayectoria" title="También en CimaRock" />
          <ul className="artista-editions">
            {artist.editions.map((year) => (
              <li key={year}>
                <Link to={year === 2026 ? "/festival" : `/memoria/${year}`}>
                  <span className="display">{year}</span>
                  <span>Edición CimaRock</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ArtistStrip
        artists={related}
        eyebrow="Más de la escena"
        title="Sigue explorando"
      />
    </div>
  );
}
