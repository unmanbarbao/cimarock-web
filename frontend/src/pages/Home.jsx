import { Link } from "react-router-dom";
import site from "../data/site.json";
import artists from "../data/artists.json";
import editionsData from "../data/editions.json";
import calls from "../data/calls.json";
import partners from "../data/partners.json";
import corporation from "../data/corporation.json";
import SeasonBanner from "../components/SeasonBanner";
import HeroAfiche from "../components/HeroAfiche";
import MarqueeTerritorio from "../components/MarqueeTerritorio";
import BlockIntro from "../components/BlockIntro";
import { EditionTeaser } from "../components/EditionCard";
import ArtistStrip from "../components/ArtistStrip";
import CalloutConvocatoria from "../components/CalloutConvocatoria";
import AllyWall from "../components/AllyWall";
import { PhotoFrame, Button, SectionHead } from "../components/ui";
import "./pages.css";

export default function Home() {
  const current = editionsData.editions.find(
    (e) => e.year === editionsData.currentYear
  );
  const archives = editionsData.editions.filter((e) => e.status === "archive");
  const featured = artists.filter((a) => a.featured).slice(0, 6);

  return (
    <>
      <SeasonBanner mode={site.seasonMode} />
      <HeroAfiche
        meta={`${current.dates} · Edición ${current.year}`}
        title="CIMAROCK"
        subtitle="Yopal, Casanare"
        photo={{
          label: "Calek Soracá",
          src: "/escena/calek-soraca.jpg",
        }}
        primary={{ to: "/festival", label: "Ver edición" }}
        secondary={{ to: "/escena", label: "Conoce la escena" }}
      />
      <MarqueeTerritorio />
      <BlockIntro>
        <p>{corporation.summary}</p>
        <p>{corporation.purpose.headline}</p>
      </BlockIntro>
      <EditionTeaser edition={current} />
      <ArtistStrip
        artists={featured}
        eyebrow="Escena"
        title="Artistas"
      />
      <section className="home-scene">
        <div className="container home-scene__grid">
          <div>
            <SectionHead
              eyebrow="La escena"
              title={corporation.reason.headline}
            >
              {corporation.reason.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </SectionHead>
            <Button to="/escena" variant="primary">
              Explorar la escena
            </Button>
          </div>
          <PhotoFrame
            label="The Criollos"
            src="/escena/the-criollos.jpg"
            aspect="4/5"
          />
        </div>
      </section>
      <section className="home-memory">
        <div className="container">
          <SectionHead eyebrow="Memoria" title="Ediciones anteriores">
            <p>
              Los afiches oficiales de cada edición: carteles, escenarios y
              fechas que ya hacen parte de la historia del rock en Casanare.
            </p>
          </SectionHead>
          <div className="home-memory__preview">
            {archives.slice(0, 3).map((ed) => (
              <Link key={ed.year} to={`/memoria/${ed.year}`}>
                <PhotoFrame
                  label={ed.poster.label}
                  src={ed.poster.src}
                  aspect="3/4"
                />
              </Link>
            ))}
          </div>
          <Button to="/memoria" variant="ghost">
            Entrar a la memoria
          </Button>
        </div>
      </section>
      <CalloutConvocatoria call={calls.active} />
      <AllyWall partners={partners.slice(0, 6)} />
      <section className="home-closer texture-brick">
        <div className="container home-closer__inner">
          <img
            className="home-closer__logo"
            src="/brand/logo-red.png"
            alt="Corporación Cimarock"
            width={220}
            height={220}
          />
          <p className="editorial home-closer__quote">{site.conceptLine}</p>
          <p className="meta">{corporation.name} · Yopal</p>
        </div>
      </section>
    </>
  );
}
