# Publishing lesson media

Use this workflow to publish existing NotebookLM videos, audio, slides, and infographics and connect them to an LMS lesson. The operational commands and machine-specific troubleshooting are in the gitignored `dev-op/mcp/publishing.md` runbook. Account details and session tokens belong only in that local folder.

## Identify the lesson and destinations

Read the notebook's selected sources and Studio items before choosing a lesson. A notebook title can describe the whole course while its current source belongs to a particular lesson. Match that source to the lesson under `app/data/courses/`, then identify the existing YouTube channel, Spotify show, and public course asset repository from adjacent releases.

Download the existing short video, full video, audio overview, slide PDF, and infographic. Keep working downloads and publishing records in the gitignored DevOps folder. Do not generate replacement media when the notebook already contains the requested assets.

## Titles

Use the lesson's exact `title` from its LMS source file as the public title of both YouTube videos and the Spotify episode. Preserve its wording, punctuation, and capitalisation. Do not substitute a NotebookLM-generated title or append a course name, subtitle, or format suffix. Distinguish the full video, short video, and podcast in their descriptions and format labels.

For this release, all three public titles are exactly **Summary and Takeaway**. Verify the saved titles against the lesson after publishing or editing.

## Descriptions and artwork

Read a recent release from the same course on both YouTube and Spotify before preparing descriptions. The established pattern is:

1. Open with a question or concrete problem relevant to the lesson.
2. Explain what the episode or video covers and identify the course or module.
3. Give specific learning takeaways, with clear labels. Spotify supports a formatted bullet list.
4. Include a reflection question when it fits the lesson.
5. Link directly to the original lesson and to `https://dojo.skill-wanderer.com`.
6. Cross-link the short and full videos where useful.
7. Disclose NotebookLM-generated narration and visuals. Set platform disclosure fields according to the actual content.

Use timestamps only after checking them against the actual recording. Keep claims within the lesson and recording, and preview the saved description to check paragraph breaks and clickable links.

Select artwork from the matching lesson. Prefer its existing landscape hero for YouTube and an existing square variant for the Spotify episode cover. Inspect the actual files before uploading. Check the final hosted thumbnails and cover after saving; YouTube Shorts may crop artwork differently from a landscape video. Keep the downloaded infographic as the infographic rather than substituting it for the selected cover artwork.

## Publish and verify

Upload the two videos through the configured publishing MCP. Record the media and draft IDs before publishing so a retry does not create duplicates. When publishing is already authorized, queue the prepared drafts and check their final status. An accepted upload or queued job is not proof of publication: verify that YouTube reports public visibility, completed processing, and embedding enabled.

Upload the audio overview to the matching Spotify for Creators show. Complete the description, episode cover, content declarations, and release settings, then publish. Verify the published episode and read back its saved description and cover. Edit that episode when correcting metadata instead of uploading another copy.

Push the PDF and infographic to the matching public course repository in a folder named for the lesson slug. Inspect the files before pushing and confirm their public URLs return the expected file types. Keep these asset commits separate from unrelated LMS changes.

## Connect the LMS lesson

Follow adjacent lesson conventions:

| Format | Integration | Direct fallback |
| --- | --- | --- |
| Full and short video | Titled `https://www.youtube-nocookie.com/embed/<id>` iframes in the Video tab | Public YouTube watch links |
| Podcast | Titled `https://open.spotify.com/embed/episode/<id>` iframe | Spotify episode link |
| Slides | Titled PDF iframe using the public course repository's jsDelivr URL | Open PDF link |
| Infographic | Responsive image with descriptive alt text using its jsDelivr URL | Open full size link |

Replace the relevant production placeholders, update the format notice, and set `updatedAt`. Preserve the reading material, quiz, lesson status, and any existing release schedule. Review the current CSP before introducing a new host.

Run `npm run build` and a scoped `git diff --check`. In a browser, open each format tab, confirm the expected media IDs and image loading, and check narrow screens for horizontal overflow. Check external media publication separately from the local build.

Record whether asset commits are pushed, whether the LMS source is committed, and whether the website is deployed. If a website deployment is included in the task, also verify the actual public lesson after rollout.

## Release record: Summary and Takeaway

Published and checked on **11 November 2026, Asia/Saigon**.

- Course: **How to Become Your Own Teacher: Learning How to Learn**.
- Lesson: **Summary and Takeaway**, Module 1.
- Source: [NotebookLM notebook](https://notebook.google.com/notebook/5d05dae0-366b-403a-b86e-09e72641f4e6), whose selected source was the Summary and Takeaway lesson.
- LMS file: [summary-and-takeaway.ts](../app/data/courses/how-to-become-your-own-teacher-learning-how-to-learn/module-1-the-importance-of-learning/summary-and-takeaway.ts).

| Asset | Published destination |
| --- | --- |
| Full video: Summary and Takeaway | [YouTube](https://www.youtube.com/watch?v=38LBMJsVvK4) |
| Short video: Summary and Takeaway | [YouTube Shorts](https://www.youtube.com/shorts/NuswClWuKTI) |
| Podcast: Summary and Takeaway | [Spotify](https://open.spotify.com/episode/0FfGLSvDFfV013Vy1PT77f) |
| Slides: Weighing Anchor, 12 pages | [PDF](https://cdn.jsdelivr.net/gh/skill-wanderer/How-to-Become-Your-Own-Teacher-Learning-How-to-Learn@main/summary-and-takeaway/Becoming_Your_Own_Teacher.pdf) |
| Infographic: Becoming Your Own Teacher | [PNG](https://cdn.jsdelivr.net/gh/skill-wanderer/How-to-Become-Your-Own-Teacher-Learning-How-to-Learn@main/summary-and-takeaway/Becoming_Your_Own_Teacher_Infographic.png) |

The PDF and PNG were pushed to the [public course asset repository](https://github.com/skill-wanderer/How-to-Become-Your-Own-Teacher-Learning-How-to-Learn/tree/main/summary-and-takeaway) in commit [eb3a78d](https://github.com/skill-wanderer/How-to-Become-Your-Own-Teacher-Learning-How-to-Learn/commit/eb3a78dd79c8347aa996fdd0681e4cf911634664).

Both YouTube thumbnails use [summary-hero.png](../public/images/lessons/own-teacher/summary-hero.png). Spotify uses [summary-hero-square.png](../public/images/lessons/own-teacher/summary-hero-square.png). Descriptions were expanded after comparison with the previous course release, and the saved artwork was downloaded again for visual inspection.

Verification completed:

- Both YouTube videos were public, processed, and embeddable.
- Spotify showed the episode as published, with its revised description and lesson cover saved after reload.
- The Spotify embed, slide PDF, and infographic returned HTTP 200 with the expected content types.
- The production build and scoped whitespace check passed.
- All five lesson format tabs displayed at 390px without horizontal overflow. The infographic loaded at 2752 x 1536.

**Status at handoff:** the external media is published and the asset repository commit is pushed. The LMS source update remains local and uncommitted; the website has not been deployed with these changes. Local receipts, media IDs, downloads, and logs are under `dev-op/mcp/notebook-summary/`.
