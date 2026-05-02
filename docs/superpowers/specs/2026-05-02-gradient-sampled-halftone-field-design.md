# Gradient-Sampled Halftone Field Design

## Goal

Add a more expressive hero halftone field where dot size and dot color are derived from a sampled gradient, with the backing field using a 180-degree hue offset.

## Behavior

- The Wow hero gets a single canvas background layer.
- The canvas draws a reversed gradient field whose colors are hue-rotated by 180 degrees.
- A rotated dot grid samples the original gradient field.
- Dot fill color comes from the sampled gradient.
- Dot radius is based on sampled luma: darker samples produce larger dots, lighter samples produce smaller dots.
- The field redraws only on mount and resize. It does not animate continuously.

## Scope

This first pass applies the true sampled halftone field only to the Wow hero. Other sections keep the lighter CSS halftone treatment.
