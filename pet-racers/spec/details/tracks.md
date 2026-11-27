# Forks: the balance formula

Every fork should be a real choice: on average neither road is quicker, and the better
driver gains by picking well and driving it cleanly. The game works this out when a track
loads (`balance()` in `index.html`), so redrawing a branch rebalances it.

## Time saved

    saved = (main length - branch length) / cruising speed
            + 0.3 s for each boost pad on the branch
            - 0.35 s if the main road has snacks the branch skips

Cruising speed is 95% of top speed. Branches have no snacks, so skipping them costs the
chance of an item.

## Branches that come out slower: boost lanes

A branch with `saved < 0` gets boost pads, spread along it, until `saved` is back to zero
or a little over. Most "round the outside" branches end up here.

## Branches that come out quicker: shortcuts

A branch with `saved ≥ 0.25 s` needs risk to match. Its hazard kind (`rough` or `water`)
is set in the track's definition; the formula sizes it:

    cost    = 1.6 s for rough ground (a crawl), 3 s for water (sinking and a standing start)
    hazards = enough that none is riskier than 0.75
    risk    = saved / (hazards × cost)           how often a jump may go wrong
    gap     = J × (0.35 + 0.6 × risk) - ramp length

`J` is how far a kart flies off a ramp at full speed, boosted by the ramp to 1.3× (about
30 units). A kart keeps its takeoff speed in the air, so a slow approach falls short. A gap a third of `J` is hard
to miss at any speed; one nearly `J` long needs full speed and the ramp hit square. Each
hazard goes on the straightest stretch of the branch left, away from its ends, and the
ramps swap sides. Rivals miss a ramp with a chance of `risk × 0.8`.

A shortcut that would need more hazards than fit gets the ones that fit, each riskier.
Past a risk of 0.9 that can't balance it: the game warns in the console, and the branch
should skip less.

## Where the tracks come out

`petRacers.balance()` in the console prints this table.

| Track | Branch | Became | Saved | Risk | Gap |
|---|---|---|---|---|---|
| Backyard | garden shortcut | 1 × rough | 1.16 s | 0.72 | 19.8 |
| Kitchen | right wiggle | 2 pads | 0.08 s | | |
| Kitchen | bottom dip | 4 pads | 0.24 s | | |
| Snow | bottom-left corner | 1 × water | 1.12 s | 0.37 | 13.4 |
| Bakery | top zig-zags | 2 pads | 0.25 s | | |
| Bakery | top-right corner | 1 × water | 0.66 s | 0.22 | 10.7 |
| Toy Room | bulge in the hook | 1 × water | 0.61 s | 0.20 | 10.3 |
| Toy Room | neck of the bottom-right loop | 1 × water | 1.79 s | 0.60 | 17.5 |

Tried in the game: the 0.20 gap is cleared from 70% speed but not 55%; the 0.60 gap from
85% but not 70%.

The first Toy Room shortcuts cut across whole hooks and saved 3.5 to 6.4 s, more than
the water that fits on a short branch can balance, so they became the smaller cuts above.
