import site from "../data/site.json";
import { Button } from "../components/ui";
import WhatsAppFloat from "../components/WhatsAppFloat";
import "./pages.css";

export default function Contacto() {
  const { contact } = site;
  return (
    <div className="page-contacto">
      <header className="page-hero page-hero--ink texture-brick">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <p className="meta">Habla con nosotros</p>
          <h1 className="display">Contacto</h1>
          <p className="page-hero__lead editorial">
            Artistas, aliados, instituciones y público: escríbenos.
          </p>
        </div>
      </header>
      <section className="fest-section">
        <div className="container contacto-grid">
          <form
            className="conv-form contacto-form"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const subject = encodeURIComponent(`Contacto web — ${data.get("name")}`);
              const body = encodeURIComponent(
                `${data.get("message")}\n\n${data.get("name")} · ${data.get("email")}`
              );
              window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
            }}
          >
            <label>
              Nombre
              <input required name="name" />
            </label>
            <label>
              Correo
              <input required type="email" name="email" />
            </label>
            <label>
              Mensaje
              <textarea required name="message" rows={5} />
            </label>
            <Button type="submit" variant="primary">
              Enviar
            </Button>
          </form>
          <aside className="contacto-aside">
            <p className="meta">Directo</p>
            <p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <p>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
            </p>
            <p>
              <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
                {contact.instagram}
              </a>
            </p>
            <p>
              {contact.address}
              <br />
              {contact.city}
            </p>
            <Button
              href={`https://wa.me/${contact.whatsapp}`}
              variant="magenta"
            >
              WhatsApp
            </Button>
          </aside>
        </div>
      </section>
      <WhatsAppFloat />
    </div>
  );
}
