# Scramble Reveal Design

## Goal

Add a lightweight random-letter reveal to the redesigned Wow hero and the sticky header logo. The effect should feel related to Maxime Heckel-style scrambled text, but implemented locally with bounded animation and no source copying.

## Behavior

- Text reveals from random characters into the final copy over a short duration.
- Whitespace remains stable so words do not jump while the animation runs.
- The effect runs once when the text enters the viewport, or immediately for header text.
- Users with `prefers-reduced-motion: reduce` see final text with no scrambling.
- The existing GSAP scroll fill in the Wow hero remains, but the new random-letter reveal is driven by `requestAnimationFrame` and stops after completion.

## Visual Direction

- Use the previous Wow font family feel by moving the large Wow type and header mark toward `Slussen.Exp`.
- Keep the redesigned site light, clean, and efficient.
- Use outlined display text and a slightly squashed vertical scale for the large Wow text so it feels graphic without adding bulk.

## Scope

This change is limited to the hero/header reveal behavior and typography polish. It does not change project content, routing, deployment, or the selected-work structure.
