import { Link } from "react-router-dom";
import "./ui.css";

export function Button({
  to,
  href,
  children,
  variant = "primary",
  type = "button",
  ...rest
}) {
  const className = `btn btn--${variant}`;
  if (to) {
    return (
      <Link className={className} to={to} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a className={className} href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={className} {...rest}>
      {children}
    </button>
  );
}

export function PhotoFrame({
  label,
  src,
  aspect = "3/2",
  className = "",
  children,
}) {
  return (
    <figure
      className={`photo-frame grain ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <img
        className="photo-frame__img"
        src={src}
        alt={label || "Fotografía Cimarock"}
        loading="lazy"
        decoding="async"
      />
      <div className="photo-frame__inner">
        {children}
        {label && <span className="photo-frame__label">FOTO — {label}</span>}
      </div>
    </figure>
  );
}

export function SectionHead({ eyebrow, title, children, light = false }) {
  return (
    <header className={`section-head ${light ? "section-head--light" : ""}`}>
      {eyebrow && <p className="meta">{eyebrow}</p>}
      <h2 className="display section-head__title">{title}</h2>
      {children && <div className="section-head__body">{children}</div>}
    </header>
  );
}
