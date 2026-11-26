# Movement feel

Numbers are in tiles and seconds. A tile is 16 art pixels; Ruby is 16×30 art pixels and
Zachary 16×26 (both under 2 tiles tall); a pet is about 12×12. The camera shows 14 tiles of
height, so a tile on an iPad in landscape is roughly 55 screen pixels.

## Starting values

These are tuned by playing, not by spec. They're a starting point that feels like SNES
Mario at a slower pace.

| Value | Start at |
|---|---|
| Run speed | 6 tiles/s (Zoomies: 9) |
| Acceleration / slowdown | reach full speed in 0.15 s, stop in 0.1 s |
| Jump height, tap | 2 tiles |
| Jump height, held | 4 tiles (Bunny hop: 5.5) |
| Gravity on the way down | 1.6× gravity on the way up |
| Max fall speed | 18 tiles/s (Float: 2) |
| Coyote time (jump after leaving a ledge) | 0.1 s |
| Jump buffer (jump pressed before landing) | 0.12 s |
| Stomp bounce | 2.5 tiles (Bath Bubble: 6) |
| Blinking safety after a hit | 1.5 s |

## Things that are easy to get wrong

- **Stomp means falling onto the enemy's top half**, not "hero's feet above enemy's
  center". Kids land on enemies at odd angles, so be generous.
- **Pit respawn uses the last *safe* ground**, not the last ground. Edges of moving
  platforms and spots next to enemies don't count, or the hero respawns into danger.
- **Wall cling only triggers when pushing into the wall**, otherwise brushing past a wall
  in mid-jump sticks to it.
- **Buttons work by touch position, not by tap events.** A thumb rolling from Right onto
  Jump must keep running and also jump. Multi-touch is required.
