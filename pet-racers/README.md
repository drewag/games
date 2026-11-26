# Pet Racers

A kart racer for Ruby (9) and Zachary (7). You pick one of the five pets from the
character cards and race the other four around a neighborhood track. Each pet drives a kart
made from their favorite food and has one **power** taken from their card.

It's the third game in this repo, after [Snack Attack](../snack-attack/) and
[Pet Quest](../pet-quest/). Unlike those, it's 3D (three.js), drawn to look like the cards:
chunky models built from the square drawings, brown marker outlines, and colored pencil on
paper.

## The spec

1. [The racers](spec/racers.md): the five pets, their karts and powers
2. [How it plays](spec/play.md): picking a pet, controls, a race, snacks, spinning out
3. [The look](spec/look.md): how the drawings become 3D and why it looks hand-drawn

Terms are listed in [vocabulary](spec/vocabulary.md). What's left to build is in
[plan.md](plan.md).

## Files

- `index.html`: the whole game, inline (the shared `../auto-update.js` watches inline
  code for changes)
- `cards/`: scans of the five character cards, shown on the pick screen
- `vendor/`: three.js r187, unmodified (MIT, see `vendor/three-LICENSE`), loaded with an
  import map so there's still no build step and it works offline

Add `?angle=0` to the URL to freeze the title camera, which helps with screenshots.
