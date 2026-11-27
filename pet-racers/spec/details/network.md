# Network details

## Finding each other

PeerJS's free public server (`0.peerjs.com`, the library default, no account) handles only
the handshake. The host registers the peer id `pet-racers-room-<CODE>`. Each guest gets a
random id and connects to the host. After that, data goes over WebRTC data channels
(reliable, JSON). If two rooms pick the same code, PeerJS answers `unavailable-id` and the
host picks another.

It's a star: guests connect only to the host, never to each other. The host passes along
whatever one guest says that others need. That keeps joining to one code and one
connection per guest.

The page is HTTPS on GitHub Pages, so a local `ws://` server isn't an option: Safari
blocks mixed content. WebRTC needs no server of our own.

If the public server proves flaky, run our own PeerJS-compatible signaling (a small
Cloudflare Worker) and pass its host to `new Peer()`.

## The roster

The host owns the roster: `[peer id, pet]` per person, host first, then guests in join
order, plus the track. It sends `roster` whenever someone joins, picks or leaves, or the
track changes. `start` carries the track too. Guests take their own
pet from it, so the host settles clashes by giving a clashing guest the first free pet.
The grid uses roster order, so every iPad builds the same grid. A guest connecting
mid-race or to a full room gets `no {why: busy | full}` and is closed.

## Who decides what

- **Each iPad drives its own racer.** Guests send `s {p}` about 15 times a second:
  position, heading, speed, steer, lap, track index, spin, brave, rush, then drift direction, spark level, height off the road (a hop plus a jump) and boost (older iPads ignore them). The host sends
  `s {all, rv}` to everyone: every person's latest `p` (its own included) and the rivals
  (track distance, lane, speed, spin, then which branch they're on and how far along it). Each iPad moves friends' karts toward their
  reported position, nudged forward by their speed, and snaps if it's more than 12 units
  off.
- **The host drives the rivals**, and picks which branches they take. Guests run them
  forward at their speed and ease toward each update, switching road when the host says
  so. Every iPad works out rivals' jumps for itself from where they are. Catch-up uses the average progress of everyone in the room.
- **A power's owner decides what it hits.** Effects are mirrored with `fx {o, k, ...}` (the
  owner's pet, then ring, ball, cake, plus, hack, flash, mind or peel; a ball or cherry
  also says which branch it was thrown on), and only the owner checks for hits. The host
owns the rivals' items: it decides when rivals use them, sends their `fx` like anyone's,
and checks what they hit, friends included. A hit on a
  friend, or on a rival when we aren't the host, is sent as `spin {who}`. The host applies
  rival spins and forwards every `spin`, `fx` and `gone` to the other guests. Each iPad
  acts only on a `spin` for its own pet.
- **Bumping**: each iPad pushes only what it drives. The host pushes rivals away from
  everyone.

## Messages

Guest to host: `hello {pet}`, `pick {pet}`, `s {p}`, `spin`, `fx`, `gone`, `bye`.
Host to guests: `roster {list}`, `no {why}`, `start`, `lobby`, `s {all, rv}`, `spin`,
`fx`, `gone`, `bye`.

## Leaving

`bye` is sent on Leave and on `pagehide`. Without it, 6 seconds of silence counts as
leaving. A guest who leaves is dropped from the roster, and their racer becomes a rival
from its last position. When the host leaves, each guest drops out of the room and drives
everyone else itself. "Pet left" or "The room closed" pops up.
