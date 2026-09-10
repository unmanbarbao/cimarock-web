import "./AllyWall.css";

export default function AllyWall({ partners, title = "Aliados de la cima" }) {
  return (
    <section className="ally-wall">
      <div className="container">
        <p className="meta">Quienes sostienen la escena</p>
        <h2 className="display ally-wall__title">{title}</h2>
        <p className="ally-wall__copy">
          Asociarse con CimaRock es apoyar la cultura y la música alternativa del
          llano — no es solo un logo en un afiche.
        </p>
        <div className="ally-wall__grid">
          {partners.map((p, i) => (
            <div
              key={p.name}
              className={`ally-wall__item ally-wall__item--${(i % 4) + 1}`}
              data-tone={p.tone}
            >
              <span className="meta">{p.type}</span>
              <span className="display">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
