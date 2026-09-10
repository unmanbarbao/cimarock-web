import { PhotoFrame } from "./ui";
import "./MemorySpread.css";

export default function MemorySpread({ spread }) {
  return (
    <section className={`memory-spread memory-spread--${spread.layout}`}>
      <div className="container memory-spread__grid">
        {spread.photos.map((photo, i) => (
          <PhotoFrame
            key={`${spread.id}-${i}`}
            label={photo.label}
            tone={photo.tone}
            src={photo.src}
            aspect={photo.size === "xl" ? "16/9" : photo.size === "lg" ? "4/3" : "1/1"}
            className={`memory-spread__photo memory-spread__photo--${photo.size || "md"}`}
          />
        ))}
      </div>
      <div className="container">
        <p className="editorial memory-spread__caption">{spread.caption}</p>
      </div>
    </section>
  );
}
