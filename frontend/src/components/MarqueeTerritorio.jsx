import site from "../data/site.json";
import "./MarqueeTerritorio.css";

export default function MarqueeTerritorio() {
  const items = [...site.territory, ...site.territory, ...site.territory];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="display">
            {item}
            <em>·</em>
          </span>
        ))}
      </div>
    </div>
  );
}
