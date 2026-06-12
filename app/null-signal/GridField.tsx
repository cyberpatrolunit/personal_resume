"use client";

import { useEffect, useRef } from "react";
import styles from "./null-signal.module.scss";

// Dot field at 34px grid intersections (same pitch as the instrument's
// backdrop). Dots near the pointer shift cyan -> red and leave a short
// fading trail. Idle frames are skipped; static dots render once.
const GRID = 34;
const TRAIL_MS = 650;
const RADIUS = 110;
const MAX_TRAIL = 32;

export function GridField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const trail: { x: number; y: number; t: number }[] = [];
    let raf = 0;
    let running = false;

    const draw = (now: number) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      while (trail.length && now - trail[0].t > TRAIL_MS) trail.shift();

      for (let x = GRID; x < w; x += GRID) {
        for (let y = GRID; y < h; y += GRID) {
          let s = 0;
          for (const p of trail) {
            const dx = x - p.x;
            const dy = y - p.y;
            if (Math.abs(dx) > RADIUS || Math.abs(dy) > RADIUS) continue;
            const d = Math.hypot(dx, dy);
            if (d > RADIUS) continue;
            const wgt = (1 - d / RADIUS) * (1 - (now - p.t) / TRAIL_MS);
            if (wgt > s) s = wgt;
          }
          // lerp #00ffff -> #ff2244 by proximity/recency
          const r = Math.round(255 * s);
          const g = Math.round(255 - 221 * s);
          const b = Math.round(255 - 187 * s);
          const a = 0.13 + 0.72 * s;
          const size = 1.5 + s * 1.6;
          ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
          ctx.fillRect(x - size / 2, y - size / 2, size, size);
        }
      }
      return trail.length > 0;
    };

    const loop = (now: number) => {
      if (draw(now)) {
        raf = requestAnimationFrame(loop);
      } else {
        running = false;
      }
    };

    const wake = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(performance.now());
    };

    const onMove = (e: PointerEvent) => {
      if (reduced) return;
      trail.push({ x: e.clientX, y: e.clientY, t: performance.now() });
      if (trail.length > MAX_TRAIL) trail.shift();
      wake();
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.gridField} aria-hidden="true" />;
}
