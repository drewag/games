# Pet Quest

A side-scrolling platformer for Ruby (9) and Zachary (7). Bandit the raccoon has scattered
the pets around the neighborhood; you play as Ruby or Zachary, run and jump through levels,
and meet the pets one by one. Each friend you meet shares an ability and turns their colored
blocks solid in every level, so old levels open up new paths.

It's the second game in this repo, after [Snack Attack](../snack-attack/), and shares its
look: the pets from the original drawings, chunky pixel art with a marker outline, and
touch controls sized for an iPad.

## The spec

1. [The world](spec/world.md): story, heroes, friends, enemies
2. [How it plays](spec/play.md): controls, movement, hearts, snacks, friend blocks, saving,
   playing together
3. [Levels](spec/levels.md): how levels are written and the plan for level 1-1

Terms are listed in [vocabulary](spec/vocabulary.md). What's left to build is in
[plan.md](plan.md).

## Files

- `index.html`: the whole game, inline
- `vendor/`: PeerJS 1.5.5, unmodified (MIT, see `peerjs-LICENSE`), for playing together.
  Playing alone works offline.
