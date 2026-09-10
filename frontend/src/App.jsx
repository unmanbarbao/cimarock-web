import { Routes, Route } from "react-router-dom";
import NavCima from "./components/NavCima";
import FooterArchivo from "./components/FooterArchivo";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Festival from "./pages/Festival";
import Escena from "./pages/Escena";
import Artista from "./pages/Artista";
import Convocatorias from "./pages/Convocatorias";
import Historia from "./pages/Historia";
import Memoria from "./pages/Memoria";
import MemoriaYear from "./pages/MemoriaYear";
import Journal from "./pages/Journal";
import Corporacion from "./pages/Corporacion";
import Aliados from "./pages/Aliados";
import Contacto from "./pages/Contacto";

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <NavCima />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/festival" element={<Festival />} />
          <Route path="/escena" element={<Escena />} />
          <Route path="/escena/:slug" element={<Artista />} />
          <Route path="/convocatorias" element={<Convocatorias />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/memoria" element={<Memoria />} />
          <Route path="/memoria/:year" element={<MemoriaYear />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/corporacion" element={<Corporacion />} />
          <Route path="/aliados" element={<Aliados />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <FooterArchivo />
    </div>
  );
}
