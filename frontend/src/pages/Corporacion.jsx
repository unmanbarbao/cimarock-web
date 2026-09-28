import { Link } from "react-router-dom";
import partners from "../data/partners.json";
import corporation from "../data/corporation.json";
import { PhotoFrame, SectionHead } from "../components/ui";
import AllyWall from "../components/AllyWall";
import "./pages.css";

function Paragraphs({ items }) {
  const [first, ...rest] = items;
  return (
    <>
      <p className="editorial">{first}</p>
      {rest.map((p) => (
        <p key={p} className="corp-mv__body">
          {p}
        </p>
      ))}
    </>
  );
}

export default function Corporacion() {
  const { about, mission, vision, purpose, activities, pillars, reason, history } =
    corporation;

  return (
    <div className="page-corp">
      <header className="page-hero page-hero--ink">
        <div className="container">
          <p className="meta">Institucional</p>
          <h1 className="display">Corporación</h1>
          <p className="page-hero__lead editorial">{corporation.summary}</p>
        </div>
      </header>

      <section className="corp-about">
        <div className="container corp-about__grid">
          <div>
            <SectionHead eyebrow="Quiénes somos" title={corporation.name} light>
              {about.slice(1).map((p) => (
                <p key={p}>{p}</p>
              ))}
            </SectionHead>
          </div>
          <PhotoFrame
            label="El Yopo — Fabio Quintero"
            src="/escena/el-yopo.jpg"
            aspect="4/5"
          />
        </div>
      </section>

      <section className="fest-section">
        <div className="container corp-mv">
          <div>
            <p className="meta">Misión</p>
            <Paragraphs items={mission} />
          </div>
          <div>
            <p className="meta">Visión</p>
            <Paragraphs items={vision} />
          </div>
        </div>
      </section>

      <section className="fest-section scrape">
        <div className="container">
          <SectionHead eyebrow="Nuestro propósito" title={purpose.headline}>
            {purpose.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </SectionHead>
        </div>
      </section>

      <section className="fest-section">
        <div className="container">
          <SectionHead eyebrow="Qué hacemos" title="Más que un festival" />
          <ul className="corp-projects">
            {activities.map((a, i) => (
              <li key={a.title}>
                <span className="display">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  {a.group && <p className="meta">{a.group}</p>}
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="fest-section scrape">
        <div className="container">
          <SectionHead eyebrow="Nuestros pilares" title="Lo que nos sostiene" />
          <ul className="corp-projects corp-pillars">
            {pillars.map((p, i) => (
              <li key={p.title}>
                <span className="display">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="fest-section">
        <div className="container corp-mv">
          <div>
            <p className="meta">Nuestra razón de ser</p>
            <Paragraphs items={[reason.headline, ...reason.body]} />
          </div>
          <div>
            <p className="meta">Historia</p>
            <Paragraphs items={[history.headline, ...history.body]} />
            <Link className="corp-link" to="/historia">
              Ver línea de tiempo
            </Link>
          </div>
        </div>
      </section>

      <AllyWall partners={partners} title="Aliados" />
    </div>
  );
}
