---
title: How to Build Skis
date: "2022-09-19T00:00:00.000Z"
description: "Complete guide - design, materials, building"
---

TODO run thru spell check

This blog post is my attempt to organize all the things I've learned while building my first pair of skis.

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

All modern skis are built using the same set of parameters.
Changes to these parameters affect the performance and feel of the skis.
These parameters include:

### Ski Length
  The length of the skis from tip to tail.

  A good rule of thumb is to ride skis that line up close to your eye-level when holding the skis vertically.
  This parameter can vary on the rider's height and skill level.

  A ski's *effective edge* is a subset of the ski's total length.
  The effective edge is the area that touches the ground during a turn.
  Think of it as the concave area of the ski's sidecut.
  The sidecut is the "hourglass" shape a ski makes when viewing the ski from the top.

  Things to note when choosing a ski length:
  - Longer skis tend to *ride* faster than shorter skis.
    - This is because the force exerted by the skier is distributed over a larger surface area, decreasing drag on the snow.
  - Shorter skis tend to *turn* faster than longer skis.
    - The force of the skier's turn is greater because it is being applied over a smaller area.

### Ski Width

  Specifically, this is the width of the ski measured at the thinnest point, also called the ski's "waist".

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
  
  A concave profile is called "reverse camber" or "rocker", like the feet of a rocking chair.
  
  The ski's profile is influenced on the design of the ski press.

### Ski Thickness/Taper

  Also known as a ski's "flex" or "flex pattern".
  When viewing the skis from the side, you will see that the ski is thickest in the middle and thins out as you move to each tip.

  The thickness of the material used in the ski determines its logitudinal flex.
  A stiffer ski will be more stable at speed, while softer skis are more forgiving when applying turning force.

### Ski Binding Mounting Point

  The mounting point is the area where the skier's boots attach to the skis via the bindings.
  This location can range from ~10cm behind the center of the ski, to the true center of the ski.

  A mounting point farther back from the center of the ski shifts the skiers weight back.
  This allows for more "float" in powder, but results in turns being harder to initiate.

  A mounting point further forward allows for the skier to initiate turns with less effort.
  Skis with forward mounting points feel "shorter".

  Park skiers prefer center mounted (or close to center mounted) skis.
  This allows the skier to more easily ski backwards or "switch".

### Material Choice

  TODO
  - Heavy wood charging ski
  - Light wood floaty/touring specific
  - Damp vs. poppy
  - Buttery

## Ski Parameters Are Coupled

Most of the paramaters you modify in a ski's design will change other parameters.

Some examples:
  - Ski width and ski length are coupled with the turn radius.
  - If you widen a ski's design while keeping the same length, the turn radius will be larger.
  - If you lenghten a ski but keep the width the same, the turn radius will also be larger.

I'll cover more in-depth ski design tips in the [Designing in CAD Software] TODO section.

## There's Too Many Parameters to Change - Where to Start?

The amount of design decisions at this step can lead to decision fatigue.
There's really no right or wrong choice for each of the parameters.
I tended to scrutinize over each detail in my design, but it turned out not to matter.
There's a large margin of acceptable error.
A ski will ride fine if it looks like a ski.

A good place to start is to examine a pair of skis you enjoy riding.

#### What do you like about the skis?

Ease of turning and playfulness could be some factors to consider.

#### What would you like to change about the skis?

Do the skis become unstable at speed?
Have the skis "washed out" on a turn because they were too flexible?

#### Demo Days

I recommend extending the idea of looking at your own skis by attending a ski resort's "demo day".
On a demo day, manufacturers bring many models of skis for riders to test.
Try riding a ski that's entirely different than the one you currently own.
Take notes when you're riding the skis.
Talk to the representatives to get their opinion on what they like.

#### Example Skis

TODO flesh out?

Fast-turning skis to rip through groomers?
Use a smaller turn radius.

Floaty off-piste skis?
Try a ski with a longer length, wider base, and a light wood like Aspen for the core.

