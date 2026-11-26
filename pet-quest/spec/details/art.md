# Art

Everything is pixel art in the style of the original pet drawings: flat colors, no
gradients, and a dark marker outline (`#2a2228`, about a fifth of a square thick) around
each shape. One art pixel is the same size on screen for every sprite.

## Heroes

The sprite source is [`art/avatars.html`](../../art/avatars.html); open it to see them walk.

- **Front view**: hand-drawn, 16 wide. Ruby is 30 tall, Zachary 26.
- **Side view**: the head and body are hand-drawn; arms and legs are generated from joint
  angles so the walk cycle stays smooth. Limbs are 2 squares thick, a thigh and shin are
  4½ squares each.
- **Walk cycle**: six frames. Each leg swings ±0.5 rad at the hip; the knee bends most while
  the leg swings forward. Each arm swings opposite its leg. Each frame is shifted so the
  lowest foot touches the ground, which gives the body its natural bob.
- **Layers**: far arm and leg, then body, then near leg and arm, each **outlined
  separately**. With one outline around the whole sprite, limbs crossing the body vanish
  (Ruby's near arm disappears into her cardigan). Far limbs use a slightly darker shade.
- Facing left is the side view mirrored.

## Pets

The pets use their Snack Attack sprites unchanged, including the two-step walk where the
eyes and nose shift toward the walking direction and the feet step back and forth.
