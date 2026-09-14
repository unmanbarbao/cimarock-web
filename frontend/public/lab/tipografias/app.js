const CURRENT = {
  display: "Bebas Neue",
  editorial: "Instrument Serif",
  ui: "IBM Plex Sans",
};

const FONTS = {
  display: [
    {
      name: "Bebas Neue",
      note: "Afiche condensado, impacto de cartel. Actual.",
      sample: "CIMAROCK",
    },
    {
      name: "Oswald",
      note: "Condensada industrial; titulares de festival.",
      sample: "CIMAROCK",
    },
    {
      name: "Anton",
      note: "Bloque ultra-display; muy afiche.",
      sample: "CIMAROCK",
    },
    {
      name: "Archivo Black",
      note: "Negra y densa; rock editorial contemporáneo.",
      sample: "CIMAROCK",
    },
    {
      name: "Staatliches",
      note: "Geométrica de cartel; tracking natural.",
      sample: "CIMAROCK",
    },
    {
      name: "Teko",
      note: "Alta y estrecha; buena a tamaños enormes.",
      sample: "CIMAROCK",
    },
    {
      name: "Barlow Condensed",
      note: "Más UI-friendly dentro del display.",
      sample: "CIMAROCK",
    },
    {
      name: "Big Shoulders Display",
      note: "Ancha y teatral; escenario/stadium.",
      sample: "CIMAROCK",
    },
    {
      name: "League Spartan",
      note: "Geométrica fuerte sin llegar a metal.",
      sample: "CIMAROCK",
    },
    {
      name: "Russo One",
      note: "Sans display con carácter; más ‘banda’.",
      sample: "CIMAROCK",
    },
    {
      name: "Passion One",
      note: "Redonda y pesada; energía de merch.",
      sample: "CIMAROCK",
    },
    {
      name: "Alfa Slab One",
      note: "Slab display; madera/poster clásico.",
      sample: "CIMAROCK",
    },
  ],
  editorial: [
    {
      name: "Instrument Serif",
      note: "Serifa contemporánea para citas. Actual.",
      sample: "El rock también nace en el llano.",
    },
    {
      name: "Fraunces",
      note: "Serifa con eje óptico; editorial con personalidad.",
      sample: "El rock también nace en el llano.",
    },
    {
      name: "Newsreader",
      note: "Diseñada para lectura larga / crónica.",
      sample: "El rock también nace en el llano.",
    },
    {
      name: "Libre Baskerville",
      note: "Clásica de archivo; más ‘documento’.",
      sample: "El rock también nace en el llano.",
    },
    {
      name: "Source Serif 4",
      note: "Par neutro y legible con Source Sans.",
      sample: "El rock también nace en el llano.",
    },
    {
      name: "Cormorant Garamond",
      note: "Elegante y fina; pull quotes grandes.",
      sample: "El rock también nace en el llano.",
    },
    {
      name: "Spectral",
      note: "Serifa de lectura con contraste medio.",
      sample: "El rock también nace en el llano.",
    },
    {
      name: "Literata",
      note: "Hecha para libros digitales / journal.",
      sample: "El rock también nace en el llano.",
    },
    {
      name: "Playfair Display",
      note: "Más ‘magazine’; alto contraste.",
      sample: "El rock también nace en el llano.",
    },
    {
      name: "Crimson Pro",
      note: "Serifa editorial sobria y versátil.",
      sample: "El rock también nace en el llano.",
    },
  ],
  ui: [
    {
      name: "IBM Plex Sans",
      note: "Cuerpo técnico-humano. Actual.",
      sample:
        "CimaRock es festival, movimiento y casa para la música alternativa de Casanare.",
    },
    {
      name: "Space Grotesk",
      note: "Grotesk con carácter; buen contraste con display.",
      sample:
        "CimaRock es festival, movimiento y casa para la música alternativa de Casanare.",
    },
    {
      name: "DM Sans",
      note: "Geométrica limpia; UI moderna sin Inter.",
      sample:
        "CimaRock es festival, movimiento y casa para la música alternativa de Casanare.",
    },
    {
      name: "Source Sans 3",
      note: "Neutra de alto rendimiento en formularios.",
      sample:
        "CimaRock es festival, movimiento y casa para la música alternativa de Casanare.",
    },
    {
      name: "Work Sans",
      note: "Sans de pantalla; meta y botones claros.",
      sample:
        "CimaRock es festival, movimiento y casa para la música alternativa de Casanare.",
    },
    {
      name: "Barlow",
      note: "Par natural de Barlow Condensed.",
      sample:
        "CimaRock es festival, movimiento y casa para la música alternativa de Casanare.",
    },
    {
      name: "Public Sans",
      note: "Gov/archival vibe; soberanía tipográfica.",
      sample:
        "CimaRock es festival, movimiento y casa para la música alternativa de Casanare.",
    },
    {
      name: "Figtree",
      note: "Redondeada sutil; cercana y legible.",
      sample:
        "CimaRock es festival, movimiento y casa para la música alternativa de Casanare.",
    },
    {
      name: "Outfit",
      note: "Geométrica contemporánea; UI de marca.",
      sample:
        "CimaRock es festival, movimiento y casa para la música alternativa de Casanare.",
    },
    {
      name: "Manrope",
      note: "Sans semi-geométrica; cuerpo largo cómodo.",
      sample:
        "CimaRock es festival, movimiento y casa para la música alternativa de Casanare.",
    },
  ],
};

