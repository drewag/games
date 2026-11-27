# How it plays

Pet Racers is a kart racer: three laps of a track against eight rivals, or against
friends on other iPads with rivals filling the remaining spots. The hard parts
of the genre are taken away for a 9-year-old. The kart accelerates by itself, you can't
fall off or get stuck, and nobody is far behind for long. **Pro driving** puts some back
for whoever wants them: gas, hopping and drifting, as in Mario Kart.

## Picking a pet and a track

The **pick screen** has two steps, one after the other:

1. **A pet.** The nine card scans fill a tall panel on the right, in a 3 × 3 grid as big
   as the screen allows, so the writing on them can be read. Tapping a card picks that
   pet: it appears on the left, in its kart, slowly turning, under the title. The pet's
   name, kart and power sit under the cards, with **Easy driving** or **Pro: hop &
   drift** to pick the controls, and **Next ▶** to go on.
2. **A track.** The camera rises high over the track and slowly circles it. The tracks
   sit in one row of cards, each with a picture of the track from above (its roads,
   forks, water and jumps, on its own ground), in three groups: **Easy** (Park,
   Backyard, Kitchen), **Harder** (Snow, Bakery, Toy Room) and **Long** (Beach, Farm,
   Jungle), with a line about the picked one underneath. **Race!** starts, and
   **◀ Pets** goes back.

The game remembers the last pet, track and controls picked. Each iPad picks its own
controls, even in a room. It also keeps the best time on each track and the pet who set
it, shown after the track's line ("· Best: 84.3 s (Mango)"). Beating it adds
"· New best!" to the finish card. Any finished race counts, alone or in a room, Easy or Pro.

The **harder tracks** have more and tighter corners (hairpins on Snow, zig-zags in the
Bakery, both in the Toy Room), a narrower road, a bigger slowdown off it, and rivals a
little quicker (2–4%). Hedges, catch-up and everything else work the same.

The **long tracks** are about twice as far round as the others (2,000–2,350 units a
lap against 750–1,400), with a little wider road than the harder ones, rivals barely quicker
(1%), twice the snack rows and six boost pads. Their forks are mostly whole other roads,
some as long as a quarter of the lap, rather than short cuts: a different way through
with its own look (a wooden boardwalk, a stone temple path), some with jumps of their
own. Beach has a **three-way fork**, where two branches leave and rejoin at the same
places as the main road; rivals pick each about a third of the time.

Every track but the Park has **forks** and **jumps**:

| Track | Forks | Jumps on the main road |
|---|---|---|
| Park | none | none |
| Backyard | a shortcut through the garden, over long grass | one on the long diagonal |
| Kitchen | two boost lanes, round the outside of the right-hand wiggle and of the bottom dip | one on the top straight |
| Snow | a shortcut across the bottom-left corner, over an icy creek | one on the middle straight, after a boost pad |
| Bakery | a boost lane past the top zig-zags, and a shortcut across the top-right corner over syrup | one on the left side |
| Toy Room | two narrow shortcuts, across the bulge in the hook and across the neck of the bottom-right loop, each over bath water | one on the first straight |
| Beach | a wooden boardwalk inland, a three-way fork at the top (over the tide pools, the middle, or over the dunes with three jumps), and a wooden pier out over the sea | one on the start straight |
| Farm | a long winding lane through the orchard, a cut across the duck pond, and a bumpy road round the barnyard with three jumps | one on the top straight |
| Jungle | straight across the river over the water, the long way through the temple ruins on a narrow stone path with two jumps, and a cut through the mud | one on the start straight |

No road is the obvious pick. A **shortcut** saves time but has hazards; a **boost lane**
is longer but has boost pads (and sometimes jumps, which boost too); the main road has the snacks. The game sizes the hazards
and counts the pads so that, on average, every road through a fork takes about as long,
and a clean jump or a well-hit pad is what makes one pay. See
[details/tracks.md](details/tracks.md) for the formula.

## Controls

The game is played in landscape on an iPad. On-screen buttons sit under the thumbs:

