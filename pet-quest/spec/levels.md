# Levels

A **level** is a single screen-height course that scrolls sideways from a start to a
**goal** (a garden gate). Levels are grouped into **worlds** of four, each with its own look
built from the Snack Attack backgrounds. The friend for a world hides in its first level, and
Bandit waits at the end of its fourth.

| World | Look | Friend | New things |
|---|---|---|---|
| 1 | Meadow | Fluff Puff | Dust Bunny, Flea, Bath Bubble |
| 2 | Kitchen | Buddy | Vroomba (jump over it), soft dirt |
| 3 | Night Garden | Mango | Sprinkler, cracked blocks |
| 4 | Beach | Mongo | Bandit's gang |
| 5 | Sunset Hill (the Meadow at dusk) | Choco | |
| 6 | Bandit's Hideout (a cave) | | everything together |

All levels are original. We borrow the teaching structure of classic platformers, not their
layouts.

## How a level is written

Levels are text grids, one character per tile, the same way the pets are drawn. A level is
14 tiles tall and as long as it needs to be. A shortened example:

```
..............................................
.........sss..................................
.......BBBBB.........?........................
..........................1.1.1...............
..H...........d.......######.........C.......G
##############################...#############
```

| Char | Tile |
|---|---|
| `#` | ground |
| `=` | one-way platform (jump up through it, stand on top) |
| `B` | treat box |
| `?` | treat box holding a heart or Zoomies (a heart if the hero is hurt; a level can name one) |
| `s` | snack |
| `1`–`5` | friend block, numbered in the order friends are met (`1` is Fluff Puff's white) |
| `:` | soft dirt (Dig) |
| `%` | cracked block (Ground pound) |
| `d` `f` `b` `v` `~` | Dust Bunny, Flea, Bath Bubble, Vroomba, Sprinkler |
| `R` | one of Bandit's gang |
| `X` | Bandit; the goal stays locked until he's beaten |
| `H` | hero start |
| `C` | checkpoint |
| `F` | friend to meet |
| `G` | goal |

Anything not in the table is empty.

## Designing a level

Each level teaches one new thing using the same recipe:

1. **Show it safely.** The new thing appears where it can't hurt you.
2. **Use it with a little risk.**
3. **Combine it** with something already learned.
4. **Twist it** once near the end, with a bonus for doing it well.

Difficulty targets the 7-year-old. Pits are at most 3 tiles wide, and an enemy is never
placed where it arrives on screen faster than the hero can react. Abilities, like friend
blocks, only ever lead to bonuses, so every level can be finished with no friends met.

Soft dirt and cracked blocks with snacks under them sit in raised mounds, never in the
floor: there are only two rows below the hero's feet, so a hole dug in the floor drops the
hero out of the level.

## Level 1-1: "Over the Fence" (Meadow)

This level teaches running, jumping and stomping, and introduces the first friend.

1. **Start.** Flat lawn, no enemies, a short arc of snacks that is collected by jumping.
2. **First Dust Bunny.** It rolls in slowly on flat ground, with plenty of room. A treat
   box sits above it, inviting a jump.
3. **Treat boxes.** A row of boxes; the middle one holds Zoomies.
4. **Small gaps.** Two 1–2 tile gaps, then fence posts of rising height.
5. **Checkpoint.**
6. **Mixing.** Dust Bunnies on raised platforms, a 3-tile gap with a one-way platform
   above it, and the first Fleas.
7. **Fluff Puff.** Hiding in a bush on a hill. Walking up to her plays a short
   "Fluff Puff joined!" moment, the white friend blocks in the level turn solid, and Bunny
   hop is on.
8. **Twist.** A white-block staircase that is now solid and a ledge only Bunny hop can
   reach. Both lead to a hidden snack area that rejoins the path.
9. **Goal.** The garden gate, then a tally of snacks collected.
