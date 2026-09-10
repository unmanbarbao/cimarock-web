import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PhotoFrame } from "./ui";
import "./SceneGrid.css";

export default function SceneGrid({ artists }) {
  const [genre, setGenre] = useState("Todos");
  const [city, setCity] = useState("Todas");

  const genres = useMemo(
    () => ["Todos", ...new Set(artists.map((a) => a.genre))],
    [artists]
  );
  const cities = useMemo(
    () => ["Todas", ...new Set(artists.map((a) => a.city))],
    [artists]
  );

  const filtered = artists.filter((a) => {
    const g = genre === "Todos" || a.genre === genre;
    const c = city === "Todas" || a.city === city;
    return g && c;
  });

  return (
    <div className="scene-grid">
      <div className="scene-grid__filters">
        <div>
          <p className="meta">Género</p>
          <div className="scene-grid__chips">
            {genres.map((g) => (
              <button
                key={g}
                type="button"
                className={genre === g ? "is-active" : ""}
                onClick={() => setGenre(g)}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="meta">Ciudad</p>
          <div className="scene-grid__chips">
            {cities.map((c) => (
              <button
                key={c}
                type="button"
                className={city === c ? "is-active" : ""}
                onClick={() => setCity(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="scene-grid__list">
        {filtered.map((artist, i) => (
          <Link
            key={artist.slug}
            to={`/escena/${artist.slug}`}
            className={`scene-grid__card scene-grid__card--${(i % 3) + 1}`}
          >
            <PhotoFrame
              label={artist.photo.label}
              tone={artist.photo.tone}
              src={artist.photo.src}
              aspect={i % 3 === 0 ? "4/5" : "1/1"}
            />
            <div className="scene-grid__info">
              <h3 className="display">{artist.name}</h3>
              <p>
                {artist.genre} · {artist.city}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