Park skis that bend like [al dente pasta](https://www.youtube.com/watch?v=PXzuiz7Fzjo)?
Consider a "damp" wood like Bamboo.

## Press Design

The ski press is a specialized tool that bonds together all components of a ski.
The design parameter that the ski press manipulates is the ski's profile.

### Ski Molds

Ski Molds are designed to give the skis their profile.
They're made of medium-density fiberboard (MDF).
MDF is cheap, cuts like butter, and when stood on edge, withstands high pressures from the pressing force.

Some press designs use only a bottom mold.
Others use a bottom mold and an inverse top mold.
Typically, the molds are wide enough to hold 2 skis (or 1 snowboard) during the press.

TODO variable length MDF molds
TODO find that pic of a variable MDF molds/different components

### Types of Press Designs

Listed in increasing order of complexity.
TODO find that ski builders or happy monkey snowboard blog post with explainer on press designs

#### Clamp Press

The simplest press design.

The clamp press fits skis in between a top and bottom mold.
Pressure is applied to the skis from the top using clamps and/or weight.
The weight can be from sandbags, buckets of water, or even a vehicle driven on top of the press.

This press design is the easiest and cheapest to build, but it exerts low/uneven pressure, which can cause the final ski to not laminate properly.

#### Vacuum Press

The vacuum press works by placing the ski upon a bottom section mold and covered in an air-tight film.
A vacuum pump is attached to the film and removes the air from the mold.
The pressure differential between the vacuum inside the press vs. the atmospheric pressure outside is used to press the ski.

Although the vacuum press has better pressure than the clamp press, the maximum pressure you can apply with a vacuum is 1 atmosphere or ~14.7 PSI.
Effective pressure will be lower because it is hard to seal a perfect vacuum.
Also, elevation above sea level lowers atmospheric pressure.

Many woodworkers use this vacuum presses to apply veneers.
There are a few turnkey vacuum systems available for purchase from woodworking suppliers.
If you're looking to build a DIY vacuum press, this is an often referenced guide.
https://www.joewoodworker.com/veneering/welcome.htm

#### Pneumatic Press

This press is used by professional ski manufacturers and experienced hobby ski builders.
The ski mold is typically only the bottom half, while the top section is displaced using an air bladder.
Many pneumatic presses use a fire hose as the bladder.
Fire hoses can withstand the air pressure.

# Designing the Skis and Molds in CAD Software

Tips
- Design in metric, not imperial.
The language of skiing is metric.
You don't want to be constantly converting back and forth.
- Render comments like the ski's center, effective edge, and measurements to the final output within the software before you print.
- Find a print shop that has a plotter printer to print your templates.
  You can easily fit a ski template and press template within a standard plotter's width.
  I sent my design to a local UPS store with a plotter.
  They charged me per foot of printed length. $10 total.
- A good starting point to design is to find images of a ski similar to one you would like to design and "trace" the design in your design software.

# Materials

Skis are made by sandwiching materials together using epoxy.
Each material gives a certain characteristic or function in the ski.

Starting from the bottom-up, here are the materials you'll find in most skis:
## Base material

This is the part that glides on the snow.
It is made of "P-Tex", a polyethylene plastic.
P-Tex is porous and accepts wax - helping the ski glide faster.

This plastic comes in 2 varieties, each with their own properties:
  - Extruded
    - Formed by melting and molding the plastic into shape.
  - Sintered
    - Formed by grinding the plastic into a powder and pressing into shape.
    Sintering is similar to pressing a clump of snow together in your hands to create a snowball.
    The pressure causes the material to melt and re-form into a stronger state.
    - Sintered bases are more expensive, but are more pourous, allowing the ski to accept wax well.
    This leads to the ski being faster.

## Edges

Steel with tabs.
TODO picture
Comes in a roll.
Wear gloves and eye protection when unraveling the roll.

## Fiberglass fabric

Usually in a triaxial weave, meaning 3 strands of fiberglass are weaved together to create a cloth

## Wood Core

Poplar, Aspen, Ash, and Maple are common woods used in skis.

Occasionally you will find skis cores mixing species of wood to combine benefits.
For example, a ski could be constructed of mostly Poplar with alternating Ash "stringers" in the middle.
TODO picture of stringers
A ski with this wood compisition will have a "springy" feel from the Poplar, but still maintain the sturdiness of the Maple.

## Sidewalls

Made of ABS plastic.
Used to give the ski torsional rigitity.
Also adds a waterproof layer protecting the wood core.

# How I Built My Skis

## Design

Here are the specifications of my ski:
Length 182cm
Width 90mm
Turn Radius 20m
Rocker - Camber - Rocker profile
ABS Sidewalls
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

My skis were made using a clamp press.
The specs of the skis are:
- 182cm length
- 92mm width
- 20m turn radius
TODO other specs?

TODO add a picture of the skis here

## Design Template Ski

I first created a CAD model of the skis I wanted.
I added guidelines and measurements in the CAD program, so when I went to print it out, I could use the lines as a reference.
TODO add picture of Sketchup

To print the blueprint, I sent the PDF to my local UPS store.
They had a plotter and could print out any length of paper.
This was limited to about 4 feet in width, the width of the plotter printer.
In order to maximize the space, I exported a top view and side view of the skis, and combined them into 1 PDF to fit the width of the plotter.
The side view was used for the press camber and the top view was used for the skis' sidecut.
TODO add picture of printout (check gmail)

Once I received the print out, I cut out the top and side views and used spray glue to attach the paper to MDF.
Then I rough cut the MDF to the template with a jigsaw and sanded to match the edges.
Take your time with this process because the template sets the baseline for the rest of the build.

## Press

I decided to build a clamp press.

## Bases
Base material comes shipped in a roll.
Before cutting the material, unroll the material and place weights so the material flattens.
It is easiest to cut the material with a razor blade.
Clamp the base material to your template and use a router with a flush trim bit to transfer the template to the material.
It is helpful to use a white sharpie on the base material for markings.
Mark the words "tip" and "tail" of your base material to keep it aligned later in the layup process.
The smooth side of the base material will be touching snow, while the rougher

TODO add pictures of base/ base cutting

# Mounting
Two options:
Find a template online that matches your bindings - eg. Google "Look Pivot mounting template"
TODO find mounting video - masking tape/super glue technique
TODO find drill bit size - I think it was 3/16 in?
When marking holes, rotate the drill bit to get an even mount hole

Wrap masking tape to depth of the screw.
Put a bit of super glue on the bottom of the screw to help keep it in place.

# Stone Grinding
Stone grinding gives structure to the base material.
It also

# Graphics
Can use rice paper graphics

# Mistakes / What I Would Do Differently Next Time

- Design of my skis didn't account for the 2mm width of the ski edges.
Everything but the topsheet needed to be cut -2mm along the entire perimeter.
  I would make my template with one side at regular width, and on the other side extruded +2mm.
  TODO find video where the dude explained this - think it was the video series where he messed up the epoxy layup.
  Black mountain ski co video series?
- When printing my template, I exported my CAD design to print with multiple pages.
  I taped together the pages and built a template, but it wasn't straight.
  This was dumb. For V2 of the template, I sent my design file to be printed with a plotter at a UPS store.
- Design a ski mold that fits 2 skis widthwise.
  Because my mold could only fit 1 ski, I had to do 2 pressings to complete the set of skis.
  This let to small inconsistencies in the shape of each ski.

# Resources

[Ski Builders Forum](http://www.skibuilders.com/phpBB2/) is the main resource online for all things ski construction.
Most of my research and questions directed me there.
The posts on Ski Builders are great, but I found many of the images embedded in the posts were hosted on a now defunct image hosting site.
I've had some luck finding the old images by searching the history of specific posts on [Web Archive](https://web.archive.org/).

[Happy Monkey Snowboards Wiki](http://www.happymonkeysnowboards.com/MonkeyWiki/Construction_Overview)

Detailed snowboard construction wiki with various tips for each stage of the build process.

[J Skis Factory Tour](https://www.youtube.com/watch?v=V4J_t5ym9II&ab_channel=Jskis)

One of the most clear and concise tours that walks through the entire ski build process.

[Joe Woodworker Veneering Guide](https://www.joewoodworker.com/veneering/welcome.htm)

Referenced in the Vacuum Press design section.
Most complete vacuum pump guide online.