# Corporación Festival CimaRock — Casa Digital

Sitio oficial del Festival CimaRock y presencia institucional de la Corporación Festival CimaRock (Yopal, Casanare, Colombia).

**Mockup de propuesta visual / UX** — listo para presentar en Netlify.

## Estructura

```
cimarock-web/
├── DIRECCION-CREATIVA.md   # Documento de dirección visual y UX
├── netlify.toml            # Redirects SPA; builds automáticos desactivados
├── README.md
├── .gitignore
├── frontend/               # Mockups React (Vite)
└── backend/                # Reservado para API/CMS futuro
```

## Concepto

**La Cima** — casa digital de CimaRock.  
Línea: *El rock también nace en el llano.*

## Desarrollo local

```bash
cd frontend
npm install
npm run dev
```

## Publicar en Netlify (deploy manual)

El sitio **no se construye en Netlify**: se genera en local y se sube el `dist` con la CLI. Así no se consumen minutos de build.

### Primera vez

1. En [Netlify](https://app.netlify.com) → el sitio → **Build & deploy** → **Continuous deployment** → **Stop auto publishing** (o desconecta el repo). En **Build settings** deja vacío *Base directory* y *Build command*; *Publish directory* = `frontend/dist` (también está en `netlify.toml`).
2. Autentica y vincula el repo al sitio (desde la raíz del proyecto):

```bash
npx --yes netlify-cli login
npx --yes netlify-cli link
```

### Cada publicación

```bash
cd frontend
npm run deploy
```

Eso corre `vite build` y sube `frontend/dist` a producción. Para un preview (draft URL, sin tocar producción):

```bash
cd frontend
npm run deploy:draft
```

Las rutas de React Router quedan cubiertas por `frontend/public/_redirects` y `netlify.toml`. `netlify.toml` incluye `ignore = "exit 0"` por si el git sigue conectado: Netlify cancela el build y no gasta minutos.

## Stack mockups

- Vite + React + React Router
- CSS variables (design tokens)
- Datos estáticos JSON (modelo preparado para CMS)
- Placeholders fotográficos en `frontend/public/placeholders/` (sustituir por archivo real de CimaRock)

## Contenido

Los mockups usan fotografía placeholder. Sustituir por material documental real de CimaRock cuando esté disponible.
