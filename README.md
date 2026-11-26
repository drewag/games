# Games

Little touch-friendly browser games, playable at https://drewag.github.io/games/

Each game lives in its own folder as a self-contained `index.html` (no build step, no dependencies):

| Game | Folder | Play |
|---|---|---|
| Snack Attack | [`snack-attack/`](snack-attack/) | https://drewag.github.io/games/snack-attack/ |
| Pet Quest | [`pet-quest/`](pet-quest/) | https://drewag.github.io/games/pet-quest/ |
| Pet Racers | [`pet-racers/`](pet-racers/) | https://drewag.github.io/games/pet-racers/ |

## Adding a game

1. Create a folder, e.g. `my-game/`, with an `index.html`. In its `<head>`, link the shared
   `../manifest.webmanifest` and `../icon-180.png` (as `apple-touch-icon`), and at the end of
   `<body>` include `<script src="../auto-update.js"></script>`. Give it a way back to `../`.
2. Add an entry to the `GAMES` list in the root `index.html` (title, path, blurb, color, pixel-art icon).
3. Push to `main`; GitHub Pages redeploys in about a minute.

## Home screen app

The site is meant to be added to an iPad/iPhone home screen from https://drewag.github.io/games/
(Safari → Share → Add to Home Screen). There's no browser chrome there, so:

- **Navigation**: each game links back to the games list.
- **Updates**: `auto-update.js` checks for a newer published copy of the page when the app opens,
  when it returns to the foreground, and every 5 minutes, then reloads. Games can define
  `window.autoUpdateIsIdle()` to hold the reload until it's safe (Snack Attack waits until
  you're not mid-game).
