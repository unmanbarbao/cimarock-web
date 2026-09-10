import { useState } from "react";
import calls from "../data/calls.json";
import { Button, SectionHead } from "../components/ui";
import WhatsAppFloat from "../components/WhatsAppFloat";
import "./pages.css";

export default function Convocatorias() {
  const call = calls.active;
  const open = call.status === "open";
  const [step, setStep] = useState(1);

  return (
    <div className="page-conv">
      <header className={`conv-hero ${open ? "is-open" : ""}`}>
        <div className="container">
          <p className="meta">Convocatoria {call.edition}</p>
          <p className="display conv-hero__status">{open ? "Abierta" : "Cerrada"}</p>
          <h1 className="display conv-hero__title">{call.title}</h1>
          <p className="conv-hero__lead">{call.summary}</p>
          <p className="conv-hero__dates">
            Apertura {call.opens} · Cierre <strong>{call.deadline}</strong>
          </p>
        </div>
      </header>

      <section className="fest-section">
        <div className="container conv-grid">
          <div>
            <SectionHead eyebrow="Bases" title="Requisitos" />
            <ul className="conv-list">
              {call.requirements.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <Button href={call.rulesPdf} variant="ghost">
              Descargar reglamento (PDF)
            </Button>
          </div>
          <div>
            <SectionHead eyebrow="Proceso" title="Cómo se elige" />
            <ol className="conv-process">
              {call.process.map((p) => (
                <li key={p.step}>
                  <span className="display">{String(p.step).padStart(2, "0")}</span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {open && (
        <section className="conv-form-section">
          <div className="container">
            <SectionHead
              eyebrow="Inscripción"
              title="Cuéntanos quién eres"
              light
            >
              <p>Formulario en tres pasos. Plataforma cultural, no trámite frío.</p>
            </SectionHead>
            <div className="conv-steps">
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  type="button"
                  className={step === n ? "is-active" : ""}
                  onClick={() => setStep(n)}
                >
                  Paso {n}
                </button>
              ))}
            </div>
            <form
              className="conv-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Mockup: inscripción enviada (sin backend).");
              }}
            >
              {step === 1 && (
                <>
                  <label>
                    Nombre del proyecto
                    <input required name="band" placeholder="Tu banda" />
                  </label>
                  <label>
                    Ciudad
                    <input required name="city" placeholder="Yopal" />
                  </label>
                  <label>
                    Género
                    <input required name="genre" placeholder="Post-punk" />
                  </label>
                </>
              )}
              {step === 2 && (
                <>
                  <label>
                    Enlace Spotify / Bandcamp
                    <input name="spotify" placeholder="https://" />
                  </label>
                  <label>
                    YouTube / video en vivo
                    <input name="youtube" placeholder="https://" />
                  </label>
                  <label>
                    Instagram
                    <input name="ig" placeholder="@banda" />
                  </label>
                </>
              )}
              {step === 3 && (
                <>
                  <label>
                    Biografía corta
                    <textarea name="bio" rows={4} placeholder="Quiénes son..." />
                  </label>
                  <label>
                    Correo de contacto
                    <input required type="email" name="email" />
                  </label>
                </>
              )}
              <div className="conv-form__actions">
                {step > 1 && (
                  <Button type="button" variant="ink" onClick={() => setStep(step - 1)}>
                    Atrás
                  </Button>
                )}
                {step < 3 ? (
                  <Button type="button" variant="primary" onClick={() => setStep(step + 1)}>
                    Continuar
                  </Button>
                ) : (
                  <Button type="submit" variant="primary">
                    Enviar inscripción
                  </Button>
                )}
              </div>
            </form>
          </div>
        </section>
      )}

      <WhatsAppFloat context="convocatoria" />
    </div>
  );
}
