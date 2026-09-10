import "./SeasonBanner.css";

const LABELS = {
  off: "Fuera de temporada",
  pre: "Pre-festival",
  live: "Durante el festival",
  post: "Post-festival",
};

export default function SeasonBanner({ mode = "pre" }) {
  return (
    <div className={`season-banner season-banner--${mode}`}>
      <span className="season-banner__dot" aria-hidden="true" />
      <span className="meta">Modo temporada · {LABELS[mode] || mode}</span>
    </div>
  );
}
