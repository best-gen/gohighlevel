---
name: yt-chapters
description: Generate YouTube video chapters/timestamps from a script or transcript. Use when the user asks for timestamps, chapters, or "/yt-chapters".
---

# YouTube Chapters / Timestamps

Produce YouTube-compliant chapter markers from a script or transcript (with timings) or from a described video structure.

## Requirements for valid YouTube chapters

- First chapter **must start at 0:00**.
- At least 3 chapters, each at least 10 seconds long.
- Chapters must be in chronological, ascending order.
- Format: `0:00 Chapter Title` (or `h:mm:ss` for videos over an hour), one per line.

## Process

1. If given a transcript/script with timings, identify natural topic/section breaks — not arbitrary intervals. A new chapter should start where the content genuinely shifts focus (new topic, new step, a turn in the story).
2. If no timings are given, work from the script's beat structure and either estimate timestamps (state clearly that they're estimates the user must verify against the final edit) or output chapter titles only, in order, and ask for timings.
3. Write chapter titles that are short, specific, and scannable (3–6 words) — a viewer should be able to jump to the right one from the title alone. Avoid vague labels like "Part 2" or "More tips".

## Output

A ready-to-paste list in the exact `0:00 Title` format, plus a one-line note if any timestamps are estimated rather than confirmed.
