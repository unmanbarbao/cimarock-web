import site from "../data/site.json";
import "./WhatsAppFloat.css";

export default function WhatsAppFloat({ context = "general" }) {
  const text = encodeURIComponent(
    context === "convocatoria"
      ? "Hola CimaRock, quiero información sobre la convocatoria."
      : "Hola CimaRock, quiero contactarlos."
  );
  const href = `https://wa.me/${site.contact.whatsapp}?text=${text}`;

  return (
    <a
      className="wa-float"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
    >
      WhatsApp
    </a>
  );
}
