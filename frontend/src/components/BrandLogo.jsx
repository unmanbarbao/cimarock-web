/** Wordmark oficial Corporación CimaRock */
export default function BrandLogo({
  variant = "red",
  className = "",
  title = "Corporación CimaRock",
}) {
  const src =
    variant === "cream"
      ? "/brand/logo-cream.png"
      : variant === "source"
        ? "/brand/logo-source.png"
        : "/brand/logo-red.png";

  return (
    <img
      className={`brand-logo ${className}`}
      src={src}
      alt={title}
      width={160}
      height={160}
      decoding="async"
    />
  );
}
