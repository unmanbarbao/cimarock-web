import { Button } from "./ui";
import { PhotoFrame } from "./ui";
import "./HeroAfiche.css";

export default function HeroAfiche({
  title = "CIMAROCK",
  subtitle = "Yopal, Casanare",
  meta,
  primary,
  secondary,
  photo,
}) {
  return (
    <section className="hero-afiche texture-brick">
      <div className="hero-afiche__media">
        <PhotoFrame
          label={photo?.label || "Concierto, público y escenario"}
          tone={photo?.tone || "1"}
          src={photo?.src || "/placeholders/crowd-2.jpg"}
          aspect="16/10"
          className="hero-afiche__photo"
        />
      </div>
      <div className="hero-afiche__content container-wide">
        <p className="meta rise">{meta}</p>
        <h1 className="display hero-afiche__title rise rise-delay-1">{title}</h1>
        <p className="hero-afiche__sub rise rise-delay-2">{subtitle}</p>
        <div className="hero-afiche__ctas rise rise-delay-3">
          {primary && (
            <Button to={primary.to} variant="primary">
              {primary.label}
            </Button>
          )}
          {secondary && (
            <Button to={secondary.to} variant="magenta">
              {secondary.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
