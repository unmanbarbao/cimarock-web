import partners from "../data/partners.json";
import { PhotoFrame, SectionHead, Button } from "../components/ui";
import AllyWall from "../components/AllyWall";
import "./pages.css";

const TEAM = [
  {
    name: "Dirección artística",
    role: "Curaduría y programación",
    tone: "1",
    src: "/placeholders/people-1.jpg",
  },
  {
    name: "Producción",
    role: "Logística y escenarios",
    tone: "2",
    src: "/placeholders/stage-1.jpg",
  },
  {
    name: "Comunicaciones",
    role: "Narrativa y archivo",
    tone: "3",
    src: "/placeholders/backstage-1.jpg",
  },
  {
    name: "Comunidad",
    role: "Escena y convocatorias",
    tone: "4",
    src: "/placeholders/team-1.jpg",
  },
];

export default function Corporacion() {
  return (
    <div className="page-corp">
      <header className="page-hero page-hero--ink">
        <div className="container">
          <p className="meta">Institucional</p>
          <h1 className="display">Corporación</h1>
          <p className="page-hero__lead editorial">
            Entidad cultural sin ánimo de lucro. Seria y profesional — sin
            abandonar la identidad del festival.
          </p>
        </div>
      </header>

      <section className="corp-about">
        <div className="container corp-about__grid">
          <div>
            <SectionHead eyebrow="Quiénes somos" title="Una cima con raíces" light>
              <p>
                La Corporación Festival CimaRock formaliza años de trabajo
                colectivo en Yopal: festival, promoción de la escena alternativa
                y construcción de memoria musical en Casanare.
              </p>
            </SectionHead>
          </div>
          <PhotoFrame
            label="Equipo y comunidad en el territorio"
            tone="gold"
            src="/placeholders/landscape-2.jpg"
            aspect="4/5"
          />
        </div>
      </section>

      <section className="fest-section">
        <div className="container corp-mv">
          <div>
            <p className="meta">Misión</p>
            <p className="editorial">
              Fortalecer la música alternativa del llano mediante el festival,
              la circulación de artistas y el archivo cultural.
            </p>
          </div>
          <div>
            <p className="meta">Visión</p>
            <p className="editorial">
              Que Casanare sea reconocido como territorio de escena viva,
              independiente y conectada con Colombia.
            </p>
          </div>
        </div>
      </section>

      <section className="fest-section scrape">
        <div className="container">
          <SectionHead eyebrow="Proyectos" title="Más que un fin de semana" />
          <ul className="corp-projects">
            <li>
              <span className="display">01</span>
              <div>
                <h3>Festival CimaRock</h3>
                <p>Plataforma anual de presentación y encuentro.</p>
              </div>
            </li>
            <li>
              <span className="display">02</span>
              <div>
                <h3>Escena y convocatorias</h3>
                <p>Acompañamiento a bandas emergentes del departamento.</p>
              </div>
            </li>
            <li>
              <span className="display">03</span>
              <div>
                <h3>Memoria y Journal</h3>
                <p>Archivo fotográfico, crónicas y relatos de territorio.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="fest-section">
        <div className="container">
          <SectionHead eyebrow="Equipo" title="Quienes hacen la cima" />
          <div className="corp-team">
            {TEAM.map((m) => (
              <article key={m.name}>
                <PhotoFrame
                  label={`Retrato documental — ${m.name}`}
                  tone={m.tone}
                  src={m.src}
                  aspect="1/1"
                />
                <h3 className="display">{m.name}</h3>
                <p>{m.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AllyWall partners={partners} title="Aliados institucionales" />

      <section id="transparencia" className="fest-section">
        <div className="container">
          <SectionHead eyebrow="Transparencia" title="Documentos" />
          <ul className="corp-docs">
            <li>
              <span>Estatutos de la Corporación</span>
              <Button href="#" variant="ghost">
                PDF
              </Button>
            </li>
            <li>
              <span>Informe de gestión (mockup)</span>
              <Button href="#" variant="ghost">
                PDF
              </Button>
            </li>
            <li>
              <span>Política de convocatorias</span>
              <Button href="#" variant="ghost">
                PDF
              </Button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
