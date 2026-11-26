# Network details

## Finding each other

PeerJS's free public server (`0.peerjs.com`, the library default, no account) handles only
the handshake. The host registers the peer id `pet-racers-room-<CODE>`. The other iPad
gets a random id and connects to that one. After that, data goes over a WebRTC data
channel (reliable, JSON). If two rooms pick the same code, PeerJS answers `unavailable-id`
and the host picks another.

The page is HTTPS on GitHub Pages, so a local `ws://` server isn't an option: Safari
blocks mixed content. WebRTC needs no server of our own.

If the public server proves flaky, run our own PeerJS-compatible signaling (a small
Cloudflare Worker) and pass its host to `new Peer()`.

## Who decides what

- **Each iPad drives its own racer** and sends `s` about 15 times a second: position,
  heading, speed, steer, lap, track index, spin, brave, rush. The other iPad moves the
  friend's kart toward that position, nudged forward by its speed, and snaps if it's
  more than 12 units off.
- **The host drives the rivals** and adds them (`rv`: track distance, lane, speed, spin)
  to its `s`. The other iPad runs them forward at their speed and eases toward each update.
  Catch-up uses the average progress of both people.
- **A power's owner decides what it hits.** Effects are mirrored with `fx` (ring, ball,
  cake) so both iPads see them, and only the owner checks for hits. A hit on the friend,
  or on a rival when we aren't the host, is sent as `spin` to whoever drives that racer.
  The owner sends `gone` when a ball or cake is used up.
- **Bumping**: each iPad pushes only what it drives. The host pushes rivals away from both
  people.
- **Grid order** is rivals, then host, then guest, so both iPads build the same grid.

## Messages

`hello {pet}`, `pick {pet}`, `start`, `lobby`, `s {p, rv?}`, `spin {who, text}`,
`fx {k, ...}`, `gone {id}`, `bye`.

## Leaving

`bye` is sent on Leave and on `pagehide`. Without it, 6 seconds of silence counts as
leaving. Either way, the friend's racer becomes a rival from its last position, this iPad
drives every rival from then on, and "Your friend left" pops up.
