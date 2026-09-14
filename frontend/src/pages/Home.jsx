import { Link } from "react-router-dom";
import site from "../data/site.json";
import artists from "../data/artists.json";
import editionsData from "../data/editions.json";
import calls from "../data/calls.json";
import posts from "../data/posts.json";
import partners from "../data/partners.json";
import memory from "../data/memory.json";
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
  const featured = artists.filter((a) => a.featured).slice(0, 6);

  return (
    <>
      <SeasonBanner mode={site.seasonMode} />
      <HeroAfiche
        meta={`${current.dates} · Edición ${current.year}`}
        title="CIMAROCK"
        subtitle="Yopal, Casanare"
        photo={{
          label: "Público frente al Escenario Cima",
          tone: "1",
          src: "/placeholders/crowd-2.jpg",
        }}
        primary={{ to: "/festival", label: "Ver edición" }}
        secondary={{ to: "/convocatorias", label: "Quiero tocar" }}
      />
      <MarqueeTerritorio />
      <BlockIntro>
        <p>
          CimaRock es festival, movimiento y casa para la música alternativa de
          Casanare. Desde Yopal impulsamos escena, memoria y una Corporación que
          sostiene lo que el escenario enciende.
        </p>
        <p>
          No somos una plantilla de festival. Somos la cima digital de una
          comunidad que lleva años haciendo ruido en el llano.
        </p>
      </BlockIntro>
      <EditionTeaser edition={current} />
      <ArtistStrip
        artists={featured}
        eyebrow="Cartel en construcción"
        title="Artistas"
      />
      <section className="home-scene">
        <div className="container home-scene__grid">
          <div>
            <SectionHead
              eyebrow="La escena"
              title="No solo contratamos. Construimos."
            >
              <p>
                Directorio vivo de bandas y proyectos que hacen la música
                alternativa del territorio.
              </p>
            </SectionHead>
            <Button to="/escena" variant="primary">
              Explorar la escena
            </Button>
          </div>
          <PhotoFrame
            label="Ensayo colectivo, casa cultural"
            tone="magenta"
            src="/placeholders/band-2.jpg"
            aspect="4/5"
          />
        </div>
      </section>
      <section className="home-memory">
        <div className="container">
          <SectionHead eyebrow="Memoria" title={memory.title}>
            <p>{memory.intro}</p>
          </SectionHead>
          <div className="home-memory__preview">
            {memory.spreads[1].photos.map((p) => (
              <PhotoFrame
                key={p.label}
                label={p.label}
                tone={p.tone}
                src={p.src}
                aspect="1/1"
              />
            ))}
          </div>
          <Button to="/memoria/2025" variant="ghost">
            Entrar a la memoria
          </Button>
        </div>
      </section>
      <section className="home-journal">
        <div className="container">
          <SectionHead
            eyebrow="Journal"
            title="Crónicas, perfiles, ruido escrito"
            light
          />
          <div className="home-journal__list">
            {posts.slice(0, 3).map((post) => (
              <Link key={post.slug} to="/journal" className="home-journal__item">
                <p className="meta">
                  {post.type} · {post.date}
                </p>
                <h3 className="editorial">{post.title}</h3>
                <p>{post.excerpt}</p>
              </Link>
            ))}
          </div>
          <Button to="/journal" variant="ink">
            Leer el Journal
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
            alt="Corporación CimaRock"
            width={220}
            height={220}
          />
          <p className="editorial home-closer__quote">{site.conceptLine}</p>
          <p className="meta">Corporación Festival CimaRock · Yopal</p>
        </div>
      </section>
    </>
  );
}
