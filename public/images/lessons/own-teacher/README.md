# Module 1 lesson images — generation checklist

20 AI-generated images for *How to Become Your Own Teacher*, Module 1.

Every lesson currently points at `/images/courses/placeholder.svg`. Generate an image,
drop the file in this folder under the exact name below, then change that one `src` in
the lesson file. Nothing else needs editing — the `<figure>`, alt text and caption are
already written.

## House style (prepend to every prompt)

> Flat vector editorial illustration, 16:9. Palette: deep navy `#1a1a2e` background,
> warm orange `#ff6b35` accent, off-white linework. Clean geometric shapes, generous
> negative space, NO text or lettering anywhere in the image.

The "no text" instruction matters — image models render lettering badly, and any text
baked into the image cannot be translated or read by a screen reader.

## The list

Each lesson file contains the full scene prompt in an HTML comment directly above its
`<figure>`. This table is the index.

| # | File name | Lesson | Shows | Status |
| --- | --- | --- | --- | --- |
| 1 | `own-teacher-hero.png` | What It Means to Become Your Own Teacher | One person on both sides of the desk | ✅ Generated |
| 2 | `own-teacher-seven-jobs.png` | " | Seven teacher duties in a ring | ✅ Generated |
| 3 | `own-teacher-the-test.png` | " | Signpost whose three arms point back at you | ✅ Generated |
| 4 | `formal-education-hero.png` | Formal Education Can Only Take You So Far | Broadcast tower over rows of identical figures | ✅ Generated |
| 5 | `formal-education-broadcast-vs-stream.png` | " | Fixed schedule versus on-demand grid | ✅ Generated |
| 6 | `formal-education-ninety-seconds.png` | " | Clock face sliced thirty ways | ✅ Generated |
| 7 | `changing-world-hero.png` | The World Will Not Stop Changing | Figure steady while the ground shifts | ✅ Generated |
| 8 | `changing-world-three-tiers.png` | " | Three strata eroding at different rates | ✅ Generated |
| 9 | `changing-world-diploma-snapshot.png` | " | Framed photo no longer matching the view | ✅ Generated |
| 10 | `nobody-coming-hero.png` | Nobody Is Coming to Teach You | Figure at the edge of the charted map | ✅ Generated |
| 11 | `nobody-coming-what-expert-sells.png` | " | Compression, correction, pruning | ✅ Generated |
| 12 | `nobody-coming-asking-well.png` | " | A vague question ignored, a specific one answered | ✅ Generated |
| 13 | `more-fun-hero.png` | It Is More Productive, and It Is More Fun | Toolkit of learning methods | ✅ Generated |
| 14 | `more-fun-method-tradeoffs.png` | " | Row of scales, each tipping differently | ✅ Generated |
| 15 | `more-fun-episode-four.png` | " | Episode four first, then back for two | ✅ Generated |
| 16 | `captain-hero.png` | There Is No Deadline: You Are the Captain | Small ship breaking away from the liner | ✅ Generated |
| 17 | `captain-navigation-loop.png` | " | Compass rose with a four-step cycle | ✅ Generated |
| 18 | `captain-storms.png` | " | Ship holding course through weather | ✅ Generated |
| 19 | `summary-hero.png` | Summary and Takeaway | Chart of the route past six waypoints | ✅ Generated |
| 20 | `summary-one-to-one.png` | " | One teacher for thirty, one teacher for one | ✅ Generated |

## Square Hero Images (1:1)

1:1 square versions of each lesson's hero image for cards, social sharing, and square thumbnail displays.

| # | File name | Lesson | Status |
| --- | --- | --- | --- |
| 1 | `own-teacher-hero-square.png` | What It Means to Become Your Own Teacher | ✅ Generated (1024×1024) |
| 2 | `formal-education-hero-square.png` | Formal Education Can Only Take You So Far | ✅ Generated (1024×1024) |
| 3 | `changing-world-hero-square.png` | The World Will Not Stop Changing | ✅ Generated (1024×1024) |
| 4 | `nobody-coming-hero-square.png` | Nobody Is Coming to Teach You | ✅ Generated (1024×1024) |
| 5 | `more-fun-hero-square.png` | It Is More Productive, and It Is More Fun | ✅ Generated (1024×1024) |
| 6 | `captain-hero-square.png` | There Is No Deadline: You Are the Captain | ✅ Generated (1024×1024) |
| 7 | `summary-hero-square.png` | Summary and Takeaway | ✅ Generated (1024×1024) |

## Notes

- **Format.** PNG is assumed in the placeholders. WebP is smaller and well supported —
  if you use it, update the extension in both the file name and the `src`.
- **Size.** Target roughly 1600×900. The lesson CSS caps display width, so anything
  larger is wasted bytes.
- **Alt text is already written** and describes the intended image, not the placeholder.
  If a generated image ends up different from the prompt, update the alt text to match
  what the image actually shows.
- **Consistency beats individual quality.** These are read in sequence, so generate them
  in one session with the same model and settings if you can.

## Infographic tab (separate, later)

Each lesson now has an **Infographic** tab alongside Reading, Video, Audio and Slides.
That tab is a different job from the 20 images above: one page that carries the whole
lesson on its own, for someone who wants the argument without the prose. The 20 images
above stay where they are, inline in the Reading tab.

Seven files, one per lesson. The `<figure>` is already written inside each lesson under
`data-content="infographic"` — it is commented out, so uncomment it and set the file name.

| Lesson | Suggested file name |
| --- | --- |
| What It Means to Become Your Own Teacher | `infographic-own-teacher.png` |
| Formal Education Can Only Take You So Far | `infographic-formal-education.png` |
| The World Will Not Stop Changing | `infographic-changing-world.png` |
| Nobody Is Coming to Teach You | `infographic-nobody-coming.png` |
| It Is More Productive, and It Is More Fun | `infographic-more-fun.png` |
| There Is No Deadline: You Are the Captain | `infographic-captain.png` |
| Summary and Takeaway | `infographic-summary.png` |

These are the one exception to the no-text rule, since an infographic without labels is
just a picture. That makes them a poor fit for image generation — a text-to-image model
will produce convincing-looking gibberish lettering. Build them in a design tool, or
generate the artwork and set the text over it afterwards.

Portrait or tall formats work better here than 16:9, and the lesson CSS will scale them
to fit.
