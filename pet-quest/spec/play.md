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

## Playing together

Two iPads can play the same level at once, one hero each. They see each other and race to
collect the snacks. **Play together** on the world map offers **Make a room**, which shows
a four-letter **room code**, and **Join a room**, where you type the code. Both heroes
can't be the same, so if both picked Ruby, whoever joins becomes Zachary. Each iPad
uses that hero's own save.

The **host**, the iPad that made the room, picks the level and starts it. The other iPad
waits on a "picking a level" screen. In the level:

- **Snacks are shared.** A snack, a treat box or a dropped snack belongs to whoever gets
  to it first, and it's gone on the other screen too. The HUD shows both counts.
- **Enemies are shared.** Either hero can stomp them, and Bandit's three stomps can come
  from either hero. Dug dirt and smashed blocks are gone for both.
- **Friends are each hero's own.** Each hero has their own friend following them and
  their own abilities. Friend blocks are solid only for a hero who has met that friend,
  and each hero meets a level's friend for themselves. Hearts, Zoomies and checkpoints
  are each hero's own too.
- Both start at the level's beginning. A hero who runs out of hearts goes back to their
  checkpoint, and the level carries on as it is.

Whoever reaches the goal first waits for the other. The level clear screen shows both
counts and who got the most snacks. Then the host picks **Next level**, **Again** or
**Levels**. If the host goes back mid-level, the other iPad goes back too. A guest who
goes back sits out the rest of that level.

If the guest leaves, the host's room stays open for someone else. If the host leaves, the
room closes, and the other iPad keeps playing alone, now moving the enemies itself. See
[details/network.md](details/network.md).
