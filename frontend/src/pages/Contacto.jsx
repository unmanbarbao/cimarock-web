import site from "../data/site.json";
import { Button } from "../components/ui";
import WhatsAppFloat from "../components/WhatsAppFloat";
import "./pages.css";

export default function Contacto() {
  return (
    <div className="page-contacto">
      <header className="page-hero page-hero--ink texture-brick">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <p className="meta">Habla con nosotros</p>
          <h1 className="display">Contacto</h1>
          <p className="page-hero__lead editorial">
            Simple, directo, con la misma piel visual de la casa digital.
          </p>
        </div>
      </header>
      <section className="fest-section">
        <div className="container contacto-grid">
          <form
            className="conv-form contacto-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Mockup: mensaje enviado.");
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
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </p>
            <p>{site.contact.instagram}</p>
            <p>{site.contact.city}</p>
            <Button
              href={`https://wa.me/${site.contact.whatsapp}`}
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
