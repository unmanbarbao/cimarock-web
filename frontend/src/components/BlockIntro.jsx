import "./BlockIntro.css";

export default function BlockIntro({
  title = "Desde Yopal para la escena.",
  children,
}) {
  return (
    <section className="block-intro scrape">
      <div className="container block-intro__grid">
        <h2 className="display block-intro__title">{title}</h2>
        <div className="block-intro__copy">
          {children}
          <p className="editorial block-intro__sign">— Corporación Festival CimaRock</p>
        </div>
      </div>
    </section>
  );
}
