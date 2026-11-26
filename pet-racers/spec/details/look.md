# Rendering details

## Three passes

1. **Color**: every mesh uses one `ShaderMaterial` (`sketchMat`). It reads vertex colors,
   picks a toon band from `dot(normal, LIGHT)`, multiplies in hatching from the strokes
   texture, and fades to paper by distance (90–330 units).
2. **Edges**: the scene again, with `scene.overrideMaterial = edgeMat`, into a target with
   a depth texture. RG = view-space normal, BA = vertex color red and green.
3. **Composite**: a full-screen pass finds lines where the depth, normal or color changes
   across a pixel, darkens them to the ink color, and adds paper grain and the sky.

Things drawn on layer `LAYER_NO_EDGES` (the soft shadows) are skipped in pass 2.

## Gotchas

- **Color management is off** (`THREE.ColorManagement.enabled = false`, linear output).
  Hex colors go straight to the screen. Turning it back on washes everything out.
- **Depth lines use the second difference of 1/z.** 1/z is linear across a flat surface on
  screen, so the road and ground don't light up as one big edge at a grazing angle.
- **Winding matters even with `DoubleSide`.** The shader flips normals on back faces, so a
  surface wound the wrong way gets shaded as if it faced down. That's how the road once
  ended up fully cross-hatched.
- **`paint(geo, fn)` returns a new geometry** for indexed input. It colors one triangle at a
  time so color bands follow edges instead of zigzagging. Always use the return value.
- **Pet thickness** is `3 + 1.5 × min(dist, 4)` squares, where `dist` is the distance
  from the edge of the drawing. The front is flat at z = 0, and depth grows backward.
- **Strokes texture** channels: R = loose scribbles (grain), G and B = hatching at ±45°.
  World-space triplanar mapping keeps the texture from swimming as the camera moves. The
  `uBoil` offset jumps it 8 times a second.
- Pixel ratio is capped at 1.5 for the iPad. Line width scales with it.

## Tracks

`TRACKS` holds each track's control points and look. `setCurve` resamples a track into
`N = 800` points, so all the per-step code (laps, steering help, snacks, rivals) works on
any track. `buildTrack` makes one merged mesh per track the first time it's chosen;
`loadTrack` hides the old one, shows the new one, sets the sky color and moves the snacks.

A new track's control points need to keep every bend gentle and every pair of road
sections apart. We check with a script before adding one: no two non-neighboring points
closer than about 30 units (two road halves plus borders), and no more than about 25° of
turn per 5 units. The kart steers about 20° in that distance at full speed, and the
steering help and grass cover a little more. The Park peaks at 24°, the Backyard at 14°
and the Kitchen at 18°.
