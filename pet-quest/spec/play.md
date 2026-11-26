# How it plays

Pet Quest is a side-scrolling platformer in the style of the SNES Mario games: run, jump,
stomp, reach the goal. The hard parts of that genre are softened for a 7-year-old: there are
no lives and no game over.

## Controls

The game is played in landscape on an iPad. On-screen buttons sit under the thumbs:

- **Left / Right**, bottom-left
- **Jump**, bottom-right. Holding it longer jumps higher.
- **Down**, beside Jump. It appears once a friend gives an ability that uses it (Dig,
  Ground pound).

Buttons are large and react to a thumb sliding onto them, not just tapping. Arrow keys and
space work on a computer.

Movement favors the player over strict physics. A jump still works a moment after running
off a ledge, and a jump pressed just before landing still happens. See
[details/feel.md](details/feel.md) for the numbers.

## Hearts, falling and checkpoints

The hero has **3 hearts**, shown in the top corner like Snack Attack.

- Touching an enemy, a sprinkler's water, or other hazards costs a heart and gives a moment
  of blinking safety.
- **Falling into a pit costs a heart** and puts the hero back on the last solid ground
  they stood on, not at a checkpoint.
- At 0 hearts, the hero goes back to the last **checkpoint** with full hearts. Snacks
  already collected stay collected. There is no game over and no lives counter.

Each level has a checkpoint about every 30–40 seconds of play.

## Snacks and treat boxes

**Snacks** (cookies, granola bars, apple sauce, goldfish) float in the air and spill out of
**treat boxes**, which the hero bumps from below. Snacks are the score. Every 50 snacks
refills a heart.

Treat boxes sometimes hold a **heart** or the one power-up, **Zoomies**: a few seconds of
running faster and defeating enemies by touching them, with sparkles.

## Friend blocks

Each level contains **friend blocks** in the five friend colors. Before a friend is met,
their blocks are dotted outlines that the hero passes through. After, they are solid. They
lead to shortcuts, bonus snacks and hidden areas, never to the only way forward, so every
level can be finished with no friends met.

## Saving

Progress saves on the device after every level and checkpoint, separately for Ruby and
Zachary: friends met, levels finished, and snacks collected per level. The start screen
shows both heroes with their progress.
