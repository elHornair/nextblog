---
title1: 'Contributing to'
title2: 'OpenStreetMap'
date: '2022-06-01'
description: 'I recently made my first contribution to OpenStreetMap. I documented my learnings here, so you can do it too!'
tags: 'tools, mexico'
imageAlt: 'A white map with a hand putting red pins into it'
---

## Somewhere in the Mexican jungle

I recently found myself cycling in a pretty remote area of Southern Mexico. From some locals in
[Santiago Tutla](https://www.openstreetmap.org/#map=16/17.1938/-95.3735) I've learned, that there is an unpaved road
leading to the nearby town of
[San Juan Mazatlán](https://www.openstreetmap.org/#map=14/17.0318/-95.4482). On OpenStreetMap it looked like there is
none. Remembering that [the map is not the territory](https://en.wikipedia.org/wiki/Map%E2%80%93territory_relation), I
knew that I found a perfect opportunity to enhance the OpenStreetMap database. Great! After buying some bananas, I made sure
that my [bike computer](https://www.wahoofitness.com/devices/bike-computers/elemnt-bolt)
was running and headed off, following the mysterious jungle road.

![Panoramic view showing mountains covered by tropical trees](/images/adding-a-missing-road-to-open-street-map/jungle-road.jpg "On the way from Santiago Tutla to San Juan Mazatlán")

## Hansel, Gretel and the satellites

Do you remember what Hansel did in the famous fairy tale
[Hansel and Gretel](https://en.wikipedia.org/wiki/Hansel_and_Gretel)? Led to an unknown location in the woods, he
stopped every couple of meters to leave a bread crumb on the floor, so he and his sister could find their way back home.
Most bike computers can do something similar: they are able to create
a [GPS trace](https://en.wikipedia.org/wiki/GPS_tracking_unit). Basically the bike computer sends a message to a GPS
satellite every couple of seconds and the satellite replies with the exact location of the device in the world. The
bike computer stores this information, so it can be accessed again later. After the tour, it can draw a nice line of the trip
made, by combining all the individual data points: the GPS trace. While using quite a bit of battery, this has a big
advantage over Hansel's strategy: GPS traces don't get eaten by birds. But even if you don't have a dedicated bike computer,
you don't have to fall back to Hansel's strategy: there are many smartphone apps for generating GPS tracks too.

![A GPS satellite orbiting around earth](/images/adding-a-missing-road-to-open-street-map/satellite.jpg "A GPS satellite")

## Adding a missing road to OpenStreetMap

A couple of days later I found myself in a ~~nice~~ hotel with a ~~fast~~ internet connection. Time to actually contribute
my newfound road to OpenStreetMap. For this, I went to the
OpenStreetMap website
and [created an account](https://www.openstreetmap.org/user/new). Then I logged into my freshly created OpenStreetMap account, navigated to the
[GPS traces](https://www.openstreetmap.org/traces) tab and clicked on
[Upload a trace](https://www.openstreetmap.org/traces/new). The website asked me for some metadata and a
[GPX file](https://en.wikipedia.org/wiki/GPS_Exchange_Format). The GPX file contains the recorded GPS trace for the
route that is to be added. I downloaded this file from my bike computer, added it to OpenStreetMap form and clicked on
„Upload“. You can see the result of this endeavor [here](https://www.openstreetmap.org/user/elHornair/traces/4405855).

![Web interface with input forms](/images/adding-a-missing-road-to-open-street-map/osm-upload-gps-trace.png "Adding a GPS trace in OpenStreetMap")

At first, I thought that I was already done. But it turns out that adding the GPX file to the database is not the same
as adding a road to the map. To add a road, I needed a map editor. Luckily, OpenStreetMap conveniently provides
such an
[editor](https://www.openstreetmap.org/edit) directly in the browser. By clicking on „Edit Map“ next to my uploaded GPS
trace I could even open the editor with my trace already loaded.

I imagined that I could now create a new road in the editor, tell OpenStreetMap that the road is unpaved, and tell it to
follow the GPS trace to know where the road is. But it turned out to be a bit more complicated: the road needs to be painted
manually and the GPS trace (in combination with a satellite image that is provided by OpenStreetMap) only serves as a visual reference for
where the road **could** be. The GPS trace can't automatically be translated into a road. The reason for this is, that the
GPS trace is **too detailed**. How can it be too detailed you ask? Well imagine you've been riding on a perfectly
straight road for two hours. Because the GPS tracking software recorded a location every couple of seconds, your trace
would contain hundreds of reference points, where two points would actually be enough to describe the road. In my case,
the road was not straight at all, but very steep. Because of this, I zigzaged from the left side of the road to the
right side, so I could make the inclination a bit less tiring. The zigzag was visible in my GPS trace and of course we
don't want zigzaging OpenStreetMap roads. So the only option I had was to bite the bullet and redraw the entire route
with my mouse, which was... a different kind of tirening as actually cycling the route. After I was done, I made some final
corrections, added some metadata and saved
[the changeset](https://www.openstreetmap.org/changeset/121741823#map=13/17.1282/-95.3615). Tadaaa: there is now
[a road](https://www.openstreetmap.org/#map=13/17.1282/-95.3615) between Santiago Tutla and San Juan Mazatlán.

![Web interface showing a map with a road](/images/adding-a-missing-road-to-open-street-map/osm-changeset.png "The newly added road on OpenStreetMap")

## Other ways to contribute

There are simpler ways to contribute to OpenStreetMap than adding a before unknown road. You could also correct the type
of a street (for example if an old road recently got paved), add a new restaurant, correct a road or review an existing
changeset (for example [mine](https://www.openstreetmap.org/changeset/121741823#map=13/17.1282/-95.3615)).

## Summary

As a recap, these were the steps I took to add my first road to OpenStreetMap:

1. Created a GPS trace of the missing road by cycling it
2. Created an OpenStreetMap account
3. Uploaded a GPX file containing my GPS trace to the OpenStreetMap database
4. Added the road with the OpenStreetMap editor by manually drawing a route along the GPS trace
