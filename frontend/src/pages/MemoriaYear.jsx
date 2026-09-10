import { Link, useParams } from "react-router-dom";
import memory from "../data/memory.json";
import editionsData from "../data/editions.json";
import { PLACEHOLDERS } from "../data/placeholders";
import MemorySpread from "../components/MemorySpread";
import { Button } from "../components/ui";
import "./pages.css";

const ROTATE = Object.values(PLACEHOLDERS);

export default function MemoriaYear() {
  const { year } = useParams();
  const y = Number(year) || 2025;
  const edition = editionsData.editions.find((e) => e.year === y);
  const data =
    y === 2025
      ? memory
      : {
          year: y,
          title: `Así se vivió CimaRock ${y}`,
          intro:
            edition?.highlight ||
            "Archivo en construcción. Esta edición espera su relato fotográfico completo.",
          spreads: memory.spreads.map((s, i) => ({
            ...s,
            id: `${y}-${s.id}`,
            caption: s.caption,
            photos: s.photos.map((p, pi) => ({
              ...p,
              tone: String(((i + Number(p.tone || 1)) % 6) + 1),
              label: `${p.label} (${y})`,
              src: ROTATE[(y + i + pi) % ROTATE.length],
            })),
          })),
        };

  return (
    <div className="page-memoria-year">
      <header className="page-hero page-hero--ink scrape">
        <div className="container">
          <p className="meta">Memoria · {data.year}</p>
          <h1 className="display">{data.title}</h1>
          <p className="page-hero__lead editorial">{data.intro}</p>
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
      {data.spreads.map((spread) => (
        <MemorySpread key={spread.id} spread={spread} />
      ))}
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
