"use client";

import { useEffect, useRef } from "react";
import { createHalftoneDot, rotateHue, sampleLinearGradient } from "./halftoneMath";

interface HalftoneFieldProps {
  angle?: number;
  className?: string;
  colors: string[];
  maxRadius?: number;
  minRadius?: number;
  spacing?: number;
  toneAngle?: number;
}

function rgb([red, green, blue]: number[]) {
  return `rgb(${red}, ${green}, ${blue})`;
}

export function HalftoneField({
  angle = -18,
  className,
  colors,
  maxRadius = 7,
  minRadius = 1.2,
  spacing = 18,
  toneAngle = 0,
}: HalftoneFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.round(rect.width));
      const height = Math.max(1, Math.round(rect.height));

      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.clearRect(0, 0, width, height);

      const background = context.createLinearGradient(width, 0, 0, height);
      colors.forEach((_, index) => {
        const progress = colors.length === 1 ? 0 : index / (colors.length - 1);
        background.addColorStop(progress, rgb(rotateHue(sampleLinearGradient(colors, 1 - progress), 180)));
      });
      context.fillStyle = background;
      context.fillRect(0, 0, width, height);

      context.save();
      context.globalAlpha = 0.5;
      context.translate(width / 2, height / 2);
      context.rotate((angle * Math.PI) / 180);
      context.translate(-width / 2, -height / 2);

      const diagonal = Math.hypot(width, height);
      const startX = width / 2 - diagonal / 2;
      const startY = height / 2 - diagonal / 2;
      const endX = width / 2 + diagonal / 2;
      const endY = height / 2 + diagonal / 2;
      const toneRadians = (toneAngle * Math.PI) / 180;
      const toneX = Math.cos(toneRadians);
      const toneY = Math.sin(toneRadians);

      for (let y = startY; y <= endY; y += spacing) {
        for (let x = startX; x <= endX; x += spacing) {
          const normalizedX = (x - startX) / (endX - startX);
          const normalizedY = (y - startY) / (endY - startY);
          const position = Math.min(1, Math.max(0, normalizedX * toneX + normalizedY * toneY));
          const dot = createHalftoneDot({ colors, maxRadius, minRadius, position, radiusPosition: position });

          context.beginPath();
          context.fillStyle = rgb(dot.fill);
          context.arc(x, y, dot.radius, 0, Math.PI * 2);
          context.fill();
        }
      }

      context.restore();
    };

    draw();

    const resizeObserver = new ResizeObserver(draw);
    resizeObserver.observe(canvas);

    return () => {
      resizeObserver.disconnect();
    };
  }, [angle, colors, maxRadius, minRadius, spacing, toneAngle]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
