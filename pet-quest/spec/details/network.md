# Network details

This is the same approach as Pet Racers (`../pet-racers/spec/details/network.md`), cut down
to two iPads.

## Finding each other

PeerJS's free public server (`0.peerjs.com`, the library default, no account) handles only
the handshake. The host registers `pet-quest-room-<CODE>`, and the guest gets a random id
and connects to it. After that, messages go straight between the two iPads over a reliable
WebRTC data channel as JSON. If two rooms pick the same code, the host picks another. The
host turns away a second guest (`no {why: full}`) and anyone joining while it's in a level
or on the clear screen (`busy`).

## Who decides what

- **Each iPad moves its own hero.** In a level, both send `s {p}` about 15 times a second:
  position, pose, walk frame, facing, blink, Zoomies, float, snack count, whether the hero
  is out of play (dying or finished), and their friend's position and frame. The other
  iPad glides the hero toward it and snaps after a jump of more than 3 tiles.
- **The host runs the enemies.** They react to the nearest hero and wake up near either
  hero. The host's `s` also carries `en`: every living enemy's position, velocity,
  facing, timer, state, Bandit's hearts, a raccoon's sack and the sprinkler's spray. The
  guest glides its enemies toward these. An enemy missing from the list is gone.
- **Touches are checked by the hero's own iPad**, against the enemies as it sees them. A
  defeat is sent as `kill {i, text}`. A guest's stomp on Bandit is sent as `bhit {i}`, and
  the host counts his hearts and sends `boss` when he runs off.
- **Whoever grabs something first gets it**: `take {i}` (a level snack), `takel {id}` (a
  dropped snack), `box {tx, ty}` (a bumped treat box, whose snacks and item went to the
  bumper), `tile {tx, ty}` (dug or smashed). Only the host drops loot, as `loot`, with ids.
  If both grab the same snack within a few hundredths of a second, both count it.

Messages inside a level carry `r`, which level start they belong to. Messages from an
earlier start are ignored.

## Messages

- Guest to host: `hello {hero, friends}`
- Host to guest: `room {host, you, friends}`, `no {why}`, `start {id, run}`, `lobby`
- Both ways: `s`, `take`, `takel`, `box`, `tile`, `kill`, `done {snacks, quit}`, `hi`,
  `bye`
- Guest to host only: `bhit`. Host to guest only: `loot`, `boss`.

## Leaving

`bye` is sent on Leave and on `pagehide`. Without it, 6 seconds of silence counts as
leaving. Outside a level, the iPads send `hi` every second so the quiet doesn't look like
a drop. `autoUpdateIsIdle` holds reloads while a room is open.