- **◀ ▶**, bottom-left, held to steer
- **Item**, bottom-right, showing the item in hand (see [Snacks and items](#snacks-and-items)).
  It's faded when empty, and yellow and wobbling when it holds your pet's power.
- **Spare**, a smaller button beside it, showing the spare item. Tapping it swaps the two.
- **Look back**, beside Power, held to look behind: the camera flips to face back down
  the road from in front of the kart, and snaps back when let go.

There's no steering help: with neither button held the kart goes straight, so you steer
it round every bend yourself. (We're trying this out; Easy driving used to ease the kart
toward the road ahead on its own. The `STEERING_HELP` switch in `index.html` turns that
back on.) After the finish line the kart drives itself. Arrow keys and space work on a computer,
E swaps the spare, and C or Q looks back.

### Pro driving

Pro driving copies Mario Kart's controls. There's no steering help, and the kart only
goes while you hold the gas. Three more buttons sit bottom-right, with Item and Spare moved up
above them:

- **Go**, held to drive. Let go and the kart coasts to a stop.
- **Back** brakes, then reverses slowly.
- **Hop** makes the kart hop. It also counts as Go while held.

A thumb can slide between buttons without lifting, from Go onto Hop for example. On a
computer: up arrow or W for Go, down arrow or S for Back, Shift or X for Hop.

**Drifting**: hop, and land still holding Hop while steering. The kart **drifts** that
way, sliding with its nose turned in, until Hop is let go. Steering into the drift
tightens it; steering away widens it. Drifting builds **sparks** at the back wheels:
blue, then orange, then purple, faster when steering into the drift. Letting go of Hop
with sparks showing gives a **boost**: short for blue, longer for orange, longest for
purple. A boost ignores the slowdown off the road. Getting spun out or slowing right down
ends a drift with no boost.

**Rocket start**: press Go while the countdown shows 2 and keep holding it, and the kart
boosts off the line. Holding Go from 3 stalls the kart for a second ("Too soon!").
After the finish line the kart drives itself, as in Easy.

## A race

Karts start on a staggered grid behind the start line, with your racer at the back. A
3-2-1-GO countdown starts the race. The top of the screen shows the lap (1/3) and your
place (1st–9th). A **mini map** in the top right shows the whole track from above, the
same way up all race, with its forks and hazards, and every kart as a dot in its pet's
color; yours is the biggest, ringed in white. After the third lap, a card shows your place and time and offers
**Race again!** or a different pet.

- **The verge**, a band 5 units wide in a lighter color just past the curbs, slows the
  kart a little (to 70%). It's on the inside of bends and in stretches along the
  straights, not everywhere.
- **Off the road** (grass, or the kitchen counter) past the curbs or verge slows the kart
  to about half speed.
- **Open ground**: the border stands well back from the road in most places, about 14
  units past where the verge would end, so there's room to run wide or cut across the
  inside of a bend. It's slow going, unless you're quick: a boost (from a drift, a pad
  or a ramp), the Hot Pepper, the Star, Speed Eating and Brave Mode all carry you over
  the verge and open ground at full speed. The border closes in on the outside of sharp
  bends, before and over hazards, under hills, and wherever two roads come close
  (halfway between them), so there's no skipping part of the lap. It moves in and out
  gradually.
- **Hedges, a fence or marshmallows** make the border. Driving into them slides the kart back along the road and
  costs some speed. It never stops the kart or turns it around.
- **Boost pads**, orange with white arrows, sit on the straightest parts of every track
  (three or four per track, in the middle or to one side). Driving over one gives a boost,
  the same as a drift's, so it's worth steering onto. Rivals use them too.
- **Jumps**: a narrow **boost ramp**, about a third of the road wide, orange with white
  arrows like a boost pad, with a nose that kicks up at the top. It sits to one side, so
  you have to steer onto it. Hitting it boosts the kart 30% faster (up to boost speed) and
  launches it. In the air the kart keeps that speed, steers only a little, doesn't slow
  over grass and sails over banana peels; the boost carries on a moment after landing.
  How far it flies depends on how fast it hit the ramp: about 30 units at full speed,
  much less when slow.
- **Forks**: on every track but the Park, the road splits in places and joins again further
  on, with the border running down the middle between the two. Keep to the side the
  branch goes, or steer into it, to take it. Rivals take branches a little under half the
  time.
- **Hazards** sit across shortcuts, right after a ramp: the road stops and starts again on
  the far side. **Rough ground** (long grass in the Backyard) slows a kart that lands in it
  to a crawl. **Water** (a creek on Snow, syrup in the Bakery, bath water in the Toy Room)
  sinks it: "Splash!", two seconds under, then it pops up standing still on the road just
  past the hazard, keeping its items. Clear it by hitting the ramp at speed; miss the
  ramp, or hit it slowly, and you're in. Rivals gamble too, and sometimes miss.
- **Karts bump** each other apart. Bumping never spins anyone out (Brave Mode aside).
- **Catch-up**: rivals far ahead of you ease off, and rivals far behind speed up, so
  the race stays close. Rivals differ a little in top speed, so the order varies.

## Snacks and items

Snacks float over the track in rows across it: tacos, sushi, ramen, popcorn, burgers and fries, mixed.
Driving through one eats it, and it comes back a few seconds later. Eating a snack gives an
**item**, which spins through the choices on its button for 3 seconds, slowing down like
a slot machine, before it lands. While it spins, the item can't be used or swapped, and
snacks you drive through give nothing more: they're still eaten, so nobody else gets
them. You can hold two: the one in hand and a **spare**. A snack fills the hand if it's
empty, otherwise the spare; with both full, it's just a snack. If the spare is the one
spinning, the item in hand can still be used, and the spare moves up still spinning. Using the item in hand moves
the spare up, and tapping the spare swaps them, to save the power for later.

The items:

- 🍌 **Banana Peel**: dropped behind the kart. The first kart to drive over it spins out
  ("Slip!"), and that includes you, so remember where you left it. Peels last 40 seconds.
- 🍒 **Cherry**: thrown fast, the way your kart is pointing. Pointing down the road, it
  goes straight down your line; at an angle, it bounces off the border, three times,
  and pops on the fourth (or after 4 seconds). It spins out the first kart it touches.
  Aim by lining up, or bank it off the walls.
- 🐝 **Bee**: flies after the kart one place ahead of you, wherever it is, turning to
  follow it and straight over hedges and grass rather than along the road. Faster than
  any kart, it stings ("Stung!") the first kart it touches, or gives up after 10 seconds.
- 🌶️ **Hot Pepper**: a boost, like a drift's but longer. It ignores the grass slowdown, so
  it's good for a short cut.
- ⭐ **Star**: rare, and the strongest item. For 5 seconds the kart goes as fast as Speed
  Eating's sugar rush and is brave as in Brave Mode at once: it ignores the slowdown off
  the road, can't be spun out, spins out whoever it touches, and sparkles in rainbow
  colors. It never comes up in the top three, and mostly in 8th and 9th.
- ★ **Your pet's power** (see [racers](racers.md#powers)). A favorite food gives it half the
  time; any other snack gives it now and then.

What a snack gives depends on your place. The aim is a race that spreads out but keeps
changing: the leader can defend but not run away, the middle can fight, and the back can
catch up.

| Place | Peel | Cherry | Bee | Pepper | Star | Power |
|---|---|---|---|---|---|---|
| 1st | 78% | – | – | 9% | – | 13% |
| 2nd | 49% | 16% | 6% | 12% | – | 15% |
| 3rd | 36% | 24% | 10% | 14% | – | 16% |
| 4th | 25% | 25% | 12% | 18% | 2% | 18% |
| 5th | 19% | 25% | 13% | 19% | 4% | 19% |
| 6th | 13% | 22% | 15% | 22% | 7% | 21% |
| 7th | 9% | 20% | 15% | 24% | 10% | 21% |
| 8th | 5% | 15% | 13% | 24% | 21% | 22% |
| 9th | 2% | 11% | 13% | 24% | 26% | 23% |

A favorite food makes the power three times as likely. In first place, a power that
shoots at someone ahead (Sports Ball, Math Defeater, Mind Access) never comes up, and one
that speeds you along (Speed Eating, Brave Mode, Instant Hacking) comes up less. With
friends in the race, the places are the same nine.

Duffy still gets a nibble boost from every snack.

### Rivals' items

Rivals eat snacks too, which takes them away from you, and each snack gives a rival an
item the same way (favorites and place count the same), but a rival holds only one at a
time and has no spare. They use them sensibly rather than at random: a peel or a cake
when someone is close behind, a cherry when someone is ahead in their lane, a bee when
anyone is ahead within 150 units, a Sports Ball
or Math Defeater when someone is ahead, Gaming Knockout in a crowd, Fashion Shoot with
someone just behind, and the pepper, the Star, Speed Eating and Brave Mode whenever. A
rival's item spins for 3 seconds too before they can use it. A rival that
can't find a good moment uses its item after ten seconds anyway. After using one, a rival
waits a few seconds before the next: 4 on the harder tracks, 7 on the easy ones.

Rivals' items hit everyone, you, friends and other rivals, just like yours. Only your own
hits pop up a word on your screen; you hear the others when they're near you. In a room,
the room maker's iPad runs the rivals' items and tells everyone what they hit.

## Spinning out

Any kart hit by a power or an item **spins out**: it twirls and slows to a crawl for about
1.5 seconds, then carries on. "Bonk!" (or the item's word) pops up when you did the hitting
or got hit. Anyone's items can spin you out, a rival's or a friend's, and a banana peel can,
even your own.

## Sound

Everything you hear is made by the game as it plays (Web Audio, no sound files), so it
works offline. While racing there's an engine hum that rises with speed, a tire squeal
while drifting and a rumble off the road. Short sounds mark the countdown beeps and GO,
eating a snack (a fanfare for a favorite), the item roulette and where it lands (a chime
for the power or the Star), boost pads, slipping on a peel, each item and each power
(every one sounds different), spinning someone out, getting spun out, hitting the
border, bumping a kart, each lap (a jingle for the last one) and the finish (a bigger
one for winning). Pro driving adds the hop, a blip as the sparks change color, the boost
and a stall's sputter. Buttons and cards tap.

The 🔊 button next to home mutes everything, and the game remembers it. Sound starts with
the first tap, as browsers require, and pauses when the iPad switches apps.

## Racing friends

Up to five iPads can race each other, one pet each. **Race a friend** on the pick screen
offers:

- **Make a room**: shows a four-letter **room code** (no I, L or O).
- **Join a room**: type the code from the room maker's iPad.

The iPad that made the room is the **host**. Everyone who joins lands on the pick screen
together, and the host's pick screen keeps showing the room code so more can join. Only
the pick screen takes new people: a room that's mid-race, or that already has five iPads, turns
joiners away with a message. Two people can't have the same pet. Taken cards say "Friend",
and anyone who joins holding a taken pet gets the first free one. The host gets **Start!**
picks the track on the second step (other iPads stay on the pet step, follow the host's track and can't change it), and chooses **Race again!** or
a new pick afterwards. Everyone else waits. **Leave** goes
back to racing alone.

In a race with friends, the people start at the back of the grid in the order they joined,
host first. The remaining pets are rivals. Powers and items work on everyone: Gaming
Knockout, the balls, cherries, peels, cakes and Brave Mode spin out a friend just like a
rival. Snacks are each iPad's own,
so a snack a friend eats may still be there on your screen.

If a friend leaves or drops off, their kart carries on as a rival. If the host leaves, the
room closes: every other iPad keeps racing alone, with everyone else as rivals.

The iPads need the internet to find each other, then race over the network through the
host. See [details/network.md](details/network.md).
