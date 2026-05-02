# CSS Halftone Section Texture Design

## Goal

Adapt the halftone grid direction from Maxime Heckel's shader reference into the redesigned portfolio without adding WebGL, canvas, or continuous animation.

## Approach

- Use the existing pastel gradients as the base section color.
- Add a reusable `data-halftone` CSS system with two radial-dot layers.
- Rotate and scale the second layer to echo the dual-grid shader reference.
- Keep the dot grids static, subtle, and low opacity so text and project imagery remain dominant.
- Tune halftone colors, spacing, opacity, and angle per domain area through CSS custom properties.

## Scope

This is a styling-only pass. It does not change routing, project content, interaction behavior, or the scramble reveal.
