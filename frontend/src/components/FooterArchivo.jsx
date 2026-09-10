import { Link } from "react-router-dom";
import site from "../data/site.json";
import "./FooterArchivo.css";

export default function FooterArchivo() {
  return (
    <footer className="footer-archivo texture-brick">
      <div className="footer-archivo__inner container">
        <div className="footer-archivo__brand">
          <p className="display footer-archivo__logo">CIMAROCK</p>
          <p className="editorial footer-archivo__line">{site.conceptLine}</p>
          <p className="meta">Yopal · Casanare · Colombia</p>
        </div>
        <div className="footer-archivo__cols">
          <div>
            <p className="meta">Navegar</p>
            <ul>
              {site.nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="meta">Más</p>
            <ul>
              {site.footerNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="meta">Contacto</p>
            <ul>
              <li>
                <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              </li>
              <li>{site.contact.instagram}</li>
              <li>{site.contact.city}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-archivo__bottom">
        <div className="container">
          <p>
            Corporación Festival CimaRock — entidad cultural sin ánimo de lucro.
          </p>
        </div>
      </div>
    </footer>
  );
}
