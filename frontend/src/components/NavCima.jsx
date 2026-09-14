import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import site from "../data/site.json";
import BrandLogo from "./BrandLogo";
import "./NavCima.css";

export default function NavCima() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="nav-cima">
      <div className="nav-cima__bar container-wide">
        <Link
          to="/"
          className="nav-cima__brand"
          onClick={() => setOpen(false)}
          aria-label="CimaRock — inicio"
        >
          <BrandLogo variant="red" className="nav-cima__logo" />
        </Link>
        <nav className="nav-cima__desktop" aria-label="Principal">
          {site.nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          className={`nav-cima__toggle ${open ? "is-open" : ""}`}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
      <div className={`nav-cima__drawer texture-brick ${open ? "is-open" : ""}`}>
        <div className="nav-cima__drawer-logo">
          <BrandLogo variant="red" className="nav-cima__logo--drawer" />
        </div>
        <nav className="nav-cima__mobile" aria-label="Móvil">
          {site.nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className="display"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <div className="nav-cima__mobile-sec">
            {site.footerNav.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
