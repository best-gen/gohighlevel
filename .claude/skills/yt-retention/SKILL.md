---
name: yt-retention
description: Diagnose audience-retention problems in a script or retention-graph data and propose specific fixes to reduce drop-off. Use when the user asks about retention, watch time, drop-off, or "/yt-retention".
---

# YouTube Retention Analysis

Find where viewers will (or did) leave, and fix it — don't just give general retention tips.

## Inputs

- A script/transcript, and/or
- Retention graph data/description (timestamps and % drop, biggest cliffs, replay spikes)

## Process

1. **If given a script**: walk it beat by beat and flag every point likely to cause drop-off:
   - Slow/generic intros before the hook lands
   - Long setup or throat-clearing before value starts
   - Repeated points or padding
   - Tone/pace lulls (a long unbroken talking segment)
   - Missing "open loops" that would otherwise pull viewers forward
   For each flagged spot, give the specific line/beat and a concrete rewrite or structural fix (cut it, move it later, add a teaser earlier, insert a pattern interrupt).

2. **If given retention-graph data**: identify the biggest cliffs and any replay spikes. For each cliff, reason about what's likely happening at that timestamp (intro length, a slow section, a sponsor read, an unmet promise from the title/thumbnail) and propose a fix. Replay spikes indicate high-value moments — suggest surfacing that content earlier or reusing it as a hook in future videos.

3. Always check whether the **title/thumbnail promise is paid off early** — a top cause of early drop-off is the video not addressing what got the click within the first 30–60 seconds.

## Output

A prioritized list: biggest predicted/observed drop-off points first, each with a one-line diagnosis and a specific, actionable fix.
