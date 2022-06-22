---
title1: 'Contributing to' title2: 'OpenStreetMap' date: '2022-06-01' description: 'I recently made my first contribution
to OpenStreetMap. Everyone can do it and it greatly helps the community.' tags: 'tools' imageAlt: 'An antique map of
light yellow colour, with map information written in English'
---

## What is OpenStreetMap?

If you ever went on a longer bicycle trip, you probably used a navigation app like
[Maps.me](https://maps.me/),
[Komoot](https://www.komoot.com/) or
[MapOut](https://mapout.app/)
to plan your route and find your way in unknown territory. These apps are magical! They know:

* If there is a road between town A and B
* Every curve and incline the road has
* If the road is paved, unpaved, rideable by bicycle
* How long it takes you to ride from A to B
* That there is a bakery waiting for your in town B, selling delicious croissants, so you can fill your stomach that is
  empty from your ride

How do they know all of this? The truth is, that sadly there is no magic involved. These apps get all this information
out of a huge database called [OpenStreetMap](https://www.openstreetmap.org/). What's special about OpenStreetMap is
that it's a free and collaborative project. That means that the aforementioned information is gathered by people like
you and me and put into the database. Then everyone can use that data for free. Magical!

This is very different from the commercial mapping services of
[Apple](https://www.apple.com/maps/) and [Google](https://www.google.com/maps), which are based on their own proprietary
data. These companies gather (and sometimes buy) the mapping data themselves. We are not allowed to use the data without
their permission.

## Contributing to OpenStreetMap

### Somewhere in the Mexican jungle

I recently found myself cycling in a pretty remote area of Southern Mexico. From some locals in
[Santiago Tutla](https://www.openstreetmap.org/#map=16/17.1938/-95.3735) I've learned, that there is an unpaved road
leading to the nearby town of
[San Juan Mazatlán](https://www.openstreetmap.org/#map=14/17.0318/-95.4482). On OpenStreetMap it looked like there is
none. Remembering that [the map is not the territory](https://en.wikipedia.org/wiki/Map%E2%80%93territory_relation), I
knew that I found an opportunity to enhance the OpenStreetMap database. Great! After buying some bananas, I made sure
that my bike computer (a [Wahoo Elemnt Bolt](https://www.wahoofitness.com/devices/bike-computers/elemnt-bolt))
was running and headed off, following the mysterious jungle road.

### Hansel and Gretel and the satellites

Do you remember what Hansel did in the famous fairy tale
[Hansel and Gretel](https://en.wikipedia.org/wiki/Hansel_and_Gretel)? Led to an unknown location in the woods, he
stopped every couple of meters to leave a bread crumb on the floor, so he and his sister could find their way back home.
Most bike computers can do something similar: they are able to create
a [GPS trace](https://en.wikipedia.org/wiki/GPS_tracking_unit). Basically the bike computer sends a signal to a GPS
satellite every couple of seconds and the satellite tells the device, where exactly in the world it currently is. The
bike computer safes this information, so it can be accessed later. After the tour, it can draw a nice line of the trip
made, by combining all the individual data points: the GPS trace. While using quite a bit of battery, this has a big
advantage over Hansel's strategy: GPS traces don't get eaten by birds. If you don't have a dedicated bike computer,
don't worry: there are many apps for smartphones, that can generate GPS tracks.

### Adding a missing road to OpenStreetMaps

A couple of days later I found myself in a „nice“ hotel with a „fast“ internet connection. Time to actually contribute
my newfound road to OpenStreetMap. For this, I went to the
OpenStreetMap [website](https://www.openstreetmap.org/user/new)
and created an account. Then I logged into my freshly created OpenStreetMap account, navigated to the
[GPS traces](https://www.openstreetmap.org/traces) tab and clicked on
[Upload a trace](https://www.openstreetmap.org/traces/new). The website asked me for some metadata and a
[GPX file](https://en.wikipedia.org/wiki/GPS_Exchange_Format). The GPX file contains the recorded GPS trace for the
route that is to be added. I received this file from my bike computer, added it to OpenStreetMap form and clicked on
„Upload“. You can see the result of this endeavor [here](https://www.openstreetmap.org/user/elHornair/traces/4405855).

At first, I thought that I was already done. But it turns out that adding the GPX file to the database is not the same
as adding a road to the map. To be able to do this, I needed a map editor. Luckily, OpenStreetMap conveniently provides
such an
[editor](https://www.openstreetmap.org/edit) directly in the browser. By clicking on „Edit Map“ next to my uploaded GPS
trace I could even open the editor with my trace already loaded.

I imagined that I could now create a new road in the editor, tell OpenStreetMap that the road is unpaved, and tell it to
follow the GPS trace to know where the road is. But it turned out to be more complicated: the road needs to be painted
manually, where the GPS trace (and a satellite image that is provided by OpenStreetMap) only serve as a reference for
where the road **could** be. The GPS trace can't automatically be translated into a road. The reason for this that the
GPS trace is **too detailed**. How can it be too detailed you ask? Well imagine you've been riding on a perfectly
straight road for two hours. Because the GPS tracking software recorded a location every couple of seconds, your trace
would contain hundreds of reference points, where two points would actually be enough to describe the road. In my case,
the road was not straight at all, but very steep. Because of this, I zigzaged from the left side of the road to the
right side, so I could make the inclination a bit less tiring. The zigzag was visible in my GPS trace and of course we
don't want zigzaging OpenStreetMap roads. So the only option I had was to bite the bullet and redraw the entire route
with my mouse, which was nearly as tirening as actually cycling the route. After I was done, I made some final
corrections, added some metadata and saved
[the changeset](https://www.openstreetmap.org/changeset/121741823#map=13/17.1282/-95.3615). Tadaaa: there is now
[a road](https://www.openstreetmap.org/#map=13/17.1282/-95.3615) between Santiago Tutla and San Juan Mazatlán.

### Other ways to contribute

There are simpler ways to contribute to OpenStreetMap than adding a before unknown road. You could also correct the type
of a street (for example if an old road recently got paved), add a new restaurant, correct a road or review an existing
changeset (for example [mine](https://www.openstreetmap.org/changeset/121741823#map=13/17.1282/-95.3615)).

### Recap

So as a recap, these were the steps I took to make my first OpenStreetMap contribution:

1. Created a GPS trace of the missing road by cycling it
2. Created an OpenStreetMap account
3. Uploaded a GPX file containing my GPS trace to the OpenStreetMap database
4. Added the road with the OpenStreetMap editor by manually drawing a route along the GPS trace

