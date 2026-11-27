# Pet Racers plan

The spec in [README.md](README.md) describes the game. This file is what's left to build to
match it.

## Built

- [x] Hand-drawn look: sketch shading, marker outlines, paper, sky
- [x] One track: hedges, curbs, scenery, start arch
- [x] 3 laps, countdown, finish card, steering help, catch-up, bumping
- [x] Duffy, Mango and Fluff Puff models and karts (Salmon Nigiri, Sushi Boat, Popcorn Bucket)
- [x] All five pets in every race, staggered grid, places 1st–5th
- [x] Mixed snacks (taco, sushi, ramen, popcorn); favorite food fills two segments
- [x] Powers: Speed Eating, Sports Ball, Instant Cake, Brave Mode; effects in the pet's color
- [x] Pick screen with the card scans; remember the last pet
- [x] Listed on the games home page and in the root README
- [x] Racing friends: up to five iPads in a room through the host, powers hit friends
- [x] Zeus, Plufulous and Scarlet Ivy: models, karts (Sushi Burger, Burger Kart, Maki Roll),
  powers (Math Defeater, Instant Hacking, Fashion Shoot), burger snacks, eight on the grid
- [x] Halsy: model, Fry Box kart, Mind Access power, fries snacks, nine on the grid
- [x] Backyard and Kitchen tracks, picked on the pick screen (by the host in a room)
- [x] Sound: engine, drift and off-road loops, effects for snacks, powers, bonks, laps, finish; mute
- [x] Harder tracks: Snow, Bakery, Toy Room; pick screen in two steps, pet then track
- [x] Pro driving: Go/Back/Hop, drifting with blue, orange and purple boosts, rocket start
- [x] Items from snacks (Banana Peel, Cherry, Hot Pepper, the pet's power) with a spare; boost pads
- [x] Forks and jumps on every track but the Park; rivals take branches and jump
- [x] Narrow boost ramps; shortcuts over rough ground or water, balanced by a formula; boost lanes
- [x] Mini map in the top right
- [x] Rivals use items, their powers included
- [x] Best time on each track, kept on the iPad
- [x] Long tracks: Beach, Farm, Jungle, about twice round, with long alternate roads and a three-way fork
- [x] A drawn picture of each track on the pick screen
- [x] The Star: a rare item, sugar rush and Brave Mode at once; items spin for 3 seconds
- [x] Item odds by place; cherries bounce off the border; the Bee chases the kart ahead
- [x] Verges (a little slow) and open ground (slow) inside a border that stands back; speed-ups ignore both

## Next

- [ ] Play it on the iPad and tune speeds and frame rate
- [ ] Race the harder tracks on the iPad: are they hard but fair? Tune widths and corners
- [ ] Try Pro driving on the iPad: button layout, drift tightness, spark times, boost size
- [ ] Items on the iPad: odds of the power, peel and cherry sizes, where the Spare button sits
- [ ] Forks and jumps on the iPad: are the forks easy to see coming? Are the hazard costs
  (1.6 s rough, 3 s water) right? Do kids hit the side ramps, or need them wider?
- [ ] The Star and the 3-second spin on the iPad: does the longer spin feel slow?
- [ ] Item odds by place: does the race spread out but keep changing? Is the Bee too strong
  (speed 40, 10 s)? Tune `ITEM_ODDS`
- [ ] Verges and open ground on the iPad: do kids get lost out wide? Tune `OPEN_W`,
  `VERGE_SLOW` and the sharp-bend threshold for close borders
- [ ] Rivals' items on the iPad: too mean for Zachary on the easy tracks? Tune the wait between items
- [ ] Easy driving without steering help: can Zachary get round? If not, set `STEERING_HELP` back on
- [ ] Long tracks on the iPad: is a three-lap race (about 4–5 minutes) too long? Frame rate with
  the bigger scenery? Is each long fork easy to see coming?
- [ ] Race with three or more real iPads: check smoothness and Wi-Fi drops

## Later

- [ ] Our own signaling server (Cloudflare Worker) if PeerJS's public one is unreliable
