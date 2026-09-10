/** Catálogo de placeholders locales (Unsplash) para mockups. */
export const PLACEHOLDERS = {
  crowd1: "/placeholders/crowd-1.jpg",
  crowd2: "/placeholders/crowd-2.jpg",
  stage1: "/placeholders/stage-1.jpg",
  stage2: "/placeholders/stage-2.jpg",
  guitar1: "/placeholders/guitar-1.jpg",
  guitar2: "/placeholders/guitar-2.jpg",
  band1: "/placeholders/band-1.jpg",
  band2: "/placeholders/band-2.jpg",
  vocal1: "/placeholders/vocal-1.jpg",
  lights1: "/placeholders/lights-1.jpg",
  backstage1: "/placeholders/backstage-1.jpg",
  landscape1: "/placeholders/landscape-1.jpg",
  landscape2: "/placeholders/landscape-2.jpg",
  sunset1: "/placeholders/sunset-1.jpg",
  people1: "/placeholders/people-1.jpg",
  people2: "/placeholders/people-2.jpg",
  poster1: "/placeholders/poster-1.jpg",
  poster2: "/placeholders/poster-2.jpg",
  team1: "/placeholders/team-1.jpg",
  amp1: "/placeholders/amp-1.jpg",
};

/** Fallback por tone cuando no hay src explícito */
export const TONE_IMAGES = {
  1: PLACEHOLDERS.crowd1,
  2: PLACEHOLDERS.vocal1,
  3: PLACEHOLDERS.band1,
  4: PLACEHOLDERS.lights1,
  5: PLACEHOLDERS.backstage1,
  6: PLACEHOLDERS.landscape1,
  gold: PLACEHOLDERS.sunset1,
  magenta: PLACEHOLDERS.stage1,
};

export function resolvePhotoSrc(photo = {}) {
  if (photo.src) return photo.src;
  if (photo.tone && TONE_IMAGES[photo.tone]) return TONE_IMAGES[photo.tone];
  return PLACEHOLDERS.stage1;
}
