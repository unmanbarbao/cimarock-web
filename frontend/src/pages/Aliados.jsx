import partners from "../data/partners.json";
import AllyWall from "../components/AllyWall";
import { Button } from "../components/ui";
import "./pages.css";

export default function Aliados() {
  return (
    <div className="page-aliados">
      <header className="page-hero page-hero--paper">
        <div className="container">
          <p className="meta">Alianzas</p>
          <h1 className="display">Aliados</h1>
          <p className="page-hero__lead editorial">
            Patrocinadores, instituciones, empresas, medios y aliados culturales.
            Apoyar a CimaRock es sostener la escena musical regional.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <Button to="/contacto" variant="ink">
              Quiero ser aliado
            </Button>
          </div>
        </div>
      </header>
      <AllyWall partners={partners} />
    </div>
  );
}
