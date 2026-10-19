// Spots on the Dojo that are ready for an AI-generated illustration.
//
// To fill a slot, generate an image from its prompt and save it as
// `app/assets/images/<slot name>.webp` (png, jpg and avif work too), for example
// `app/assets/images/learning-paths/hub.webp`. It shows up on the page automatically.
//
// While `npm run dev` is running, an empty slot shows a dashed placeholder with
// its prompt and a copy button. Production builds skip empty slots, so the live
// site never shows a placeholder.
//
// Slot names, prompts and the house style match skill-wanderer.com (its
// data/image-slots.ts), so an image made for a slot there fits the same slot here.

export type ImageSlotRatio = '16/9' | '4/3'

export interface ImageSlotSpec {
  /** Shape the page crops the image to. Generate at this ratio for the best framing. */
  ratio: ImageSlotRatio
  /** Read aloud by screen readers. Update it if your image ends up showing something else. */
  alt: string
  /** The scene. The house style below is appended when you copy the prompt. */
  prompt: string
}

/** Appended to every prompt so the set shares one look. */
export const IMAGE_HOUSE_STYLE =
  'Style: warm editorial illustration with a soft painterly texture and fine grain, like a modern storybook. ' +
  'Deep charcoal background, low-key lighting, and warm orange and golden-yellow light as the only accent colors, ' +
  'like lamplight or a sunrise glow. Calm, sincere and hopeful, with plenty of empty space. Any people are small, ' +
  'seen from behind or in soft silhouette, with no detailed faces. No text, letters, numbers, logos or watermarks. ' +
  'Avoid glossy 3D renders, neon, robots, holograms, glowing circuit brains and corporate stock-photo poses.'

export const IMAGE_SLOT_SIZES: Record<ImageSlotRatio, string> = {
  '16/9': '1600 × 900',
  '4/3': '1200 × 900',
}

const FORMAT_HINTS: Record<ImageSlotRatio, string> = {
  '16/9': 'Wide 16:9 landscape format.',
  '4/3': '4:3 landscape format.',
}

/** The text to paste into the image generator: scene, house style and format. */
export const fullImagePrompt = (spec: ImageSlotSpec) =>
  `${spec.prompt} ${IMAGE_HOUSE_STYLE} ${FORMAT_HINTS[spec.ratio]}`

