# Dirección Creativa — Casa Digital CimaRock

**Proyecto:** Corporación Festival CimaRock  
**Territorio:** Yopal, Casanare, Colombia  
**Documento:** Sistema visual, UX y arquitectura de la casa digital  
**Fecha:** 2026

---

## 1. Concepto rector

### Nombre de la casa digital

**La Cima**

No es un sitio “del festival” ni una web corporativa de ONG. Es la casa digital de un movimiento cultural: festival, escena, memoria y organización en un solo cuerpo.

### Línea conceptual

> **El rock también nace en el llano.**

Marco narrativo, no slogan repetido en cada bloque. El sitio habla desde el territorio (Yopal / Casanare), la escena alternativa y la altura simbólica de “cima”.

Línea secundaria de apoyo (uso editorial, no marketing):

> Una escena. Un territorio. Una cima.

### Personalidad

Editorial de afiche + archivo vivo.

| Sí | No |
|----|-----|
| Cruda | Corporativa fría |
| Asimétrica | SaaS / dashboard |
| Documental | Stock / IA genérica |
| Independiente | EDM / neón cyberpunk |
| Territorial | Glassmorphism |
| Energética | Inter + pills + cards |

Cuando alguien entre debe pensar: *Esto no parece una página web cualquiera. Esto es CimaRock.*

---

## 2. Modos de temporada

El diseño no se rediseña cada año. Cambia el protagonismo del contenido.

| Modo | Protagonista del Home | CTAs principales |
|------|------------------------|------------------|
| **Fuera de temporada** | Corporación + escena + historia | Explorar la escena · Conocer la Corporación |
| **Pre-festival** | Edición + artistas + convocatoria | Ver edición · Quiero tocar |
| **Durante** | Guía digital | Programación · Mapa · Artistas |
| **Post-festival** | Memoria editorial | Así se vivió · Crónicas · Galería |

Componente `SeasonMode`: badge visible + orden de módulos del home configurable vía CMS (`SiteSettings.seasonMode` + `homeModules`).

**Modo por defecto en mockups:** Pre-festival (edición 2026).

---

## 3. Sistema visual

### 3.1 Paleta

| Token | Hex | Rol |
|-------|-----|-----|
| `ink` | `#0A0A0A` | Fondos dominantes, tipografía invertida |
| `paper` | `#F2EFE6` | Fondos claros tipo papel/afiche |
| `gold` | `#E6B422` | Acento primario (amarillo/dorado heredado) |
| `magenta` | `#C41E6A` | Acento secundario, urgencia, tags |
| `concrete` | `#2A2A2A` | Superficies elevadas, rails |
| `dust` | `#8A8578` | Meta, captions |
| `signal` | `#FF3B3B` | Solo estado vivo (EN VIVO, convocatoria abierta) |

### 3.2 Texturas

- Overlay muro/ladrillo al **4–8%** en hero y footers.
- Grano fotográfico ligero sobre fotos.
- Nunca textura como ruido global en todo el layout.
- Detalles stencil/graffiti en dosis baja: marquees, numeración de edición, scrapes en bordes de sección.

### 3.3 Tipografía

| Rol | Familia | Uso |
|-----|---------|-----|
| Display | Bebas Neue | Titulares enormes, nav móvil, afiche |
| Editorial | Instrument Serif | Citas, crónicas, pull quotes |
| UI / cuerpo | IBM Plex Sans | Cuerpo, formularios, meta |

**Escala:**

- H1 home: 96–140px desktop / 42–56px móvil
- Tracking tight en display
- Mayúsculas en nav y tags de edición
- Wordmark tipográfico “CIMAROCK” hasta tener lettering oficial

### 3.4 Lenguaje gráfico

- Bloques negros a sangre (full-bleed)
- Asimetría 7/5 u 8/4; tipografía que invade foto
- Recortes fotográficos angulares (no cards redondeadas)
- CTAs rectangulares duros; hover = relleno `gold` o invertido
- Composición tipo **afiche de concierto convertido en experiencia digital**

### 3.5 Fotografía

Solo documental real: conciertos, público, backstage, paisajes del llano.  
En mockups: frames con etiqueta `FOTO REAL — [descripción]` y crops agresivos ya definidos.

---

## 4. Arquitectura de información

### Navegación primaria

`Inicio · Festival · Escena · Convocatorias · Memoria · Journal · Corporación`

### Secundaria / footer

`Historia · Aliados · Contacto · Transparencia`

### Rutas CMS-ready

