---
title: How to Build Skis
date: "2022-09-19T00:00:00.000Z"
description: "Complete guide - design, materials, building"
---

TODO run thru spell check

This blog post is my attempt to organize all of the things I've learned while building my first pair of skis.
Building skis is tough, mostly because of the amount of available information online to sift through.

Note: If you are looking to build a snowboard, you will find value in this post as well.
Snowboards are very similar to skis in their design and construction.

Table of Contents
Ski Construction Overview
Design
  Ski Design
  Ski Press Design

How I built my skis
  Design
  Materials/Cost
  Build
  Layup
  Mistakes

# Ski Construction Overview

## Ski Design

What type of skis would you like to ride?

Fast-turning skis to rip through groomers?
Floaty off-piste surfers?
Park skis that ride like [al dente pasta](https://www.youtube.com/watch?v=PXzuiz7Fzjo)?

Each pair of skis modifies the same set of parameters to create a unique feel.
These parameters include:

### Ski Length
  The length of the skis from tip to tail.

  This parameter can vary on the rider's height and skill level.
  A good rule of thumb is to ride skis that line up close to your eye-level when holding the skis vertically.

  A ski's *effective edge* is a subset of the ski's total length.
  The effective edge is the area that touches the ground during a turn.
  Think of the concave area of the ski's sidecut.

  Things to note when choosing a ski length:
  - Longer skis tend to *ride* faster than shorter skis.
    - This is because the force exerted by the skier is distributed over a larger surface area, decreasing drag on the snow.
  - Shorter skis tend to *turn* faster than longer skis.
    - With the force of the skier's turn is greater because it is being applied over a smaller area.

### Ski Width
  Specifically, this is the width of the ski measured at the thinnest point, also called the ski's "waist".

  The sidecut is the "hourglass" shape a ski makes when viewing the ski from the top.

  Things to note when choosing a ski width:
  - Narrower skis "turn over" easily from edge to edge, and provide more grip.
    - Racing/slalom skis have narrow ski widths (~60mm-80mm).
  - Wider skis require more work to turn over, but float better in powder because of their larger surface area.
    - Many powder-specific skis have wide ski widths (100mm+).
  - Most all-mountain (general purpose) skis have widths ranging from ~85mm-105mm.

### Turn Radius
  The turn radius is the aggregate of the ski's length and the ski's width.
  It is created by extending the sidecut of the ski into a full circle.
  For example, if you were riding skis with an 18 meter turn radius and you were to turn to the right, you would be riding clockwise along the perimeter of an 18 meter circle.

  TODO add diagram
  - [Turn radius calculator](https://member.fis-ski.com/skicalc.htm)

### Ski Profile
  Traditionally, skis have a convex profile called "camber".
  A camber profile allows for a skier to apply an even amount of pressure along the edge of the ski in a turn.
  Also, skis with camber 
  
  A concave profile is called "reverse camber" or "rocker", like the feet of a rocking chair.
  
  The ski's profile is influenced on the design of the ski press. TODO add link to ski press section?

### Ski Thickness/Taper
  Also known as a ski's "flex" or "flex pattern"
  When viewing the skis from the side, you will see that the ski is thickest in the middle and thins out as you move to each tip.

  The thickness of the material used in the ski determines its logitudinal flex.
  A stiffer ski will be more stable at speed, while softer skis are more forgiving when applying turning force.
  - TODO "Flex pattern"

4. Mounting location
  - The mounting location is the area where the skier's boots attach to the skis.
  This can range from the true center of the ski, to being ~10cm back from the center of the ski.
  - Center mounted or "Twin tip" skis allow the skier to more easily ski "switch" or backwards.
  The center of mass and pivot point is at the middle of the ski.
  -
6. Material Choice
  - Heavy wood charging ski
  - Light wood floaty/touring specific
  - Damp vs. poppy
  - Buttery

9. Tip shape

Note: Many of the paramaters you modify in the ski design will change other parameters.
For example, ski width and ski length are coupled with the turn radius.
If you design a long ski, the turn radius will inherently be larger.
If you design a wide ski, the turn radius will also be larger.

If you own a pair of skis you enjoy riding, it can be helpful to study how these parameters affect the ride.
Note how you would modify that pair of skis' parameters in a new ski design.

There's really no right or wrong choice for each of these parameters.

I'll cover more in-depth ski design tips in the [Designing in CAD Software] TODO section.

## Press Design

The ski press is a specialized tool that bonds together all the components of a ski.
Specifically, the design parameter that the ski press modifies is the ski's profile.

### Ski Molds
Ski Molds are designed to give the skis their profile.
They're made of MDF, which is cheap, cuts easily, and can withstand press pressure.

Some press designs use only the bottom mold.
Others use a bottom mold and an inverse top mold.
Typically, the molds are wide enough to hold 2 skis (or 1 snowboard) during the press.
TODO write about if the ski press is only 1 ski wide, it runs the risk of having inconsistent ski profiles.

### Types of Press Designs

Listed in increasing order of complexity.
TODO find that ski builders or happy monkey snowboard blog post with explainer on press designs

#### Clamp Press
The simplest press design.
The clamp press fits skis in between a top and bottom mold.
Pressure is then applied to the skis from the top using clamps and/or weight.
The weight can be from sandbags, buckets of water, or even a vehicle driven on top of the press.

This press design is the easiest and cheapest to build, but it exerts a low amount of pressure, which can cause the final ski to not laminate properly.

#### Vacuum Press
Another cheap press design.
The vacuum press works by placing the ski on top of the bottom section of a mold and covered in an air-tight film.
A vacuum is attached to the film and removes the air from the mold.
The pressure is generated by the negative

The downside to this press design is also the relatively low pressure output.
Although better pressure than the clamp press, the maximum pressure you can apply with a vacuum is 1 atmosphere or ~14.7 PSI.
Effective pressure will be lower because it is hard to seal a perfect vacuum.

#### Pneumatic Press
This press is used by professional ski manufacturers.
The ski mold is typically only the bottom half, while the top section is displaced using an air bladder.
Many TODO Some? or many? pneumatic presses use fire hoses as the bladder.

# Designing the Skis and Molds in CAD Software

Tips
- Render comments like the ski's center, effective edge, and measurement numbers to the final output within the software before you print.
- Find a print shop that has a plotter printer to print your templates.
  You can easily fit a ski template and press template within a standard plotter's width.
  I sent my design to a local UPS store with a plotter.
  They charged me per foot of printed length. $10 total.

# Materials

Skis are made by sandwiching materials together using epoxy.
Each material gives a certain characteristic or function in the ski.

Starting from the bottom-up, here are the materials you'll find in most skis:
- Base material
  - This is the part that glides on the snow.
  It is made of P-Tex, a polyethylene plastic.
  This plastic comes in 2 varieties, each with their own properties:
    - Extruded
      - Formed by melting and molding the plastic into shape.
    - Sintered
      - Formed by grinding the plastic into a powder and pressing into shape.
      Sintering is similar to pressing a clump of snow together in your hands to create a snowball.
      The pressure causes the material to melt and re-form into a stronger state.
      - Sintered bases are more expensive, but are more pourous, allowing the ski to accept wax well.
      This leads to the ski being faster.
  - Base material is porous to accept wax - helping the ski glide faster.
- Edges
  - Steel with tabs
- Fiberglass fabric
  - Usually in a triaxial weave, meaning 3 strands of fiberglass are weaved together to create a cloth
- Wood Core
  - The most popular types of wood in skis are As
  - Occasionally you will find skis cores mixing species of wood to combine benefits.
  For example, a ski could be constructed of mostly Poplar with alternating Maple "stringers" in the middle.

# How I Built My Skis

## Design

Here are the specifications of my ski:
Length 182cm
Width 90mm
Turn Radius 20m
Rocker - Camber - Rocker profile
ABS TODO? Sidewalls
I won't go into sidewall vs. cap construction.
Bamboo Laminate Core
Symmetric sidecut
Sintered Base

I wanted to build a symmetric park ski with a damp feel.
The skis I took inspiration from were [ON3P's Magnus ski] and the [Vishnu Wet].

## Materials

TODO table generator: https://www.tablesgenerator.com/markdown_tables#
can import table

| Item                                              | Store              | Description                                                                                                                                                                     | Cost Per | Quantity | Total |
|---------------------------------------------------|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------:|---------:|------:|
| MDF 4x8 sheet                                     | Hardware Store     | Used to build ski press body, ski template, and misc scrap - very easy to shape, cuts like butter                                                                               |      $13 |        2 |   $26 |
| 1/8" Threaded Rod + nuts/washer hardware          | Hardware Store     | Used to connect MDF in ski press - idea was to have these MDF sections be interchangeable                                                                                       |       $8 |        1 |    $8 |
| Jigsaw                                            | Hardware Store     | Tool for rough cutting skis/ski press materials                                                                                                                                 |      $45 |        1 |   $45 |
| Flush Trim Router Bit                             | Hardware Store     | Used to cut material flush to your ski template. The bit I used the most. Buy 2, one for cutting wood, one for strictly cutting base material - you want to keep this one sharp |      $10 |        2 |   $20 |
| Premade Bamboo Laminate Core                      | SkiLab             | 2 meter sections of bamboo strips pre-laminated - super handy                                                                                                                   |      $27 |        2 |   $54 |
| ABS Sidewall                                      | SkiLab             | Enough for 1 pair of skis (TODO or 2 snowboards?) Comes in TODO how long of strip? talk about cutting into strips                                                               |      $20 |        1 |   $20 |
| Tip/tail fill material - UHMW 12"x12"x2mm         | SkiLab             | Thin material used instead of core at tip and tail of ski - used because it is more flexible than wood                                                                          |       $6 |        1 |    $6 |
| VDS edge tape 20mm wide per meter                 |                    |                                                                                                                                                                                 |          |          |       |
| Edges 80" long                                    |                    |                                                                                                                                                                                 |          |          |       |
| Fiberglass 22oz triaxial                          |                    |                                                                                                                                                                                 |          |          |       |
| Topsheet - Isosport 8210 Clear brushed Nylon Pi28 | SnowboardMaterials |                                                                                                                                                                                 |          |          |       |
| Base - 4001 sintered                              | SnowboardMaterials |                                                                                                                                                                                 |          |          |       |
| Blueprint Plotter Printout                              | UPS |                                                                                                                                                                                 |          |          |     $10  |


### Materials Tips
- Borrow, don't buy
- The MDF doesn't need to be top tier quality.
Check the discount 4'x8' section if it exists at your hardware store.
I was lucky enough to find MDF "blemished" with forklift marks at a heavy discount.

# My Build

## Template Ski
Print blueprint
Glue spray on mdf
Sand to the edges

## Bases

# Mounting

# Stone Grinding

# Graphics

Can use rice paper graphics

# Mistakes / What I Would Do Differently Next Time

- Design of my skis didn't account for the 2mm width of the ski edges.
Everything but the topsheet needed to be cut -2mm along the entire perimeter.

# Resources

[Ski Builders Forum](http://www.skibuilders.com/phpBB2/) is the main resource for all things ski construction.
Most of my research and questions directed me there.
The posts on Ski Builders are great, but I found many of the images embedded in the posts were hosted on a now defunct image hosting site.
I've had some luck finding the old images by searching the history of specific posts on [Web Archive](https://web.archive.org/).

[Happy Monkey Snowboards Wiki](http://www.happymonkeysnowboards.com/MonkeyWiki/Construction_Overview)

Detailed snowboard construction wiki with various tips for each stage of the build process.
Very helpful.

[J Skis Factory Tour](https://www.youtube.com/watch?v=V4J_t5ym9II&ab_channel=Jskis)

One of the most clear and concise tours that walks through the entire ski build process.
