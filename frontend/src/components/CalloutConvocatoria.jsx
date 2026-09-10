import { Button } from "./ui";
import "./CalloutConvocatoria.css";

export default function CalloutConvocatoria({ call }) {
  const open = call.status === "open";
  return (
    <section className={`callout-conv ${open ? "is-open" : "is-closed"}`}>
      <div className="container callout-conv__grid">
        <div>
          <p className="meta">Convocatoria {call.edition}</p>
          <p className={`display callout-conv__status ${open ? "open" : ""}`}>
            {open ? "Abierta" : "Cerrada"}
          </p>
          <h2 className="display callout-conv__title">{call.title}</h2>
        </div>
        <div>
          <p>{call.summary}</p>
          <p className="callout-conv__deadline">
            Cierre: <strong>{call.deadline}</strong>
          </p>
          <Button to="/convocatorias" variant={open ? "primary" : "ghost"}>
            {open ? "Inscribirme" : "Ver bases"}
          </Button>
        </div>
      </div>
    </section>
  );
}