| Ruta | Contenido |
|------|-----------|
| `/` | Home (módulos por temporada) |
| `/festival` | Edición actual |
| `/festival/:year` | Edición archivo |
| `/escena` | Directorio de artistas |
| `/escena/:slug` | Ficha artista |
| `/convocatorias` | Listado / activa |
| `/convocatorias/:slug` | Detalle + inscripción |
| `/historia` | Timeline 2019→ |
| `/memoria` | Índice de memorias |
| `/memoria/:year` | Spread editorial del año |
| `/journal` | Listado editorial |
| `/journal/:slug` | Artículo |
| `/corporacion` | Institucional |
| `/aliados` | Patrocinadores y aliados |
| `/contacto` | Contacto |

---

## 5. Componentes del sistema

1. **NavCima** — sticky negra; wordmark; drawer móvil full-bleed display  
2. **HeroAfiche** — foto/video + título + meta edición + 2 CTAs  
3. **MarqueeTerritorio** — YOPAL · CASANARE · LLANO · ESCENA · CIMA  
4. **BlockIntro** — “Desde Yopal para la escena.”  
5. **EditionCard** — cartel + fecha + estado  
6. **ArtistStrip** — recortes horizontales con nombre overlay  
7. **SceneGrid** — directorio editorial con filtros  
8. **TimelineRail** — ediciones 2019→hoy  
9. **MemorySpread** — layout revista (foto grande + satélites)  
10. **CalloutConvocatoria** — ABIERTA/CERRADA + CTA  
11. **ProgramDay** — agenda tipográfica por escenario  
12. **AllyWall** — logos en trama irregular sobre `paper`  
13. **SeasonBanner** — chip de modo temporada  
14. **FooterArchivo** — negro, links densos, crédito territorial  

---

## 6. Dirección por pantalla

### 6.1 Home

1. SeasonBanner  
2. HeroAfiche (CIMAROCK · Yopal · meta edición · CTAs)  
3. MarqueeTerritorio  
4. BlockIntro  
5. Módulos (orden pre-festival): Próxima edición → Artistas → Escena → Memoria → Journal → Convocatoria → Aliados  
6. Cierre a sangre: *El rock también nace en el llano.*

### 6.2 Festival

Cartel generoso → artistas protagonistas → programación → lugar/mapa → info asistentes → FAQ. Artistas nunca como lista secundaria.

### 6.3 Escena + Ficha artista

Directorio: “CimaRock construye escena, no solo contrata.”  
Ficha: perfil de sello/label — foto, bio, Spotify/YouTube, redes, ediciones, más de la escena.

### 6.4 Convocatorias

Hero: “¿Quieres tocar en CimaRock?”  
Estado enorme ABIERTA/CERRADA. Requisitos, proceso, reglamento. Formulario en 3 pasos con piel de afiche, no admin.

### 6.5 Historia + Memoria

Historia = patrimonio en timeline.  
Memoria = “Así se vivió CimaRock [año]” — spreads editoriales, no mosaico de thumbnails.

### 6.6 Corporación

Misma piel, tono más contenido: quiénes somos, misión/visión, proyectos, equipo, aliados, transparencia. Seria sin abandonar el carácter rockero.

### 6.7 Journal / Aliados / Contacto

Journal editorial (serifa + lead).  
Aliados = apoyo a cultura regional.  
Contacto simple + WhatsApp (flotante solo aquí y en Convocatorias).

---

## 7. Responsive y entradas sociales

- Gran parte del tráfico: Instagram → sitio, WhatsApp → sitio, QR en piezas físicas.
- Tipografía y CTAs prioritarios en móvil.
- Deep links: `/festival`, `/convocatorias`, `/memoria/2025`.
- OG como afiche 1200×630 con tipografía display.

---

## 8. Modelo de contenido (CMS futuro)

Entidades: `Edition`, `Artist`, `Performance`, `Venue`, `Call`, `Post`, `Gallery`, `MediaAsset`, `Partner`, `Document`, `TeamMember`, `SiteSettings`.

Los mockups usan JSON en `frontend/src/data/` que anticipa este modelo. El diseño no depende de maquetar páginas a mano cada año.

---

## 9. Criterio de calidad

Si hay que elegir entre “bonito” y “con personalidad”, se elige **personalidad**.

Referentes conceptuales (narrativa, no copia): Rock al Parque, Altavoz, Cordillera y festivales independientes latinoamericanos — buenas prácticas de artistas, memoria, convocatorias y editorial, traducidas a lenguaje CimaRock.

---

## 10. Evolución de marca

No modernizar hasta volverse irreconocible.  
Evolucionar para web: negro + gold + magenta + textura + tipografía display + foto documental.  
Cuando existan assets oficiales (logo lettering, afiches, texturas), sustituir wordmark tipográfico y placeholders fotográficos sin cambiar el sistema.
