# Corporación Festival CimaRock — Casa Digital

Sitio oficial del Festival CimaRock y presencia institucional de la Corporación Festival CimaRock (Yopal, Casanare, Colombia).

**Mockup de propuesta visual / UX** — listo para presentar en Netlify.

## Estructura

```
cimarock-web/
├── DIRECCION-CREATIVA.md   # Documento de dirección visual y UX
├── netlify.toml            # Build + redirects SPA
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

## Publicar en Netlify

1. Conecta este repositorio en [Netlify](https://app.netlify.com).
2. Settings de build (también están en `netlify.toml`):
   - **Base directory:** `frontend`
   - **Build command:** `npm run build`
   - **Publish directory:** `dist` (relativo al base → `frontend/dist`)
3. Deploy. Las rutas de React Router quedan cubiertas por el redirect SPA.

## Stack mockups

- Vite + React + React Router
- CSS variables (design tokens)
- Datos estáticos JSON (modelo preparado para CMS)
- Placeholders fotográficos en `frontend/public/placeholders/` (sustituir por archivo real de CimaRock)

## Contenido

Los mockups usan fotografía placeholder. Sustituir por material documental real de CimaRock cuando esté disponible.