const PRESETS = [
  {
    id: "actual",
    label: "Actual",
    display: "Bebas Neue",
    editorial: "Instrument Serif",
    ui: "IBM Plex Sans",
  },
  {
    id: "afiche-duro",
    label: "Afiche duro",
    display: "Anton",
    editorial: "Libre Baskerville",
    ui: "Space Grotesk",
  },
  {
    id: "archivo",
    label: "Archivo vivo",
    display: "Oswald",
    editorial: "Newsreader",
    ui: "Public Sans",
  },
  {
    id: "escenario",
    label: "Escenario",
    display: "Big Shoulders Display",
    editorial: "Fraunces",
    ui: "DM Sans",
  },
  {
    id: "slab-llano",
    label: "Slab llano",
    display: "Alfa Slab One",
    editorial: "Crimson Pro",
    ui: "Barlow",
  },
  {
    id: "magazine",
    label: "Magazine",
    display: "Archivo Black",
    editorial: "Playfair Display",
    ui: "Work Sans",
  },
];

const state = { ...CURRENT };

const ROLE_LABEL = {
  display: "Display",
  editorial: "Editorial",
  ui: "UI / cuerpo",
};

const ROLE_SAMPLE = {
  display: "CIMAROCK",
  editorial: "Una escena. Un territorio. Una cima.",
  ui: "Meta · formularios · cuerpo",
};

function familyStack(name, role) {
  if (role === "editorial") {
    return `"${name}", Georgia, "Times New Roman", serif`;
  }
  if (role === "display") {
    return `"${name}", Impact, Haettenschweiler, sans-serif`;
  }
  return `"${name}", "Helvetica Neue", Arial, sans-serif`;
}

function renderCurrentStack() {
  const root = document.getElementById("current-stack");
  root.innerHTML = Object.entries(CURRENT)
    .map(
      ([role, name]) => `
      <article class="stack-card is-current">
        <p class="stack-card__role">${ROLE_LABEL[role]}</p>
        <p class="stack-card__name" style="font-family:${familyStack(name, role)}">${name}</p>
        <p class="stack-card__sample" style="font-family:${familyStack(name, role)}">${ROLE_SAMPLE[role]}</p>
      </article>`
    )
    .join("");
}

