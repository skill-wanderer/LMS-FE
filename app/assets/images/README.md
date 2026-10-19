# AI image slots

Images saved here fill the image slots on the Dojo. No code changes needed.

1. Run `npm run dev` and browse the site. Each empty slot shows a dashed box with its file name, size and prompt.
2. Click **Copy full prompt** and paste it into your image generator. The prompt already includes the house style, so the set stays consistent.
3. Save the result here under the slot name. For example, slot `learning-paths/hub` becomes `app/assets/images/learning-paths/hub.webp`. PNG, JPG and AVIF also work.

Every slot and prompt is listed in `app/data/image-slots.ts`, if you'd rather work through the list.

## Where the slots are

- `learning-paths/hub`: the hero of the Learning Paths page.
- `learning-paths/learning-in-the-ai-era`: the featured path's cover, on the home page, the Learning Paths page, the search page and the path's own page.
- `learning-paths/<path slug>`: one cover for each of the 12 planned paths, on its card and on its own page.

## Good to know

- **Same slots as skill-wanderer.com.** The slot names, prompts and house style match the main site, so the images in its `assets/images/learning-paths/` folder fit here as they are.
- **Keep files small.** Convert to WebP and aim for under 250 KB each. Generators often export 2 to 4 MB PNGs, which would slow the site down.
- **Production never shows an empty slot.** Until an image exists, the live site simply leaves it out.
- **The planned path covers go live together.** The 12 cards on the Learning Paths page only show covers in production once all 12 images are here, so the grid never looks half-finished. Single images, such as the hub hero, the featured path's cover and the cover at the top of each path's own page, go live as soon as they exist.
