# Pet Quest plan

The spec in [README.md](README.md) describes the finished game. This file is what's left to
build to match it, in order. Milestones 1–3 and Later are built; what's left is playing it
on the iPad and tuning.

## Before you start

Read `README.md` and everything it links (about 2,000 words). Then:

- **Repo layout.** This repo is a GitHub Pages site: `https://drewag.github.io/games/`.
  Each game is a folder with one self-contained `index.html` (no build step, no
  dependencies). Pushing to `main` deploys in about a minute. The root `index.html` is the
  games home page and lists games in its `GAMES` array.
- **Copy from Snack Attack; don't share code with it.** `../snack-attack/index.html` already
  has, ready to copy:
  - `makeSprite` and `sprite()`: pixel art with the marker outline, cached per size
  - `PAL`, `PETS` (the five pets' rows), `SNACKS` (cookie, granola, applesauce, goldfish,
    heart)
  - `walkRows`: the pets' two-step walk
  - `Grid`, `SCENES`, `buildScene`: the Meadow, Kitchen, Night and Beach backgrounds
  - `tone` and `SFX`, `burst` and `pop` (particles and floating text), `outlinedText`,
    `drawTitle`, `HOUSE` and `drawHomeButton`, and safe-area handling in `resize`
- **The heroes are already drawn.** `art/avatars.html` holds Ruby and Zachary: hand-drawn
  front views, side-view heads and bodies, and `sideFrame()`, which generates the six-frame
  walk. Open it in a browser to see them walking. Copy the sprite data and `sideFrame` into
  the game. There's no jump pose yet. Make one with `sideFrame`'s limb code: knees tucked,
  arms up.
- **Keep all game code inline in `index.html`.** The shared `../auto-update.js` reloads the
  app when the page's inline `<script>` and `<style>` text changes. Code in a separate
  `.js` file would never trigger an update on the iPad. Define `window.autoUpdateIsIdle`
  so it never reloads mid-level.
- **Every game page includes** the head tags and closing script from Snack Attack:
  `../manifest.webmanifest`, `../icon-180.png` as `apple-touch-icon`, and
  `<script src="../auto-update.js"></script>` at the end of `<body>`.
- **Testing.**
  - The target is an iPad in landscape. Emulate `1180x820x2,mobile,touch,landscape` and
    also check a phone in landscape (`844x390x3,mobile,touch,landscape`).
  - Serve the repo root over HTTP for testing: `python3 -m http.server`, then open
    `/pet-quest/`. Opening the file directly (`file://`) blocks `auto-update.js`'s fetch.
  - Drive the game from the console, like Snack Attack's tests did: set state, teleport
    the hero, then screenshot.
  - Check each milestone by playing, not just by reading the code.

## 1. Feels good to run and jump

Done when a kid can run and jump around a small test room on the iPad and it feels
responsive.

- [x] `pet-quest/index.html` with the shared head tags, `auto-update.js`, and a house button
      back to `../`
- [x] Level loader for the text-grid format in `spec/levels.md`; tile renderer; camera that
      follows the hero sideways and eases vertically
- [x] Hero movement and collision with the values in `spec/details/feel.md`, including
      coyote time, jump buffer and variable jump height
- [x] Touch buttons (Left, Right, Jump) tracked by touch position with multi-touch; a thumb
      sliding between buttons works. Arrow keys and space on desktop.
- [x] Ruby and Zachary sprites in game: idle, six-frame walk timed to speed, jump, facing
      left by mirroring
- [x] Hero select screen (front views) remembering the last choice

## 2. Level 1-1 playable

Done when "Over the Fence" can be played start to finish as either hero, including meeting
Fluff Puff.

- [x] Tiles: ground, one-way platforms, treat boxes (bump from below), snacks, checkpoint,
      goal
- [x] Dust Bunny and Flea, stomping with the generous rule in `spec/details/feel.md`
- [x] Hearts, blinking safety, pit respawn on last safe ground, checkpoint restart at 0
      hearts, every 50 snacks refills a heart
- [x] Zoomies
- [x] Friend blocks (dotted when the friend isn't met yet, solid once they are)
- [x] Meet Fluff Puff: "Fluff Puff joined!" moment, white blocks go solid, Bunny hop on,
      Fluff Puff follows the hero
- [x] Build "Over the Fence" following the beats in `spec/levels.md`, on the Meadow
      background
- [x] Goal tally screen
- [x] Add Pet Quest to `GAMES` in the root `index.html`, and update the root `README.md`
      table

## 3. Saving and the rest of world 1

- [x] Separate saves for Ruby and Zachary in `localStorage`
- [x] Level select for world 1
- [x] Bath Bubble
- [x] Levels 1-2 to 1-4, each teaching one thing with the recipe in `spec/levels.md`
- [x] Bandit boss fight

## Later

- [x] Worlds 2–5 with Buddy, Mango, Mongo and Choco, and their abilities: Down button, Dig,
      Ground pound, Wall cling, Float
- [x] Vroomba, Sprinkler, Bandit's gang
- [x] World 6: Bandit's hideout
- [x] World map
- [x] Playing together: two iPads in one level through a room code, shared snacks and
      enemies, each hero with their own friends

## Next

- [ ] Play every level on the iPad with both heroes; tune `FEEL` and enemy speeds from
      what the kids actually do
- [ ] Check `auto-update.js` reloads between levels on the installed home-screen app
- [ ] Play together on two real iPads: check enemies look smooth on the guest and that
      grabbing snacks feels fair