function renderMixer() {
  const root = document.getElementById("mixer-controls");
  root.innerHTML = ["display", "editorial", "ui"]
    .map((role) => {
      const options = FONTS[role]
        .map(
          (f) =>
            `<option value="${f.name}" ${
              state[role] === f.name ? "selected" : ""
            }>${f.name}${CURRENT[role] === f.name ? " · actual" : ""}</option>`
        )
        .join("");
      return `
        <div class="mixer-field">
          <label for="mix-${role}">${ROLE_LABEL[role]}</label>
          <select id="mix-${role}" data-role="${role}">${options}</select>
        </div>`;
    })
    .join("");

  root.querySelectorAll("select").forEach((select) => {
    select.addEventListener("change", () => {
      state[select.dataset.role] = select.value;
      applyState();
    });
  });
}

function renderPresets() {
  const root = document.getElementById("presets");
  root.innerHTML = PRESETS.map(
    (p) =>
      `<button type="button" class="preset-btn" data-preset="${p.id}">${p.label}</button>`
  ).join("");

  root.querySelectorAll(".preset-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const preset = PRESETS.find((p) => p.id === btn.dataset.preset);
      state.display = preset.display;
      state.editorial = preset.editorial;
      state.ui = preset.ui;
      applyState();
    });
  });
}

function renderCatalog() {
  for (const role of ["display", "editorial", "ui"]) {
    const root = document.getElementById(`cards-${role}`);
    root.innerHTML = FONTS[role]
      .map((font) => {
        const isCurrent = CURRENT[role] === font.name;
        return `
          <button
            type="button"
            class="font-card ${isCurrent ? "is-current" : ""}"
            data-role="${role}"
            data-font="${font.name}"
          >
            <div class="font-card__top">
              <span class="font-card__name">${font.name}</span>
              ${isCurrent ? '<span class="font-card__badge">En uso</span>' : ""}
            </div>
            <p
              class="font-card__sample font-card__sample--${role}"
              style="font-family:${familyStack(font.name, role)}"
            >${font.sample}</p>
            <p class="font-card__note">${font.note}</p>
          </button>`;
      })
      .join("");

    root.querySelectorAll(".font-card").forEach((card) => {
      card.addEventListener("click", () => {
        state[card.dataset.role] = card.dataset.font;
        applyState();
        document.getElementById("live-mock").scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      });
    });
  }
}

function applyState() {
  const mock = document.getElementById("live-mock");
  mock.style.setProperty("--mix-display", familyStack(state.display, "display"));
  mock.style.setProperty(
    "--mix-editorial",
    familyStack(state.editorial, "editorial")
  );
  mock.style.setProperty("--mix-ui", familyStack(state.ui, "ui"));

  mock.querySelector(".mock__meta").style.fontFamily = "var(--mix-ui)";
  mock.querySelector(".mock__display").style.fontFamily = "var(--mix-display)";
  mock.querySelector(".mock__sub").style.fontFamily = "var(--mix-ui)";
  mock.querySelector(".mock__quote").style.fontFamily = "var(--mix-editorial)";
  mock.querySelector(".mock__body").style.fontFamily = "var(--mix-ui)";
  mock.querySelectorAll(".mock__btn").forEach((btn) => {
    btn.style.fontFamily = "var(--mix-ui)";
  });

  for (const role of ["display", "editorial", "ui"]) {
    const select = document.getElementById(`mix-${role}`);
    if (select) select.value = state[role];
  }

  document.querySelectorAll(".font-card").forEach((card) => {
    const active = state[card.dataset.role] === card.dataset.font;
    card.classList.toggle("is-active", active);
  });

  document.querySelectorAll(".preset-btn").forEach((btn) => {
    const preset = PRESETS.find((p) => p.id === btn.dataset.preset);
    const active =
      preset &&
      preset.display === state.display &&
      preset.editorial === state.editorial &&
      preset.ui === state.ui;
    btn.classList.toggle("is-active", Boolean(active));
  });
}

renderCurrentStack();
renderMixer();
renderPresets();
renderCatalog();
applyState();