export const imageSlots: Record<string, ImageSlotSpec> = {
  // ── Learning paths: hub hero, then one cover per path (path card and path page) ──
  'learning-paths/hub': {
    ratio: '16/9',
    alt: 'A traveler at a crossroads choosing between lit paths toward different landmarks',
    prompt:
      'A crossroads in an open landscape at twilight with a wooden signpost pointing in many directions. Each road is lined with small warm lights and leads toward ' +
      'a different distant landmark: a lighthouse, a workshop, a tower, a bridge. A traveler with a backpack stands at the center, choosing.',
  },
  // The featured path, open now. Its cover stands alone, so it isn't part of the planned path covers group.
  'learning-paths/learning-in-the-ai-era': {
    ratio: '16/9',
    alt: 'A traveler with a glowing compass and a hand-drawn map stepping into a misty, shifting landscape at dawn',
    prompt:
      'A traveler with a backpack stands at the edge of a wide, misty landscape at dawn, where the paths ahead keep shifting and rearranging in the fog. ' +
      'They hold a softly glowing compass in one hand and a hand-drawn map in the other, and a few small lanterns mark the first safe steps forward.',
  },
  'learning-paths/web-development': {
    ratio: '16/9',
    alt: 'A web page being assembled from wooden and paper blocks on a workbench',
    prompt:
      'A workbench where a web page is being built like a physical model: layout blocks, buttons and picture frames made of wood and paper being fitted together, ' +
      'with a laptop behind them showing abstract colored lines that suggest code.',
  },
  'learning-paths/mobile-development': {
    ratio: '16/9',
    alt: 'A phone and a tablet showing an app and a small game, next to a sketchbook of app doodles',
    prompt:
      'A phone and a tablet laid out on a desk like a craftsperson\'s project, their screens showing a simple colorful app and a small platform game. ' +
      'A sketchbook of app screen doodles lies open beside them.',
  },
  'learning-paths/qa-tester': {
    ratio: '16/9',
    alt: 'An inspector with a magnifying glass checking an app screen for problems',
    prompt:
      'A careful inspector with a magnifying glass examining a large printed app screen pinned to a corkboard, small colored flags marking the spots that need fixing. ' +
      'A clipboard checklist with tick marks hangs beside it.',
  },
  'learning-paths/business-analyst': {
    ratio: '16/9',
    alt: 'A figure crossing a bridge between a busy market and a builders\' workshop, carrying a blueprint',
    prompt:
      'A small wooden bridge between two islands at dusk. On one island, a market stall where people talk about what they need; on the other, a workshop where builders ' +
      'work at computers. A figure crosses the bridge carrying a rolled-up blueprint.',
  },
  'learning-paths/software-development-roles-and-career': {
    ratio: '16/9',
    alt: 'A trail map branching toward different landmarks, with a compass resting on it',
    prompt:
      'An old map spread on a table, showing one starting point that branches into trails toward different landmarks: a lighthouse, a workshop, a watchtower, a bridge. ' +
      'A brass compass rests on the map.',
  },
  'learning-paths/project-management': {
    ratio: '16/9',
    alt: 'A small team planning next steps in front of a wall of sticky notes',
    prompt:
      'A planning wall covered in sticky notes arranged in tidy columns, with string connecting a few milestones. ' +
      'Three people seen from behind stand in front of it, one pointing to the next step.',
  },
  'learning-paths/ai-and-machine-learning': {
    ratio: '16/9',
    alt: 'A notebook of hand-drawn graphs beside a laptop showing a curve fitting scattered data points',
    prompt:
      'A desk with an open notebook full of hand-drawn graphs and simple network diagrams, next to a laptop where a smooth curve gradually fits a scatter of dots. ' +
      'A cup of coffee and a mood of patient experimentation.',
  },
  'learning-paths/devops': {
    ratio: '16/9',
    alt: 'Crates moving along a conveyor through build, check and ship stations, with a small server rack nearby',
    prompt:
      'A small, tidy workshop where wooden crates move along a conveyor belt through three stations that build, check and ship them, each lit by a small warm lamp. ' +
      'In the corner, a compact rack of servers hums quietly with glowing status lights.',
  },
  'learning-paths/mlops': {
    ratio: '16/9',
    alt: 'A gardener checking gauges in a greenhouse of young plants connected by tubes',
    prompt:
      'A greenhouse lab where young plants grow in rows of trays under warm grow lights, connected by neat tubes and gauges. ' +
      'A gardener checks the measurements on one tray, keeping the whole system healthy.',
  },
  'learning-paths/start-up-foundation': {
    ratio: '16/9',
    alt: 'A founder showing a first handmade product to curious passersby at a small stall',
    prompt:
      'A tiny market stall at dawn where a founder shows a simple handmade product to the first few curious passersby. ' +
      'An open notebook of observations sits on the counter.',
  },
  'learning-paths/advanced-software-development-skills': {
    ratio: '16/9',
    alt: 'A clockwork mechanism being fine-tuned under a magnifying lamp on a craftsperson\'s bench',
    prompt:
      'A master craftsperson\'s workbench with precise tools laid out in order, an open clockwork mechanism being fine-tuned under a magnifying lamp, ' +
      'and a laptop at the edge of the bench.',
  },
  'learning-paths/software-architecture-and-design-patterns': {
    ratio: '16/9',
    alt: 'A blueprint and a scale model of a building made from repeating modules on a drafting table',
    prompt:
      'An architect\'s drafting table with a detailed blueprint of a building made from repeating modular blocks, a scale model of interlocking modules beside it, ' +
      'and a compass and ruler under a warm desk lamp.',
  },
}

/**
 * Slots that sit side by side in one row or grid. In production a grouped slot
 * waits until every image in its group exists, so a half-filled grid never ships.
 */
export const imageSlotGroups = {
  // The hub hero and the featured path's cover stand alone, so they never hold the planned path covers back.
  learningPathCovers: Object.keys(imageSlots).filter(
    name => name.startsWith('learning-paths/') && name !== 'learning-paths/hub' && name !== 'learning-paths/learning-in-the-ai-era',
  ),
}

export type ImageSlotGroup = keyof typeof imageSlotGroups
