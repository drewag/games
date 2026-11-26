# The world

Bandit, a raccoon with a sweet tooth, ran off with the neighborhood's snacks and the pets
scattered after him. Ruby and Zachary set out to find every pet and get the snacks back.

The tone is silly, never scary. Nobody gets hurt: enemies go *poof*, the hero blinks, and
Bandit ends each world by dropping the snacks and running off.

## Heroes

The player picks **Ruby** or **Zachary** before playing, like picking Mario or Luigi. They
play identically; each has their own save. Their look is taken from photos but stays in the
pixel style:

| Hero | Signature look |
|---|---|
| Ruby | Long dark-brown hair, pink cardigan with daisies, pink skirt, white high-tops |
| Zachary | Short spiky brown hair, blue eyes, green tee, navy shorts, black-and-blue sneakers |

The pets are small next to the heroes, about 40% of a hero's height, and keep exactly the
squares from the original drawings. Heroes are drawn with the same square size but more of
them, so they can show real detail: they're drawn side-on with a six-frame walk (bending
knees, swinging arms), plus a front view for menus. See [details/art.md](details/art.md).

## Friends

The five pets are **friends**, met in a fixed order, one per world. They are never caged or
rescued; each is found hiding somewhere and joins when the hero walks up to them. Meeting a
friend does two things for the rest of the game:

1. The hero gains that friend's **ability**.
2. That friend's **friend blocks** become solid in every level.

| Order | Friend | Color | Ability |
|---|---|---|---|
| 1 | Fluff Puff | white | **Bunny hop**: jumps go higher |
| 2 | Buddy | brown | **Dig**: press down on soft dirt to dig through it |
| 3 | Mango | yellow | **Ground pound**: press down in the air to smash cracked blocks below |
| 4 | Mongo | orange | **Wall cling**: slide slowly down walls and jump off them |
| 5 | Choco | purple | **Float**: hold jump while falling to drift down |

The most recently met friend follows a few steps behind the hero. Friends never take damage
and never block the way.

## Enemies

Enemies are pet-world nuisances, drawn as characters with faces, never as food.

| Enemy | Behavior | Beaten by |
|---|---|---|
| Dust Bunny | Rolls back and forth, turns at walls and ledges | Stomp |
| Flea | Hops toward the hero every couple of seconds | Stomp |
| Bath Bubble | Floats up and down on a fixed path | Stomp, which also bounces the hero extra high |
| Vroomba | Robot vacuum; charges along the floor, pauses, turns | Ground pound only; otherwise jump over |
| Sprinkler | Fixed; sprays a water arc on a timer | Can't be beaten; wait for the gap |
| Bandit's gang | Raccoons that grab snacks lying on the ground and run | Stomp, and they drop what they took |
| Bandit | World boss | Three stomps |

Touching an enemy any way other than landing on top of it costs the hero a heart.
